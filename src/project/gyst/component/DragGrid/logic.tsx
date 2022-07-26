import type { ActionType } from "gyst/component/AppHeader/type";
import type { DragDropState, DragGridDTO } from "./type";
import type { DragPanelDTO } from "./DragPanel/type";
import type { DragItemDTO } from "./DragItem/type";
import { copyObject } from "gyst/shared";
import { nanoid } from 'nanoid'
import type { ListPosition } from "../../type";

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

export const removePanel = (actionId : string) : void => {
    debugger;
};

export const removeItem = (actionId : string) : void => {
    debugger;
};



export const insertPanel = (dragGrid : DragGridDTO, index : number, panel : DragPanelDTO) : void => {
    dragGrid.panels.splice(index, 0, panel);
}

export const insertItem = (dragGrid : DragGridDTO, panelId : string, position : ListPosition, item : DragItemDTO) : void => {
    debugger; // verified - NO

    const panelIndex = indexOfPanel(dragGrid, panelId);

    if(panelIndex === -1) {
        debugger;
        throw Error(`Could not find panel with id ${panelId}`);
    }

    const panel = getPanelByIndex(dragGrid, panelIndex);

    if(position === 'head') {
        panel.items.unshift(item);
    } else {
        panel.items.push(item);
    }


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

const removeItemById = (gridCopy : DragGridDTO, dragItemId : string | null) : DragItemDTO => {
    debugger;

    const { panelIndex, itemIndex } = indexOfItemAndPanel(gridCopy, dragItemId);

    return gridCopy.panels[panelIndex].items.splice(itemIndex, 1)[0];
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
    removeItemById(gridCopy, itemCopy.id);

    gridCopy.panels[dropIndex].items.push(itemCopy);

    debugger;
    removeEmptyPanels(gridCopy);

    // insert the item into the new panel


    return gridCopy;
};

const dropOntoSamePanel = (gridCopy : DragGridDTO, dragItemId : string, dropItemIndex : number) => {
    debugger;

    const {
        itemIndex : dragItemIndex,
        panelIndex,
    } = indexOfItemAndPanel(gridCopy, dragItemId);

    const itemCopy = removeItem(gridCopy, dragItemId);

    if(dragItemIndex > dropItemIndex) {
        gridCopy.panels[panelIndex].items.splice(dropItemIndex, 0, itemCopy);

    } else {
        gridCopy.panels[panelIndex].items.splice(dropItemIndex - 1, 0, itemCopy);
    }

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

    removeEmptyPanels(gridCopy);

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

export const handleChange = (
    dragGridOriginal : DragGridDTO, {
    dragItemId, dropIndex, dropPanelId, dragPanelId,
} : DragDropState,
    onChange : (value : DragGridDTO) => void) => {

    // typescript is really picky about handling these nulls. This
    // simplifies the rest of the code here since it can assume the values exist
    if(dropIndex === null || dragItemId === null || dragPanelId === null)
        return;

    const { gridCopy, itemCopy, dropPanelIndex }
        = getDragDropItems(dragGridOriginal, dragItemId, dragPanelId, dropPanelId);

    // If dragging between panels, then add a new panel with the item
    // as the initial seed element
    if (wasDroppedBetweenPanels(dropIndex, dropPanelId))
        return onChange(dropBetweenPanels(gridCopy, dropIndex, itemCopy));

    if (wasDroppedOntoSamePanel(gridCopy, dragPanelId, dropPanelId))
        return onChange(dropOntoSamePanel(gridCopy, dragItemId, dropIndex));

    if (wasDroppedOntoDifferentPanel(dragPanelId, dropPanelId))
        return onChange(dropOntoDifferentPanel(gridCopy, dropPanelIndex, dragItemId, dropIndex, itemCopy));

    throw Error('Unable to figure out wtf happened dropping the item');
}

