import type { ComponentMeta, ComponentStory } from '@storybook/react'

import DragSource from '.'
import { COMPONENT_NAME } from './constant'

export default {
    title      : 'Gyst/DragSource',
    component  : DragSource,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof DragSource>

const Template : ComponentStory<typeof DragSource> = args => (
    <DragSource {...args} />
)

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
    panelId : `component-${COMPONENT_NAME}`,
}
