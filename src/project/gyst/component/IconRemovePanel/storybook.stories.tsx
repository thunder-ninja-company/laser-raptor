import type { ComponentMeta, ComponentStory } from '@storybook/react'
import IconRemovePanel from '.'

export default {
    title      : 'Gyst/IconRemovePanel',
    component  : IconRemovePanel,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconRemovePanel>

const Template : ComponentStory<typeof IconRemovePanel> = args => (
    <IconRemovePanel {...args} />
)

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
}
