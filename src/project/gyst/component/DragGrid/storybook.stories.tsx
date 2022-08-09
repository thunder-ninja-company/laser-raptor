import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { initialDragGrid } from './constant'
import type { DragGridDTO } from './type'
import DragGrid from '.'

export default {
    title      : 'Gyst/DragGrid',
    component  : DragGrid,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof DragGrid>

const Template : ComponentStory<typeof DragGrid> = args =>
    <DragGrid {...args} />

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onChange : (_value : DragGridDTO) => {},
    dragGrid : initialDragGrid,
}
