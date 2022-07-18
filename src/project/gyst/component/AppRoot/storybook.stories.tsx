import type { ComponentMeta, ComponentStory } from "@storybook/react";

import AppRoot from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/AppRoot",
    component: AppRoot,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof AppRoot>;

const Template: ComponentStory<typeof AppRoot> = (args) => (
    <AppRoot {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
