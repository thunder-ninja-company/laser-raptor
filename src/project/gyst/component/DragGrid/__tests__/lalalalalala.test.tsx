import Logic from 'gyst/component/DragGrid/logic'
import { DragGridInitialState } from '../constant'


describe('Please just make webpack cooperate', () => {
    it('Uhggggg', () => {

        console.log('Logic')
        console.log(Logic)
        console.log(DragGridInitialState);

        debugger;


        console.log('initialDragGrid', DragGridInitialState)

        const newDragGrid = Logic.removeItem(DragGridInitialState, 'item-alpha')

        expect('bbbllllaaaaa').toBe('bbbllllaaaaa')
    })

    // it('Links to browser compatibility doc', () => {
    //     expect('bbbllllaaaaa').to.equal('bbbllllaaaaa')
    // })
})
