import type { ComponentMeta, ComponentStory } from "@storybook/react";

import GroupGrid from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/GroupGrid",
    component: GroupGrid,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof GroupGrid>;

const Template: ComponentStory<typeof GroupGrid> = (args) => (
    <GroupGrid {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};
