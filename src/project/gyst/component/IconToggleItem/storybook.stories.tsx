import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { COMPONENT_NAME } from './constant'
import IconToggleItem from '.'

export default {
    title      : 'Gyst/IconToggleItem',
    component  : IconToggleItem,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconToggleItem>

const Template : ComponentStory<typeof IconToggleItem> = args => (
    <IconToggleItem {...args} />
)

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
}
