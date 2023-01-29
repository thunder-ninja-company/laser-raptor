import type { ComponentMeta, ComponentStory } from '@storybook/react';

import LandingZone from '.';
import { COMPONENT_NAME } from './constant';

export default {
    title      : 'Gyst/LandingZone',
    component  : LandingZone,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof LandingZone>;

const Template : ComponentStory<typeof LandingZone> = args => (
    <LandingZone {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id : `component-${COMPONENT_NAME}`,
};
