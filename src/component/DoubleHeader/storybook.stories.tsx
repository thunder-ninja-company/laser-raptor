import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { MainLinks, UserLinks } from 'project/constant';

import DoubleHeader from '.';

export default {
    title      : 'shared/component/DoubleHeader',
    component  : DoubleHeader,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof DoubleHeader>;

const Template : ComponentStory<typeof DoubleHeader> = args => (
    <DoubleHeader {...args} />
);

export const LoggedOut = Template.bind({});

LoggedOut.args = {
    mainLinks : MainLinks,
    userLinks : UserLinks,
};
