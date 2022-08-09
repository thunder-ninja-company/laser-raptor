import { render } from '@testing-library/react'
import DragGrid from 'gyst/component/DragGrid'
import { initialDragGrid } from '../constant'
import type { DragGridDTO } from '../type'

it('renders homepage unchanged', () => {

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleChange = (_value : DragGridDTO) => {
    }

    const { container } = render(
        <DragGrid
            onChange={handleChange}
            dragGrid={initialDragGrid} />
    )

    expect(container).toMatchSnapshot()
})
