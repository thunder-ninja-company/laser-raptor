import type { DragDropState, DragGridContextDTO, DragGridDTO, Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { DragPanelDTO } from "./DragPanel/type";
import type { DragItemDTO } from "./DragItem/type";
import { DragGridContext } from "./constant";
import { copyObject } from "gyst/shared";
import DragGridContent from "./content";
import { DndProvider } from 'react-dnd'
import { nanoid } from 'nanoid'
import React, { useEffect } from "react";

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

const isRemovingTheLastItem = (gridCopy : DragGridDTO, panelIndex : number) : boolean => {

    // const panelIndex = indexOfDragPanel(gridCopy, dragDropState);

    return getPanelByIndex(gridCopy, panelIndex).items.length === 1;
};

const getPanelByIndex = (dragGrid : DragGridDTO, panelIndex : number) : DragPanelDTO =>
    dragGrid.panels[panelIndex];

const removeItem = (gridCopy : DragGridDTO, dragItemId : string | null) : void => {
    debugger;

    const { panelIndex, itemIndex } = indexOfItemAndPanel(gridCopy, dragItemId);

    gridCopy.panels[panelIndex].items.splice(itemIndex, 1);
};

const isDraggedIntoSamePosition = (dragItemIndex : number, dropIndex : number | null) : boolean =>
    dragItemIndex === dropIndex || dragItemIndex + 1 === dropIndex;

const isReorderingExistingPanel = (dragPanelIndex : number, dropPanelIndex : number) : boolean =>
    dragPanelIndex === dropPanelIndex;

const wasDroppedOntoSamePanel = (gridCopy : DragGridDTO, dragPanelId : string, dropPanelId : string | null) : boolean => {
    debugger;

    // panel is null when dragging an item between two other panels
    if (dropPanelId === null)
        return false;

    const dragPanelIndex = indexOfPanel(gridCopy, dragPanelId);
    const dropPanelIndex = indexOfPanel(gridCopy, dropPanelId);

    return dragPanelIndex === dropPanelIndex;
};

const wasDroppedOntoDifferentPanel = (dragPanelId : string, dropPanelId : string | null) : boolean =>
    dropPanelId === null || dragPanelId !== dropPanelId;

const wasDroppedBetweenPanels = (dropIndex : number | null, dropPanelId : string | null) : boolean =>
    dropPanelId === null && dropIndex !== null;

const removeEmptyPanels = (gridCopy : DragGridDTO) : DragGridDTO => {

    for (let panelIndex = 0; panelIndex < gridCopy.panels.length; panelIndex++) {
        if(gridCopy.panels[panelIndex].items.length === 0) {
            gridCopy.panels.splice(panelIndex, 1);
            panelIndex--;
        }
    }

    return gridCopy;
}

const dropBetweenPanels = (gridCopy : DragGridDTO, dropIndex : number, itemCopy : DragItemDTO) : DragGridDTO => {
    debugger; // verified - NO

    // insert the item copy of the item being dragged
    // into a new panel and insert the panel into the grid
    // where it was dropped
    gridCopy.panels.splice(dropIndex, 0, {
        id: nanoid(),
        items: [],
    })

    // pluck it from the old panel, this is a new panel
    removeItem(gridCopy, itemCopy.id);

    gridCopy.panels[dropIndex].items.push(itemCopy);

    debugger;
    removeEmptyPanels(gridCopy);

    // insert the item into the new panel


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
    gridCopy.panels[dropPanelIndex].items.splice(dropIndex, 0, itemCopy);

    return gridCopy;
}

const getDragDropItems = (dragGrid : DragGridDTO, dragItemId : string, dragPanelId : string, dropPanelId : string | null) => {

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

    useEffect(() => {
      }, [dragGridOriginal]);

    console.log(dragGridOriginal);
    debugger;

    const handleChange = (dragDropState : DragDropState) => {

        const {
            dragItemId, dropIndex, dropPanelId, dragPanelId,
        } = dragDropState;

        debugger;

        if(dropIndex === null || dragItemId === null || dragPanelId === null)
            return;

        const {
            gridCopy, itemCopy, dropPanelIndex,
        } = getDragDropItems(dragGridOriginal, dragItemId, dragPanelId, dropPanelId);

        // If dragging between panels, then add a new panel with the item
        // as the initial seed element
        if (wasDroppedBetweenPanels(dropIndex, dropPanelId)) {
            console.log('wasDropped BETWEEN TWO PANELS');
            debugger;

            // VERIFIED - IN PROGRESS
            const newGrid = dropBetweenPanels(gridCopy, dropIndex, itemCopy);

            return onChange(newGrid);
        }

        if (wasDroppedOntoSamePanel(gridCopy, dragPanelId, dropPanelId)) {
            console.log('wasDropped SAME PANEL');

            debugger;

            const newGrid = dropOntoSamePanel(gridCopy, dragItemId, dropIndex);

            return onChange(newGrid);

        }

        if (wasDroppedOntoDifferentPanel(dragPanelId, dropPanelId)) {
            console.log('wasDropped DIFFERENT PANELS');

            // VERIFIED
            debugger;

            const newGrid = dropOntoDifferentPanel(gridCopy, dropPanelIndex, dragItemId, dropIndex, itemCopy);

            return onChange(newGrid);
        }

        debugger;

        console.log('UNHANDLED case of drag and drop');
        console.log(dragDropState);

        debugger;

        return onChange(gridCopy);
    }


    const context : DragGridContextDTO = {
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
