import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AppHeader from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/AppHeader',
    component  : AppHeader,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof AppHeader>;

const Template : ComponentStory<typeof AppHeader> = args => (
    <AppHeader {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
