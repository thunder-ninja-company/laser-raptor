import { DragGridInitialState } from 'gyst/component/DragGrid/constant'
import Logic from 'gyst/component/DragGrid/logic'
import { expect } from '@jest/globals'
import { produce } from 'immer'

describe('DragGrid Logic', () => {

    describe('Exported Functions', () => {

        // eslint-disable-next-line max-len

        it('toggleItem', () => {
        // export const toggleItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {
            expect(false).toBeTruthy()
        })

        it('duplicateItem', () => {
            // export const duplicateItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('duplicatePanel', () => {
            // export const duplicatePanel = (initialDragGrid : DragGridDTO, panelId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('removeItem', () => {
            // export const removeItem = (initialDragGrid : DragGridDTO, itemId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('removePanel', () => {
            // export const removePanel = (initialDragGrid : DragGridDTO, panelId : string) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('removeEmptyPanels', () => {
            // export const removeEmptyPanels = (initialDragGrid : DragGridDTO) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('insertPanel', () => {
            // export const insertPanel = (initialDragGrid : DragGridDTO, index : number, panel : DragPanelDTO) : DragGridDTO => {
            expect(true).toBeTruthy()
        })

        it('changeItem', () => {
            // export const changeItem = (
            expect(true).toBeTruthy()
        })

        it('changeDragDrop', () => {
            // export const changeDragDrop = (
            expect(true).toBeTruthy()
        })


        it('Insert Operations', () => {

            const newDragGrid = Logic.insertItem(DragGridInitialState, 'panel-0', 'head', {
                id     : 'item-new',
                value  : 'new',
                status : 'default',
            })

            const expectedResult = produce(DragGridInitialState, dragGrid => {

                dragGrid.panels[0].items.unshift({
                    id     : 'item-new',
                    value  : 'new',
                    status : 'default',
                })
            })

            expect(newDragGrid).toEqual(expectedResult)
        })
    })
})
