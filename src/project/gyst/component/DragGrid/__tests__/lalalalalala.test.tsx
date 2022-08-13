import type { DragItemDTO } from 'gyst/component/DragGrid/DragItem/type'
import { DragGridInitialState } from 'gyst/component/DragGrid/constant'
import { DragPanelDTO } from 'gyst/component/DragGrid/DragPanel/type'
import { DragDropState } from 'gyst/component/DragGrid/type'
import Logic from 'gyst/component/DragGrid/logic'
import { expect } from '@jest/globals'
import { produce } from 'immer'

describe('DragGrid Logic', () => {

    describe('Exported Functions', () => {

        it('toggleItem', () => {

            const newDragGrid = Logic.toggleItem(DragGridInitialState, 'item-alpha')

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                dragGrid.panels[0].items[0].status = 'checked'
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('duplicateItem', () => {

            const newDragGrid = Logic.duplicateItem(DragGridInitialState, 'item-alpha', 'new-item-id')

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                dragGrid.panels[0].items.unshift({
                    ...dragGrid.panels[0].items[0],
                    id : 'new-item-id',
                })
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('duplicatePanel', () => {

            const newDragGrid = Logic.duplicatePanel(DragGridInitialState, 'panel-0', 'new-panel-id')

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                dragGrid.panels.splice(0, 0, {
                    ...DragGridInitialState.panels[0],
                    id : 'new-panel-id',
                })
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('removeItem', () => {

            const newDragGrid = Logic.removeItem(DragGridInitialState, 'item-alpha')

            console.log(newDragGrid)

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                dragGrid.panels[0].items.splice(0, 1)
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('removePanel', () => {

            const newDragGrid = Logic.removePanel(DragGridInitialState, 'panel-0')

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                const index = dragGrid.panels.findIndex(panel => panel.id === 'panel-0')

                dragGrid.panels.splice(index, 1)
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('insertPanel', () => {

            const newDragPanel : DragPanelDTO = {
                id    : 'foo',
                items : [],
            }

            // todo: convert this to use ids rather than index (all external functions)
            const newDragGrid = Logic.insertPanel(DragGridInitialState, 0, newDragPanel)

            const expectedResult = produce(DragGridInitialState, dragGrid => {
                dragGrid.panels.unshift(newDragPanel)
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('changeItem', () => {

            const newItemValue : DragItemDTO= {
                id     : 'item-alpha',
                value  : 'UPDATED VALUE',
                status : 'default',
            }

            const newDragGrid = Logic.changeItem(DragGridInitialState, newItemValue)

            const expectedResult = produce(DragGridInitialState, dragGrid => {
                dragGrid.panels[0].items[0] = newItemValue
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('changeDragDrop', () => {

            const dragDropState : DragDropState = {

                // drag
                dragItemId  : 'item-alpha',
                dragPanelId : 'panel-0', // (why is this needed?)

                // drop
                dropPanelId : 'panel-0',
                dropIndex   : 0,
            }

            const newDragGrid = Logic.changeDragDrop(DragGridInitialState, dragDropState)

            const expectedResult = produce(DragGridInitialState, dragGrid => {
                dragGrid.panels[0].items[0] = newItemValue
            })

            expect(newDragGrid).toEqual(expectedResult)
        })


        it('Insert Operations', () => {

            const newItem : DragItemDTO = {
                id     : 'item-new',
                value  : 'new',
                status : 'default',
            }

            const newDragGrid = Logic.insertItem(DragGridInitialState, 'panel-0', 'head', newItem)

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                dragGrid.panels[0].items.unshift(newItem)
            })

            expect(newDragGrid).toEqual(expectedResult)
        })
    })
})
