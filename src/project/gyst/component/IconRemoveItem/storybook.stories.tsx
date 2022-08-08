import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconRemoveItem from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconRemoveItem',
    component  : IconRemoveItem,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconRemoveItem>;

const Template : ComponentStory<typeof IconRemoveItem> = args => (
    <IconRemoveItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
