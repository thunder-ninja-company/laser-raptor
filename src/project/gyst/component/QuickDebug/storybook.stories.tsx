import type { ComponentMeta, ComponentStory } from '@storybook/react'

import QuickDebug from '.'

export default {
    title      : 'Gyst/QuickDebug',
    component  : QuickDebug,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof QuickDebug>

const Template : ComponentStory<typeof QuickDebug> = args =>
    <QuickDebug {...args} />

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
}
