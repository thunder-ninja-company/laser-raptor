import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DragItemItem from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/DragItemItem",
    component: DragItemItem,
 parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof DragItemItem>;

const Template: ComponentStory<typeof DragItemItem> = (args) => (
    <DragItemItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    dragPanelIndex : 0,
    dragItemIndex  : 0,
    position       : 'head',
    panelId        : `panelId-${COMPONENT_NAME}`,
};
