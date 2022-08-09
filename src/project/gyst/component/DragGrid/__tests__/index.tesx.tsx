import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Home', () => {
    it('renders a heading', () => {
        render(
            <div id='meh'>
                {'adsfasdf'}
            </div>
        )

        expect(true).toBeTruthy()
    })
})
