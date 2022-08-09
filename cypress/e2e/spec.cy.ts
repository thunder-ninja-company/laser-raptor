describe('DESCRIBE #1 - When NOT in Firefox', { browser : '!firefox' }, () => {
    it('111 Shows warning', () => {
        expect('Bort').to.not.equal('Jane')
    })

    it('222 Links to browser compatibility doc', () => {
        expect('bbbllllaaaaa').to.equal('bbbllllaaaaa')
    })
})

describe('DESCRIBE #2 - When NOT in Firefox', { browser : '!firefox' }, () => {
    it('333 Shows warning', () => {
        expect('Bort').to.not.equal('Jane')
    })

    it('444 Links to browser compatibility doc', () => {
        expect('bbbllllaaaaa').to.not.equal('bbbllllaaaaa')
    })
})

describe('DESCRIBE #3 - go to the onion in AppBody test directory', () => {
    it('555 passes', () => {
        expect('look at me!').to.equal('look at me!')
    })
})

describe('DESCRIBE #4 - ANOTHER in AppBody test directory', () => {
    it('666 passes', () => {
        expect('look at me!').to.equal('look at me!')
    })
})
