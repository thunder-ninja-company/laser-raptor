import type { DragDropState, DragGridDTO, DragItemInfo, DragPanelInfo } from './type'
import { initialDragItem, initialDragPanel } from './constant'
import type { DragPanelDTO } from './DragPanel/type'
import type { DragItemDTO } from './DragItem/type'
import type { ListPosition } from 'gyst/type'
import { copyObject } from 'gyst/shared'
import { nanoid } from 'nanoid'
import { produce } from 'immer'
import _ from 'lodash'

/**
 *
 * @param initialDragGrid
 * @param itemId
 * @returns
 */
export const toggleItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = getItemInfoById(dragGrid, itemId)

        const currentStatus = dragGrid.panels[panelIndex].items[itemIndex].status

        dragGrid.panels[panelIndex].items[itemIndex].status
            = currentStatus === 'checked'
                ? 'default'
                : 'checked'
    })
}


/**
 *
 * @param initialDragGrid
 * @param itemId
 * @param newItemId
 * @returns
 */
export const duplicateItem = (initialDragGrid : DragGridDTO, itemId : string, newItemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = getItemInfoById(dragGrid, itemId)

        dragGrid.panels[panelIndex].items.splice(itemIndex, 0, {
            ...dragGrid.panels[panelIndex].items[itemIndex],
            id : newItemId,
        })
    })
}


/**
 *
 * @param initialDragGrid
 * @param panelId
 * @param newPanelId
 * @returns
 */
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


/**
 *
 * @param initialDragGrid
 * @param itemId
 * @returns
 */
export const removeItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = getItemInfoById(dragGrid, itemId)

        dragGrid.panels[panelIndex].items.splice(itemIndex, 1)
    })
}


/**
 *
 * @param initialDragGrid
 * @param panelId
 * @returns
 */
export const removePanel = (initialDragGrid : DragGridDTO, panelId : string) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        _.remove(
            dragGrid.panels,
            panel => panel.id === panelId
        )
    })
}


/**
 *
 * @returns
 */
export const newDragPanelDTO = () : DragPanelDTO => ({
    ...initialDragPanel,
    id    : nanoid(),
    items : [{
        ...initialDragItem,
        id : nanoid(),
    }]
})

/**
 *
 * @param initialDragGrid
 * @param position
 * @param panel
 * @returns
 */
export const insertPanel = (initialDragGrid : DragGridDTO, position : ListPosition, panel : DragPanelDTO) : DragGridDTO =>
    produce(initialDragGrid, dragGrid => {

        if (position === 'head') {
            dragGrid.panels.splice(0, 0, panel)

        } else if (position === 'tail') {
            dragGrid.panels.splice(dragGrid.panels.length, 0, panel)
        }
    })

/**
 *
 * @param initialDragGrid
 * @param panelId
 * @param position
 * @param item
 * @returns
 */
export const insertItem = (initialDragGrid : DragGridDTO, panelId : string, position : ListPosition, item : DragItemDTO) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const panel = getPanelById(dragGrid, panelId)

        if (position === 'head')
            panel.items.unshift(item)
        else
            panel.items.push(item)
    })
}


/**
 *
 * @param initialDragGrid
 * @param item
 * @returns
 */
export const changeItem = (initialDragGrid : DragGridDTO, item : DragItemDTO) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { panelIndex, itemIndex } = getItemInfoById(dragGrid, item.id)

        dragGrid.panels[panelIndex].items[itemIndex] = item
    })
}


/**
 *
 * @param initialDragGrid
 * @param dragDropState
 * @returns
 */
