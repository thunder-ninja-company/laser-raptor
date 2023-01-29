import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Timecard from '.';

export default {
    title      : 'shared/component/Timecard',
    component  : Timecard,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof Timecard>;

const Template : ComponentStory<typeof Timecard> = args => (
    <Timecard {...args} />
);

export const TimecardBaseline = Template.bind({});

TimecardBaseline.args = {
};
