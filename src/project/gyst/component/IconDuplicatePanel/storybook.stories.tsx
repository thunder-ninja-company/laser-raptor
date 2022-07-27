import type { ComponentMeta, ComponentStory } from "@storybook/react";

import IconDuplicatePanel from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/IconDuplicatePanel",
    component: IconDuplicatePanel,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof IconDuplicatePanel>;

const Template: ComponentStory<typeof IconDuplicatePanel> = (args) => (
    <IconDuplicatePanel {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    panelId: `component-${COMPONENT_NAME}`,
};
