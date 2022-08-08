import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconDuplicateItem from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconDuplicateItem',
    component  : IconDuplicateItem,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconDuplicateItem>;

const Template : ComponentStory<typeof IconDuplicateItem> = args => (
    <IconDuplicateItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    itemId : `component-${COMPONENT_NAME}`,
};
