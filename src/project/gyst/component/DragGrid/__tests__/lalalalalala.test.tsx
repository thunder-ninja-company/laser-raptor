import { DragGridInitialState } from '../constant'
import { expect } from '@jest/globals'
import Logic from '../logic'


describe('Please just make webpack cooperate', () => {

    it('Uhggggg', () => {

        console.log('initialDragGrid', DragGridInitialState)

        const initialDragGridState = DragGridInitialState

        const newDragGrid = Logic.insertItem(initialDragGridState, 'panel-0', 'head', {
            id     : 'item-new',
            value  : 'new',
            status : 'default',
        })

        console.log('newDragGrid', newDragGrid)

        expect(newDragGrid).toEqual({
            id     : 'grid-0',
            panels : [
                {
                    id    : 'panel-0',
                    items : [
                        {
                            id     : 'item-new',
                            value  : 'new',
                            status : 'default',
                        },
                        {
                            status : 'default',
                            value  : 'alpha',
                            id     : 'item-alpha',
                        },
                        {
                            status : 'default',
                            value  : 'beta',
                            id     : 'item-beta',
                        },
                        {
                            status : 'default',
                            value  : 'charlie',
                            id     : 'item-charlie',
                        },
                        {
                            status : 'default',
                            value  : 'delta',
                            id     : 'item-delta',
                        },
                    ],
                },
                {
                    id    : 'panel-1',
                    items : [
                        {
                            status : 'default',
                            value  : 'echo',
                            id     : 'item-echo',
                        },
                        {
                            status : 'default',
                            value  : 'foxtrot',
                            id     : 'item-foxtrot',
                        },
                    ],
                },
            ],
        })
    })
})
