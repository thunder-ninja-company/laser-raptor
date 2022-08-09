describe('When NOT in Chrome', { browser : '!chrome' }, () => {
    it('Shows warning', () => {
        expect('Bort').to.not.equal('Jane')
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
