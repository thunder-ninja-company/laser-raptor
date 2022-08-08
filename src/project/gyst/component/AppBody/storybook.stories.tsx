import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AppBody from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/AppBody',
    component  : AppBody,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof AppBody>;

const Template : ComponentStory<typeof AppBody> = args => (
    <AppBody {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
