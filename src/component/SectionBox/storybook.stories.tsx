import type { ComponentMeta, ComponentStory } from '@storybook/react';

import SectionBox from '.';

export default {
    title      : 'shared/component/SectionBox',
    component  : SectionBox,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof SectionBox>;

const Template : ComponentStory<typeof SectionBox> = args => (
    <SectionBox {...args} />
);

export const SectionBoxBaseline = Template.bind({});

SectionBoxBaseline.args = {
    children : 'Component Args',
};
