import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DragSource from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/DragSource",
    component: DragSource,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof DragSource>;

const Template: ComponentStory<typeof DragSource> = (args) => (
    <DragSource {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    panelId: `component-${COMPONENT_NAME}`,
};
