import type {
    ComponentMeta, ComponentStory,
} from '@storybook/react';
import {
    MainLinks, UserLinks,
} from 'project/constant';

import Header from '.';

export default {
    title: 'Dyson/component/Header',
    component: Header,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedOut = Template.bind({});

LoggedOut.args = {
    mainLinks : MainLinks,
    userLinks : UserLinks,
};
