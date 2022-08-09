import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LandingZone from '.'
import { COMPONENT_NAME } from './constant'

export default {
    title      : 'Gyst/LandingZone',
    component  : LandingZone,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof LandingZone>

const Template : ComponentStory<typeof LandingZone> = args => (
    <LandingZone {...args} />
)

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
    panelId : `component-${COMPONENT_NAME}`,
    index   : 0,
    type    : 'grid',
}
