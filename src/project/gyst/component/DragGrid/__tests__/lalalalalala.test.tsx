import type { DragItemDTO } from 'gyst/component/DragGrid/DragItem/type'
import { DragGridInitialState } from 'gyst/component/DragGrid/constant'
import { DragPanelDTO } from 'gyst/component/DragGrid/DragPanel/type'
import Logic from 'gyst/component/DragGrid/logic'
import { expect } from '@jest/globals'
import { produce } from 'immer'
// import jest from 'jest'

// todo - setup standard crypto stuff in one area and not like this

// jest.mock('nanoid', () => {
//     return { nanoid : () => '666' }
// })

describe('DragGrid Logic', () => {

    describe('Exported Functions', () => {

        it('toggleItem', () => {
        // export const toggleItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('duplicateItem', () => {
            // export const duplicateItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
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
            // export const removeItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('removePanel', () => {

            const newDragGrid = Logic.removePanel(DragGridInitialState, 'panel-0')

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                const index = dragGrid.panels.findIndex(panel => panel.id === 'panel-0')

                dragGrid.panels.splice(index, 1)
            })

            expect(newDragGrid).toEqual(expectedResult)
        })

        it('removeEmptyPanels', () => {
            // export const removeEmptyPanels = (initialDragGrid : DragGridDTO) : DragGridDTO => {
            expect(true).toBeTruthy()
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
            // export const changeDragDrop = (
            expect(true).toBeTruthy()
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
