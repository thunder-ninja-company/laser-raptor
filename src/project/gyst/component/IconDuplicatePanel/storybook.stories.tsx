import type { ComponentMeta, ComponentStory } from '@storybook/react'
import IconDuplicatePanel from '.'

export default {
    title      : 'Gyst/IconDuplicatePanel',
    component  : IconDuplicatePanel,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconDuplicatePanel>

const Template : ComponentStory<typeof IconDuplicatePanel> = args => (
    <IconDuplicatePanel {...args} />
)

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
}
