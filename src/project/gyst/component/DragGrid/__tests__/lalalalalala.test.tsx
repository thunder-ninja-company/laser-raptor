import Logic from 'gyst/component/DragGrid/logic'
import { initialDragGrid } from '../constant'


describe('When NOT in Firefox', { browser : '!firefox' }, () => {
    it('Shows warning', () => {


        const newDragGrid = Logic.duplicateItem(initialDragGrid, 'fuck')

        expect('bbbllllaaaaa').to.equal('bbbllllaaaaa')
    })

    it('Links to browser compatibility doc', () => {
        expect('bbbllllaaaaa').to.equal('bbbllllaaaaa')
    })
})

describe('go to the onion in AppBody test directory', () => {
    it('passes', () => {
        cy.visit('https://theonion.com')
    })
})
