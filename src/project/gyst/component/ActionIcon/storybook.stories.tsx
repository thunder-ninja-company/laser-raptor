import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ActionIcon from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/ActionIcon",
    component: ActionIcon,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof ActionIcon>;

const Template: ComponentStory<typeof ActionIcon> = (args) => (
    <ActionIcon {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
