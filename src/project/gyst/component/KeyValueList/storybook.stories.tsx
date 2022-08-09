import type { ComponentMeta, ComponentStory } from '@storybook/react'

import KeyValueList from '.'
import { COMPONENT_NAME } from './constant'

export default {
    title      : 'Gyst/KeyValueList',
    component  : KeyValueList,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof KeyValueList>

const Template : ComponentStory<typeof KeyValueList> = args => (
    <KeyValueList {...args} />
)

export const ComponentParameters = Template.bind({})

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
}
