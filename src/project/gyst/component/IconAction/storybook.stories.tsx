import type { ComponentMeta, ComponentStory } from "@storybook/react";

import GroupPanelItem from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/GroupPanelItem",
    component: GroupPanelItem,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof GroupPanelItem>;

const Template: ComponentStory<typeof GroupPanelItem> = (args) => (
    <GroupPanelItem {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