export const changeDragDrop = (
    initialDragGrid : DragGridDTO,
    dragDropState   : DragDropState) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        const { dragItemId, dropIndex, dropPanelId, dragPanelId } = dragDropState

        const debugInfo = getDragDropDebugInfo(dragDropState)

        if (wasPanelDropped(dragPanelId, dragItemId, dropPanelId, dropIndex)) {

            if (dragPanelId === null || dropIndex === null)
                throw Error(`Unable to drop panel ${debugInfo}`)

            panelDropped(dragGrid, dragPanelId, dropIndex)
        }

        // more appeaseing typescript
        if (dropIndex === null || dragItemId  === null || dragPanelId === null)
            throw Error(`Unable to drag and drop. ${debugInfo}`)

        // If dragging between panels, then add a new panel with the item
        // as the initial seed element
        if (wasDroppedBetweenPanels(dropPanelId)) {
            dropItemBetweenPanels(dragGrid, dropIndex)

        } else if (wasDroppedOntoSamePanel(dragGrid, dragPanelId, dropPanelId)) {
            dropOntoSamePanel(dragGrid, dragItemId, dropIndex)

        } else if (wasDroppedOntoDifferentPanel(dragPanelId, dropPanelId)) {
            dropOntoDifferentPanel(dragGrid, dragDropState)
        }


        throw Error('Unable to figure out wtf happened dropping the item')
    })
}


/**
 *
 * @param param0
 * @returns
 */
const getDragDropDebugInfo = ({ dragItemId, dropIndex, dropPanelId,  dragPanelId} : DragDropState) =>
    `dragItemId:${dragItemId}, dropIndex:${dropIndex}, dropPanelId:${dropPanelId}, dragPanelId:${dragPanelId}`

/**
 *
 * @param initialDragGrid
 * @returns
 */
const removeEmptyPanels = (initialDragGrid : DragGridDTO) : DragGridDTO => {

    return produce(initialDragGrid, dragGrid => {

        for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {
            if (dragGrid.panels[panelIndex].items.length === 0) {
                dragGrid.panels.splice(panelIndex, 1)
                panelIndex--
            }
        }
    })
}


/**
 *
 * @param dragGrid
 * @param panelId
 * @returns
 */
const getPanelById = (dragGrid : DragGridDTO, panelId : string) : DragPanelDTO => {

    const panelIndex = getPanelIndexById(dragGrid, panelId)

    if (panelIndex === -1)
        throw Error(`Could not find panel with id ${panelId}`)

    return getPanelByIndex(dragGrid, panelIndex)
}


/**
 *
 * @param dragGrid
 * @param panelId
 * @returns
 */
const getPanelInfoById = (dragGrid : DragGridDTO, panelId : string) : DragPanelInfo => {

    for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {

        const panel = dragGrid.panels[panelIndex]

        if (panel.id !== panelId)
            continue

        return {
            panelIndex,
            panel,
        }
    }

    return {
        panelIndex : -1,
        panel      : null,
    }
}


/**
 *
 * @param dragGrid
 * @param itemId
 * @returns
 */
const getItemInfoById = (dragGrid : DragGridDTO, itemId : string) : DragItemInfo => {

    for (let panelIndex = 0; panelIndex < dragGrid.panels.length; panelIndex++) {

        const panel = dragGrid.panels[panelIndex]

        for (let itemIndex = 0; itemIndex < panel.items.length; itemIndex++) {

            const item = panel.items[itemIndex]

            if (item.id !== itemId)
                continue

            return {
                panelIndex,
                itemIndex,
                item,
            }
        }
    }

    return {
        panelIndex : -1,
        itemIndex  : -1,
        item       : null,
    }
}


/**
 *
 * @param dragGrid
 * @param panelId
 * @returns
 */
const getPanelIndexById = (dragGrid : DragGridDTO, panelId : string | null) : number =>
    dragGrid.panels.findIndex(dragPanel => dragPanel.id === panelId)

/**
 *
 * @param dragGrid
 * @param panelIndex
 * @returns
 */
const getPanelByIndex = (dragGrid : DragGridDTO, panelIndex : number) : DragPanelDTO =>
    dragGrid.panels[panelIndex]


/**
 *
 * @param dragGrid
 * @param dragPanelId
 * @param dropIndex
 * @returns
 */
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


/**
 *
 * @param dragGrid
 * @param dropIndex
 * @returns
 */
