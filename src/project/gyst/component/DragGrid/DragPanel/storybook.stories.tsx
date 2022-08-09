import type { ComponentMeta, ComponentStory } from '@storybook/react';

import DragGrid from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/DragGrid',
    component  : DragGrid,
    parameters : {

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
