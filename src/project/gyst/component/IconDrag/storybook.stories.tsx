import type { ComponentMeta, ComponentStory } from "@storybook/react";

import IconDrag from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/IconDrag",
    component: IconDrag,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof IconDrag>;

const Template: ComponentStory<typeof IconDrag> = (args) => (
    <IconDrag {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    panelId: `component-${COMPONENT_NAME}`,
};
