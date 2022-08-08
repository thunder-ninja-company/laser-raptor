import type { ComponentMeta, ComponentStory } from '@storybook/react';

import IconAddPanel from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/IconAddPanel',
    component  : IconAddPanel,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
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
