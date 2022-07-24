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

const copyItem = (dragGrid: DragGridDTO, itemId: string | null): DragItemDTO => {

    const itemInfo = indexOfItemAndPanel(dragGrid, itemId);

        if(!itemInfo) {
            debugger;

            console.log(`Could not find item ${itemId}`)
            throw Error('Unable to find item  ${itemId}');
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

const isRemovingTheLastItem = (gridCopy : DragGridDTO, panelIndex : number | null) : boolean => {

    // const panelIndex = indexOfDragPanel(gridCopy, dragDropState);

    return getPanelByIndex(gridCopy, panelIndex).items.length === 1;
};

const getPanelByIndex = (dragGrid : DragGridDTO, panelIndex : number | null) : DragPanelDTO =>
    dragGrid.panels[panelIndex || -1];

const removeItem = (gridCopy : DragGridDTO, dragItemId : string | null) : void => {

    const { panelIndex, itemIndex } = indexOfItemAndPanel(gridCopy, dragItemId);

    // lop off the whole panel which implictly removes the item
    if(getPanelByIndex(gridCopy, panelIndex).items.length === 1) {

        gridCopy.panels.splice(panelIndex, 1);
    }
    else {
        gridCopy.panels[panelIndex].items.splice(itemIndex, 1);
    }
};

const isDraggedIntoSamePosition = (dragItemIndex : number, dropIndex : number | null) : boolean =>
    dragItemIndex === dropIndex || dragItemIndex + 1 === dropIndex;

const isReorderingExistingPanel = (dragPanelIndex : number, dropPanelIndex : number) : boolean =>
    dragPanelIndex === dropPanelIndex;

const reorderPanelItems = (
    gridCopy   : DragGridDTO,
    dragItemId : string,
    dropIndex  : number
) : DragGridDTO => {

    const {
        panelIndex,
        itemIndex  : dragItemIndex,
    } = indexOfItemAndPanel(gridCopy, dragItemId);

    // Only move if dragging into a new position within the panel
    // The UI should genreally not allow this, but this would
    // be a situation where the person tried dragging into a drop
    // zone of the same index (UI displays before item) or dragged an item into
    // the drop zome immedatly after itself. Both would result in the item
    // staying where it already is and not b
    if (isDraggedIntoSamePosition(dragItemIndex, dropIndex)) {
        debugger;
        console.log('Dragging into directly adjacent zone, not moving anything.')

        return gridCopy;
    }

    // dragging into the anchor landing panel at the end of the list.
    // so append it rather than insert it
    if(dropIndex === gridCopy.panels[panelIndex].items.length) {

        gridCopy.panels[panelIndex].items.push(itemCopy);
        gridCopy.panels[panelIndex].items.splice(dragItemIndex, 1);

    } else {
        debugger;
        // otherwise the zone index matches up with item index, so insert whereever
        // the drop index was
        gridCopy.panels[panelIndex].items.splice(dropIndex || 0, 0, itemCopy);
    }

    return gridCopy;
}



const wasDroppedOntoSamePanel = (gridCopy : DragGridDTO, dragPanelId : string, dropPanelId : string) : boolean => {
    debugger;

    const dragPanelIndex = indexOfPanel(gridCopy, dragPanelId);
    const dropPanelIndex = indexOfPanel(gridCopy, dropPanelId);

    return dragPanelIndex === dropPanelIndex;
};

const wasDroppedOntoDifferentPanel = (dragPanelId : string, dropPanelId : string) : boolean =>
    dragPanelId !== dropPanelId;

const wasDroppedBetweenPanels = (dropIndex : number | null, dropPanelId : string | null) : boolean =>
    dropPanelId === null && dropIndex !== null;

const dropBetweenPanels = (gridCopy : DragGridDTO, dropIndex : number, dragItemId : string, itemCopy : DragItemDTO) : DragGridDTO => {
    debugger; // verified - NO

    // insert the item copy of the item being dragged
    // into a new panel and insert the panel into the grid
    // where it was dropped
    gridCopy.panels.splice(dropIndex || 0, 0, {
        id: nanoid(),
        items: [],
    })

    // pluck it from the old panel, this is a new panel
    removeItem(gridCopy, dragItemId);

    // insert the item into the new panel
    gridCopy.panels[dropIndex || 0].items.push(itemCopy);

    return gridCopy;
};

const dropOntoSamePanel = (gridCopy : DragGridDTO, dragItemId : string, dropIndex : number) => {
    const panelIndex = indexOfPanel(gridCopy, dragItemId);

    debugger;

    return gridCopy;
};

const dropOntoDifferentPanel = (
    gridCopy       : DragGridDTO,
    dropPanelIndex : number,
    dragItemId     : string,
    dropIndex      : number,
    itemCopy       : DragItemDTO,
) : DragGridDTO => {

    const {
        panelIndex : dragPanelIndex,
        itemIndex  : dragItemIndex,
    } = indexOfItemAndPanel(gridCopy, dragItemId);

    gridCopy.panels[dragPanelIndex].items.splice(dragItemIndex, 1);
    gridCopy.panels[dropPanelIndex].items.splice(dropIndex || 0, 0, itemCopy);

    return gridCopy;
}

const getDragDropItems = (dragGrid : DragGridDTO, dragItemId : string, dragPanelId : string, dropPanelId : string) => {

     // Copy the original item from the tree
     const itemCopy = copyItem(dragGrid, dragItemId);
     // operate on a copy of the prop since you can't modify the original
     const gridCopy = copyObject(dragGrid) as DragGridDTO;

     const dragPanelIndex = indexOfPanel(gridCopy, dragPanelId);
     const dropPanelIndex = indexOfPanel(gridCopy, dropPanelId);

    return {
        gridCopy,
        itemCopy,
        dragPanelIndex,
        dropPanelIndex,
    }
};

export default function DragGrid(props: Props) {

    const { dragGrid : dragGridOriginal, onChange } = props;

    const handleChange = (dragDropState : DragDropState) => {

        const { dragItemId, dropIndex, dropPanelId, dragPanelId } = dragDropState;

        if(dropIndex === null || dragItemId === null || dragPanelId === null || dropPanelId === null)
            return;

        const {
            gridCopy, itemCopy, dragPanelIndex, dropPanelIndex,
        } = getDragDropItems(dragGridOriginal, dragItemId, dragPanelId, dropPanelId);

                // If dragging between panels, then add a new panel with the item
        // as the initial seed element
        if(wasDroppedBetweenPanels(dropIndex, dropPanelId)) {
            debugger;

            const newGrid = dropBetweenPanels(gridCopy, dropIndex, dragItemId, itemCopy);

            return onChange(newGrid);
        }

        if (wasDroppedOntoSamePanel(gridCopy, dragPanelId, dropPanelId)) {
            debugger;

            const newGrid = dropOntoSamePanel(gridCopy, dragItemId, dropIndex || 0);

            return onChange(newGrid);
        }

        if (wasDroppedOntoDifferentPanel(dragPanelId, dropPanelId)) {
            debugger;

            const newGrid = dropOntoDifferentPanel(gridCopy, dropPanelIndex, dragItemId, dropIndex, itemCopy);

            return onChange(newGrid);
        }

        console.log('Unhandled case of drag and drop');
        console.log(dragDropState);

        debugger;

        return onChange(gridCopy);
    }


    const context = {
        dragGrid : dragGridOriginal,
        onChange : handleChange,
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
