import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DraggableContent from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/DraggableContent",
    component: DraggableContent,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof DraggableContent>;

const Template: ComponentStory<typeof DraggableContent> = (args) => (
    <DraggableContent {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