const dropItemBetweenPanels = (dragGrid : DragGridDTO, dropIndex : number) : DragGridDTO => {

    // insert the item copy of the item being dragged
    // into a new panel and insert the panel into the grid
    // where it was dropped
    dragGrid.panels.splice(dropIndex, 0, {
        id    : nanoid(),
        items : [],
    })

    // pluck it from the old panel, this is a new panel
    dragGrid = removeItem(dragGrid, dragItem.id)

    dragGrid.panels[dropIndex].items.push(dragItem)

    removeEmptyPanels(dragGrid)

    return dragGrid
}


/**
 *
 * @param dragGrid
 * @param dragItemId
 * @param dropItemIndex
 * @returns
 */
const dropOntoSamePanel = (dragGrid : DragGridDTO, dragItemId : string, dropItemIndex : number) : DragGridDTO => {

    const {
        item, panelIndex,
    } = getItemInfoById(dragGrid, dragItemId)

    if (!item)
        throw Error(`Could not find item ${dragItemId}`)

    dragGrid = removeItem(dragGrid, dragItemId)

    dragGrid.panels[panelIndex].items.splice(dropItemIndex, 0, item)

    return dragGrid
}


/**
 * Moves an item from one panel into another panel, removing the item from the old panel
 * and adding it to the new panel.
 * @param dragGrid The drag Grid DTO
 * @param dragDropState Final state after a drag and drop operation has completed in the UI
 * @returns The updated DragGrid state
 */
const dropOntoDifferentPanel = (dragGrid : DragGridDTO, dragDropState : DragDropState ) : DragGridDTO => {

    const {
        dragItemId, dropIndex, dragPanelId, dropPanelId,
    } = dragDropState

    if (dragPanelId === null || dragItemId === null || dropIndex === null || dropPanelId === null) {

        const debugInfo = getDragDropDebugInfo(dragDropState)

        throw Error(`Could not find panel with ${debugInfo}`)
    }

    const {
        panelIndex : dropPanelIndex,
    } = getPanelInfoById(dragGrid, dropPanelId)

    const {
        panelIndex : dragPanelIndex,
        itemIndex  : dragItemIndex,
        item,
    } = getItemInfoById(dragGrid, dragItemId)

    if (!item)
        throw Error(`Could not find item ${dragItemId}`)

    dragGrid.panels[dragPanelIndex].items.splice(dragItemIndex, 1)
    dragGrid.panels[dropPanelIndex].items.splice(dropIndex, 0, item)

    removeEmptyPanels(dragGrid)

    return dragGrid
}


/**
 * Removes an item from a panel
 * @param dragGrid The drag grid DTO
 * @param itemId The id of the item to remove
 * @returns The updated drag grid DTO
 */
const wasDroppedOntoSamePanel = (dragGrid : DragGridDTO, dragPanelId : string, dropPanelId : string | null) : boolean => {

    // panel is null when dragging an item between two other panels
    if (dropPanelId === null)
        return false

    const dragPanelIndex = getPanelIndexById(dragGrid, dragPanelId)
    const dropPanelIndex = getPanelIndexById(dragGrid, dropPanelId)

    return dragPanelIndex === dropPanelIndex
}


/**
 *
 * @param dragPanelId
 * @param dropPanelId
 * @returns
 */
const wasDroppedOntoDifferentPanel = (dragPanelId : string, dropPanelId : string | null) : boolean =>
    dropPanelId === null || dragPanelId !== dropPanelId

/**
 *
 * @param dropPanelId
 * @returns
 */
const wasDroppedBetweenPanels = (dropPanelId : string | null) : boolean =>
    dropPanelId === null

/**
 *
 * @param dragPanelId
 * @param dragItemId
 * @param dropPanelId
 * @param dropIndex
 * @returns
 */
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
    removeEmptyPanels,
    newDragPanelDTO,
    duplicatePanel,
    changeDragDrop,
    duplicateItem,
    removePanel,
    insertPanel,
    toggleItem,
    removeItem,
    insertItem,
    changeItem,
}

export default Logic
