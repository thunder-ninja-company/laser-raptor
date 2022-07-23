import type { DragDropState, DragGridDTO, Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { DragItemDTO } from "./DragItem/type";
import { DragGridContext } from "./constant";
import DragGridContent from "./content";
import { DndProvider } from 'react-dnd'
import { nanoid } from 'nanoid'
import React from "react";
import type { DragPanelDTO } from "./DragPanel/type";

const copyObject = (obj: any) => JSON.parse(JSON.stringify(obj));

const copyItem = (dragGrid: DragGridDTO, itemId: string | null): DragItemDTO | null => {
    const itemInfo = indexOfItemAndPanel(dragGrid, itemId);

        if(!itemInfo) {
            debugger;

            console.log(`Could not find item ${itemId}`)
            return null;
        }

        const { panelIndex, itemIndex } = itemInfo;

        return copyObject(dragGrid.panels[panelIndex].items[itemIndex]) as DragItemDTO;
};

const indexOfItem = (dragGrid : DragGridDTO, panelIndex : number, itemId : string | null) : number =>
    dragGrid.panels[panelIndex].items.findIndex(dragItem => dragItem.id === itemId);

const indexOfItemAndPanel = (dragGrid: DragGridDTO, itemId: string | null): { panelIndex : number; itemIndex : number; } => {

    const notFound = { panelIndex : -1, itemIndex : -1 };

    if(!itemId) notFound;

    for(let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {
        const itemIndex = indexOfItem(dragGrid, panelIndex, itemId);

        if(itemIndex !== -1) {
            return {
                panelIndex,
                itemIndex
            };
        }
    }

    return notFound;
}

const indexOfPanel = (dragGrid : DragGridDTO, panelId : string | null) : number =>
    dragGrid.panels.findIndex(dragPanel => dragPanel.id === panelId);

const wasDroppedBetweenPanels = ({ dropIndex, dropPanelId } : DragDropState) : boolean =>
    dropPanelId === null && dropIndex !== null;

const indexOfDropPanel = (dragGrid : DragGridDTO, { dropPanelId } : DragDropState) : number =>
    indexOfPanel(dragGrid, dropPanelId);

const indexOfDragPanel = (dragGrid : DragGridDTO, { dragPanelId } : DragDropState) : number =>
    indexOfPanel(dragGrid, dragPanelId);

const isRemovingTheLastItem = (gridCopy : DragGridDTO, dragDropState : DragDropState) : boolean => {

    const panelIndex = indexOfDragPanel(gridCopy, dragDropState);

    return getPanelByIndex(gridCopy, panelIndex).items.length === 1;
};

const getPanelByIndex = (dragGrid : DragGridDTO, panelIndex : number | null) : DragPanelDTO =>
    dragGrid.panels[panelIndex || -1];

export default function DragGrid(props: Props) {

    const { dragGrid, onChange } = props;

    const handleChange = (dragDropState : DragDropState) => {

        const { dragItemId, dropIndex } = dragDropState;

        // Copy the original item from the tree
        const itemCopy = copyItem(dragGrid, dragItemId);

        if(!itemCopy) return null;

        // operate on a copy of the prop since you can't modify the original
        const gridCopy = copyObject(props.dragGrid) as DragGridDTO;

        // If dragging between panels, then add a new panel with the item
        // as the initial seed element
        if(wasDroppedBetweenPanels(dragDropState)) {

            // insert the item copy of the item being dragged
            // into a new panel and insert the panel into the grid
            // where it was dropped
            gridCopy.panels.splice(dropIndex || 0, 0, {
                id: nanoid(),
                items: [
                    itemCopy,
                ],
            })
        } else { // dropped onto an existing panel, insert the item

            const dropPanelIndex = indexOfDropPanel(gridCopy, dragDropState);

            gridCopy.panels[dropPanelIndex].items.splice(dropIndex || 0, 0, itemCopy);
        }

        // now remove the original item from the original panel
        // since either panels or items are being added, we need to re-lookupś

        const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, dragItemId);

        if(isRemovingTheLastItem(gridCopy, dragDropState)) {
            gridCopy.panels.splice(panelIndex, 1);
        }
        else {
            gridCopy.panels[panelIndex].items.splice(itemIndex, 1);
        }

       return onChange(gridCopy);
    }


    const context = {
        onChange : handleChange,
        dragGrid,
    };

    // debugger;

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <DragGridContent {...props} />
            </DndProvider>
        </DragGridContext.Provider>

    );
}
