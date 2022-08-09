import type { ComponentMeta, ComponentStory } from "@storybook/react";

import AppLayout from ".";

export default {
    title: "Shared/panel/AppLayout",
    component: AppLayout,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (args) => (
    <AppLayout {...args} />
);

export const BasicAppLayout = Template.bind({});
