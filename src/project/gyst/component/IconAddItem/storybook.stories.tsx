import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconAddItem from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconAddItem',
    component  : IconAddItem,
    parameters : {

        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconAddItem>;

const Template : ComponentStory<typeof IconAddItem> = args => (
    <IconAddItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
