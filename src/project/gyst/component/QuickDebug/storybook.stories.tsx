import type { ComponentMeta, ComponentStory } from "@storybook/react";

import QuickDebug from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/QuickDebug",
    component: QuickDebug,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof QuickDebug>;

const Template: ComponentStory<typeof QuickDebug> = (args) => (
    <QuickDebug {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
