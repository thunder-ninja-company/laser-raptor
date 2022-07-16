import type { ComponentMeta, ComponentStory } from "@storybook/react";

import AppLayout from ".";

export default {
    title: "Shared/panel/AppLayout",
    component: AppLayout,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => (
    <AppLayout {...args} />
);

export const BasicAppLayout = Template.bind({});
