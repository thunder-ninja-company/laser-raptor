import type { ComponentMeta, ComponentStory } from '@storybook/react';

import KeyValueList from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/KeyValueList',
    component  : KeyValueList,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof KeyValueList>;

const Template : ComponentStory<typeof KeyValueList> = args => (
    <KeyValueList {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
