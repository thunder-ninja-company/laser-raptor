import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconRemovePanel from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconRemovePanel',
    component  : IconRemovePanel,
    parameters : {

        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconRemovePanel>;

const Template : ComponentStory<typeof IconRemovePanel> = args => (
    <IconRemovePanel {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
