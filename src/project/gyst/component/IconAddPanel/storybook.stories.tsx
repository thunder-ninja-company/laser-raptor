import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { COMPONENT_NAME } from './constant';
import IconAddPanel from '.';

export default {
    title      : 'Gyst/IconAddPanel',
    component  : IconAddPanel,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof IconAddPanel>;

const Template : ComponentStory<typeof IconAddPanel> = args => (
    <IconAddPanel {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
