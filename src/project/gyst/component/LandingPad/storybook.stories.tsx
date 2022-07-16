import type { ComponentMeta, ComponentStory } from "@storybook/react";

import LandingPad from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/LandingPad",
    component: LandingPad,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof LandingPad>;

const Template: ComponentStory<typeof LandingPad> = (args) => (
    <LandingPad {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
