import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { COMPONENT_NAME } from './constant';
import AppRoot from '.';

export default {
    title      : 'Gyst/AppRoot',
    component  : AppRoot,
    parameters : {

        layout : 'fullscreen',
    },
} as ComponentMeta<typeof AppRoot>;

const Template : ComponentStory<typeof AppRoot> = args => (
    <AppRoot {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
