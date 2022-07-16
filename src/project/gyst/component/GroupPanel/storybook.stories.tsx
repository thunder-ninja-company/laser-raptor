import type { ComponentMeta, ComponentStory } from "@storybook/react";

import GroupPanel from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/GroupPanel",
    component: GroupPanel,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof GroupPanel>;

const Template: ComponentStory<typeof GroupPanel> = (args) => (
    <GroupPanel {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
