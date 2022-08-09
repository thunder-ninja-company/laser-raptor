import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconRemoveItem from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconRemoveItem',
    component  : IconRemoveItem,
    parameters : {
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
