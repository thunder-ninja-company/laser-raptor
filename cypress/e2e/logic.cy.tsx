import Logic from 'gyst/component/DragGrid/logic'

describe('DESCRIBE #1 - When NOT in Firefox', { browser : '!firefox' }, () => {
    it('111 Shows warning', () => {
        console.log(Logic)

        expect('Bort').to.not.equal('Jane')

    })
})
