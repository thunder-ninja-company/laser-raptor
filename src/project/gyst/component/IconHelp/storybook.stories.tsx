import type { ComponentMeta, ComponentStory } from "@storybook/react";

import IconHelp from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/IconHelp",
    component: IconHelp,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof IconHelp>;

const Template: ComponentStory<typeof IconHelp> = (args) => (
    <IconHelp {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
