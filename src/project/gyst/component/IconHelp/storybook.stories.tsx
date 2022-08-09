import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconHelp from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconHelp',
    component  : IconHelp,
    parameters : {

        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconHelp>;

const Template : ComponentStory<typeof IconHelp> = args => (
    <IconHelp {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
