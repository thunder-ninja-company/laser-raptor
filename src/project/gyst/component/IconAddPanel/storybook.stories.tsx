import type { ComponentMeta, ComponentStory } from "@storybook/react";

import AddPanel from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/AddPanel",
    component: AddPanel,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof AddPanel>;

const Template: ComponentStory<typeof AddPanel> = (args) => (
    <AddPanel {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
