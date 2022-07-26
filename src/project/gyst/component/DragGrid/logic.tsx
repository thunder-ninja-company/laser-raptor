import type { DragDropState, DragGridDTO } from "./type";
import type { DragPanelDTO } from "./DragPanel/type";
import type { DragItemDTO } from "./DragItem/type";
import type { ListPosition } from "gyst/type";
import { copyObject } from "gyst/shared";
import { nanoid } from 'nanoid'

const copyItem = (dragGrid: DragGridDTO, itemId: string): DragItemDTO => {

    const itemInfo = indexOfItemAndPanel(dragGrid, itemId);

        if (!itemInfo) {
            debugger;

            console.log(`Could not find item ${itemId}`)
            throw Error('Unable to find item  ${itemId}');
        }

        const { panelIndex, itemIndex } = itemInfo;

        return copyObject(dragGrid.panels[panelIndex].items[itemIndex]) as DragItemDTO;
};

export const removePanel = (_dragGrid : DragGridDTO, panelId : string) : void => {
    throw Error(`removePanel - Not implemented (${panelId})`);
};

export const insertPanel = (dragGrid : DragGridDTO, index : number, panel : DragPanelDTO) : void => {
    dragGrid.panels.splice(index, 0, panel);
}

export const insertItem = (dragGrid : DragGridDTO, panelId : string, position : ListPosition, item : DragItemDTO) : void => {

    const panelIndex = indexOfPanel(dragGrid, panelId);

    if (panelIndex === -1)
        throw Error(`Could not find panel with id ${panelId}`);

    const panel = getPanelByIndex(dragGrid, panelIndex);

    if (position === 'head') {
        panel.items.unshift(item);
    } else {
        panel.items.push(item);
    }
};

const indexOfItem = (dragGrid : DragGridDTO, panelIndex : number, itemId : string) : number =>
    dragGrid.panels[panelIndex].items.findIndex(dragItem => dragItem.id === itemId);

const indexOfItemAndPanel = (dragGrid: DragGridDTO, itemId: string): { panelIndex : number; itemIndex : number; } => {

    const notFound = { panelIndex : -1, itemIndex : -1 };

    if (!itemId) notFound;

    for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {
        const itemIndex = indexOfItem(dragGrid, panelIndex, itemId);

        if (itemIndex !== -1) {
            return {
                panelIndex,
                itemIndex
            };
        }
    }

    return notFound;
}

const indexOfPanel = (dragGrid : DragGridDTO, panelId : string) : number =>
    dragGrid.panels.findIndex(dragPanel => dragPanel.id === panelId);

const getPanelByIndex = (dragGrid : DragGridDTO, panelIndex : number) : DragPanelDTO =>
    dragGrid.panels[panelIndex];

export const toggleItem = (dragGrid : DragGridDTO, itemId : string) : void => {

    const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, itemId);

    const currentStatus = dragGrid.panels[panelIndex].items[itemIndex].status;

    dragGrid.panels[panelIndex].items[itemIndex].status
        = currentStatus === 'checked'
            ? 'default'
            : 'checked';
};

export const removeItem = (dragGrid : DragGridDTO, itemId : string) : DragItemDTO => {

    const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, itemId);

    return dragGrid.panels[panelIndex].items.splice(itemIndex, 1)[0];
};

const wasDroppedOntoSamePanel = (dragGrid : DragGridDTO, dragPanelId : string, dropPanelId : string) : boolean => {

    // panel is null when dragging an item between two other panels
    if (dropPanelId === null)
        return false;

    const dragPanelIndex = indexOfPanel(dragGrid, dragPanelId);
    const dropPanelIndex = indexOfPanel(dragGrid, dropPanelId);

    return dragPanelIndex === dropPanelIndex;
};

const wasDroppedOntoDifferentPanel = (dragPanelId : string, dropPanelId : string) : boolean =>
    dropPanelId === null || dragPanelId !== dropPanelId;

const wasDroppedBetweenPanels = (dropIndex : number, dropPanelId : string) : boolean =>
    dropPanelId === null && dropIndex !== null;

export const removeEmptyPanels = (dragGrid : DragGridDTO) : DragGridDTO => {

    for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {
        if (dragGrid.panels[panelIndex].items.length === 0) {
            dragGrid.panels.splice(panelIndex, 1);
            panelIndex--;
        }
    }

    return dragGrid;
}

const dropBetweenPanels = (dragGrid : DragGridDTO, dropIndex : number, dragItem : DragItemDTO) : DragGridDTO => {

    // insert the item copy of the item being dragged
    // into a new panel and insert the panel into the grid
    // where it was dropped
    dragGrid.panels.splice(dropIndex, 0, {
        id: nanoid(),
        items: [],
    })

    // pluck it from the old panel, this is a new panel
    removeItem(dragGrid, dragItem.id);

    dragGrid.panels[dropIndex].items.push(dragItem);

    removeEmptyPanels(dragGrid);

    return dragGrid;
};

const dropOntoSamePanel = (dragGrid : DragGridDTO, dragItemId : string, dropItemIndex : number) => {

    const {
        itemIndex : dragItemIndex,
        panelIndex,
    } = indexOfItemAndPanel(dragGrid, dragItemId);

    const itemCopy = removeItem(dragGrid, dragItemId);

    if (dragItemIndex > dropItemIndex)
        dragGrid.panels[panelIndex].items.splice(dropItemIndex, 0, itemCopy);
    else
        dragGrid.panels[panelIndex].items.splice(dropItemIndex - 1, 0, itemCopy);

    return dragGrid;
};


const dropOntoDifferentPanel = (
    dragGrid       : DragGridDTO,
    dropPanelIndex : number,
    dragItemId     : string,
    dropIndex      : number,
    itemCopy       : DragItemDTO,
) : DragGridDTO => {

    const {
        panelIndex : dragPanelIndex,
        itemIndex  : dragItemIndex,
    } = indexOfItemAndPanel(dragGrid, dragItemId);

    dragGrid.panels[dragPanelIndex].items.splice(dragItemIndex, 1);
    dragGrid.panels[dropPanelIndex].items.splice(dropIndex, 0, itemCopy);

    removeEmptyPanels(dragGrid);

    return dragGrid;
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

export const handleChange = (
    dragGrid : DragGridDTO, {
    dragItemId, dropIndex, dropPanelId, dragPanelId,
} : DragDropState,
    onChange : (value : DragGridDTO) => void) => {

    // typescript is really picky about handling these nulls. This
    // simplifies the rest of the code here since it can assume the values exist
    if (dropIndex === null
        || dragItemId  === null
        || dragPanelId === null
        || dropPanelId === null)
        return;

    const { gridCopy, itemCopy, dropPanelIndex }
        = getDragDropItems(dragGrid, dragItemId, dragPanelId, dropPanelId);

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

