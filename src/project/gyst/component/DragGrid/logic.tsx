import type { DragDropState, DragGridDTO } from './type'
import type { DragPanelDTO } from './DragPanel/type'
import type { DragItemDTO } from './DragItem/type'
import type { ListPosition } from 'gyst/type'
import { copyObject } from 'gyst/shared'
import { nanoid } from 'nanoid'
import { produce } from 'immer'
import _ from 'lodash'

export const toggleItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, itemId)

        const currentStatus = dragGrid.panels[panelIndex].items[itemIndex].status

        dragGrid.panels[panelIndex].items[itemIndex].status
            = currentStatus === 'checked'
                ? 'default'
                : 'checked'
    })
}

export const duplicateItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, itemId)

        const itemCopy = copyObject(dragGrid.panels[panelIndex].items[itemIndex]) as DragItemDTO

        dragGrid.panels[panelIndex].items.splice(itemIndex + 1, 0, {
            ...itemCopy,
            id : nanoid(),
        })
    })
}

export const duplicatePanel = (initialDragGrid : DragGridDTO, panelId : string, newPanelId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const panelIndex = getPanelIndexById(dragGrid, panelId)

        const panelToCopy = dragGrid.panels[panelIndex]

        dragGrid.panels.splice(panelIndex, 0, {
            ...panelToCopy,
            id : newPanelId,
        })
    })
}

export const removeItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, itemId)

        _.remove(dragGrid.panels[panelIndex].items, itemIndex)
    })
}

export const removePanel = (initialDragGrid : DragGridDTO, panelId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        _.remove(
            dragGrid.panels,
            panel => panel.id === panelId
        )
    })
}

export const removeEmptyPanels = (initialDragGrid : DragGridDTO) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {
            if (dragGrid.panels[panelIndex].items.length === 0) {
                dragGrid.panels.splice(panelIndex, 1)
                panelIndex--
            }
        }
    })
}

export const insertPanel = (initialDragGrid : DragGridDTO, index : number, panel : DragPanelDTO) : DragGridDTO =>
    produce(initialDragGrid, dragGrid => {
        dragGrid.panels.splice(index, 0, panel)
    })

export const insertItem = (initialDragGrid : DragGridDTO, panelId : string, position : ListPosition, item : DragItemDTO) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const panel = getPanelById(dragGrid, panelId)

        if (position === 'head')
            panel.items.unshift(item)
        else
            panel.items.push(item)
    })
}

export const changeItem = (
    initialDragGrid : DragGridDTO,
    item : DragItemDTO) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = indexOfItemAndPanel(dragGrid, item.id)

        dragGrid.panels[panelIndex].items[itemIndex] = item
    })
}

export const changeDragDrop = (
    initialDragGrid : DragGridDTO, {
        dragItemId, dropIndex, dropPanelId, dragPanelId,
    } : DragDropState,
    onChange : (value : DragGridDTO) => void) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const debugInfo = `dragItemId:${dragItemId}, dropIndex:${dropIndex}, dropPanelId:${dropPanelId}, dragPanelId:${dragPanelId}`

        if (wasPanelDropped(dragPanelId, dragItemId, dropPanelId, dropIndex)) {

            // appease typescript
            if(dragPanelId !== null && dropIndex !== null) {
                return onChange(panelDropped(dragGrid, dragPanelId, dropIndex))
            } else {
                throw Error(`Unable to drop panel ${debugInfo}`)
            }
        }

        // more appeaseing typescript
        if (dropIndex === null || dragItemId  === null || dragPanelId === null) {
            throw Error(`Unable to drag and drop. ${debugInfo}`)
        }

        const { itemCopy, dropPanelIndex }
        = getDragDropItems(dragGrid, dragItemId, dragPanelId, dropPanelId)

        // If dragging between panels, then add a new panel with the item
        // as the initial seed element
        if (wasDroppedBetweenPanels(dropPanelId))
            return onChange(dropItemBetweenPanels(dragGrid, dropIndex, itemCopy))

        if (wasDroppedOntoSamePanel(dragGrid, dragPanelId, dropPanelId))
            return onChange(dropOntoSamePanel(dragGrid, dragItemId, dropIndex))

        if (wasDroppedOntoDifferentPanel(dragPanelId, dropPanelId))
            return onChange(dropOntoDifferentPanel(dragGrid, dropPanelIndex, dragItemId, dropIndex, itemCopy))

        throw Error('Unable to figure out wtf happened dropping the item')
    })
}

const copyItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const itemInfo = indexOfItemAndPanel(dragGrid, itemId)

        if (!itemInfo) {
            console.log(`Could not find item ${itemId}`)
            throw Error('Unable to find item  ${itemId}')
        }

        const { panelIndex, itemIndex } = itemInfo

        console.log('TODO: copy item')

        debugger

        return dragGrid
    })

}

const getPanelById = (dragGrid : DragGridDTO, panelId : string) : DragPanelDTO => {

    const panelIndex = getPanelIndexById(dragGrid, panelId)

    if (panelIndex === -1)
        throw Error(`Could not find panel with id ${panelId}`)

    return getPanelByIndex(dragGrid, panelIndex)
}

