import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconToggleItem from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconToggleItem',
    component  : IconToggleItem,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconToggleItem>;

const Template : ComponentStory<typeof IconToggleItem> = args => (
    <IconToggleItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
