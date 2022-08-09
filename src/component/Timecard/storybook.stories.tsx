import type { ComponentMeta, ComponentStory } from '@storybook/react'

import Timecard from '.'

export default {
    title      : 'shared/component/Timecard',
    component  : Timecard,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof Timecard>

const Template : ComponentStory<typeof Timecard> = args => (
    <Timecard {...args} />
)

export const TimecardBaseline = Template.bind({})

TimecardBaseline.args = {
}