const indexOfItem = (dragGrid : DragGridDTO, panelIndex : number, itemId : string) : number =>
    dragGrid.panels[panelIndex].items.findIndex(dragItem => dragItem.id === itemId)

const indexOfItemAndPanel = (dragGrid : DragGridDTO, itemId : string) : { panelIndex : number; itemIndex : number; } => {

    const notFound = {
        panelIndex : -1,
        itemIndex  : -1,
    }

    if (!itemId)
        return notFound

    for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {

        const itemIndex = indexOfItem(dragGrid, panelIndex, itemId)

        if (itemIndex !== -1) {
            return {
                panelIndex,
                itemIndex
            }
        }
    }

    return notFound
}

const getPanelIndexById = (dragGrid : DragGridDTO, panelId : string | null) : number =>
    dragGrid.panels.findIndex(dragPanel => dragPanel.id === panelId)

const getPanelByIndex = (dragGrid : DragGridDTO, panelIndex : number) : DragPanelDTO =>
    dragGrid.panels[panelIndex]


const panelDropped = (dragGrid : DragGridDTO, dragPanelId : string, dropIndex : number) : DragGridDTO => {

    const panelCopy = copyObject(
        getPanelById(dragGrid, dragPanelId)
    ) as DragPanelDTO

    // const dragItemIndex = getPanelIndexById(dragGrid, dragPanelId)

    removePanel(dragGrid, dragPanelId)

    // if (dragItemIndex > dropIndex)
    dragGrid.panels.splice(dropIndex, 0, panelCopy)
    // else
    //     dragGrid.panels.splice(dropIndex - 1, 0, panelCopy);

    return dragGrid
}

const dropItemBetweenPanels = (dragGrid : DragGridDTO, dropIndex : number, dragItem : DragItemDTO) : DragGridDTO => {

    // insert the item copy of the item being dragged
    // into a new panel and insert the panel into the grid
    // where it was dropped
    dragGrid.panels.splice(dropIndex, 0, {
        id    : nanoid(),
        items : [],
    })

    // pluck it from the old panel, this is a new panel
    removeItem(dragGrid, dragItem.id)

    dragGrid.panels[dropIndex].items.push(dragItem)

    removeEmptyPanels(dragGrid)

    return dragGrid
}

const dropOntoSamePanel = (dragGrid : DragGridDTO, dragItemId : string, dropItemIndex : number) => {

    const {
        itemIndex : _dragItemIndex,
        panelIndex,
    } = indexOfItemAndPanel(dragGrid, dragItemId)

    const itemCopy = removeItem(dragGrid, dragItemId)

    // if (dragItemIndex > dropItemIndex)
    dragGrid.panels[panelIndex].items.splice(dropItemIndex, 0, itemCopy)
    // else
    //     dragGrid.panels[panelIndex].items.splice(dropItemIndex - 1, 0, itemCopy);

    return dragGrid
}

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
    } = indexOfItemAndPanel(dragGrid, dragItemId)

    dragGrid.panels[dragPanelIndex].items.splice(dragItemIndex, 1)
    dragGrid.panels[dropPanelIndex].items.splice(dropIndex, 0, itemCopy)

    removeEmptyPanels(dragGrid)

    return dragGrid
}

const getDragDropItems = (dragGrid : DragGridDTO, dragItemId : string, dragPanelId : string, dropPanelId : string | null) => {

    // Copy the original item from the tree
    const itemCopy = copyItem(dragGrid, dragItemId)

    const dragPanelIndex = getPanelIndexById(dragGrid, dragPanelId)
    const dropPanelIndex = getPanelIndexById(dragGrid, dropPanelId)

    return {
        itemCopy,
        dragPanelIndex,
        dropPanelIndex,
    }
}

const wasDroppedOntoSamePanel = (dragGrid : DragGridDTO, dragPanelId : string, dropPanelId : string | null) : boolean => {

    // panel is null when dragging an item between two other panels
    if (dropPanelId === null)
        return false

    const dragPanelIndex = getPanelIndexById(dragGrid, dragPanelId)
    const dropPanelIndex = getPanelIndexById(dragGrid, dropPanelId)

    return dragPanelIndex === dropPanelIndex
}

const wasDroppedOntoDifferentPanel = (dragPanelId : string, dropPanelId : string | null) : boolean =>
    dropPanelId === null || dragPanelId !== dropPanelId

const wasDroppedBetweenPanels = (dropPanelId : string | null) : boolean =>
    dropPanelId === null

const wasPanelDropped = (
    dragPanelId : string | null,
    dragItemId  : string | null,
    dropPanelId : string | null,
    dropIndex   : number | null
) : boolean =>
    dragPanelId    !== null
    && dragItemId  === null
    && dropPanelId === null
    && dropIndex   !== null

const Logic = {
    toggleItem,
    duplicateItem,
    duplicatePanel,
    removeItem,
    removePanel,
    removeEmptyPanels,
    insertPanel,
    insertItem,
    changeItem,
    changeDragDrop,
}

export default Logic
