import type { ComponentMeta, ComponentStory } from '@storybook/react';

import DragGrid from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/DragGrid',
    component  : DragGrid,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof DragGrid>;

const Template : ComponentStory<typeof DragGrid> = args => (
    <DragGrid {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
