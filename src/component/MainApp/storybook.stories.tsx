import type { ComponentMeta, ComponentStory } from '@storybook/react';

import MainApp from '.';

export default {
    title      : 'shared/component/MainApp',
    component  : MainApp,
    parameters : {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof MainApp>;

const Template : ComponentStory<typeof MainApp> = args => (
    <MainApp {...args} />
);

export const MainAppBaseline = Template.bind({});

MainAppBaseline.args = {
};
