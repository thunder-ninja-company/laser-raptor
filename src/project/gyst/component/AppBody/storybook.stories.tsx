import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AppBody from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/AppBody',
    component  : AppBody,
    parameters : {

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
