import { DragGridInitialState } from 'gyst/component/DragGrid/constant'
import Logic from 'gyst/component/DragGrid/logic'
import { expect } from '@jest/globals'
import { produce } from 'immer'

describe('DragGrid Logic', () => {

    describe('Exported Functions', () => {

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
