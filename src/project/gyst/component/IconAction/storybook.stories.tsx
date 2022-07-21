import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DragGridItem from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/DragGridItem",
    component: DragGridItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof DragGridItem>;

const Template: ComponentStory<typeof DragGridItem> = (args) => (
    <DragGridItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
