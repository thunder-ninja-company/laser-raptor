import type { ComponentMeta, ComponentStory } from "@storybook/react";

import IconRemovePanel from ".";
import { COMPONENT_NAME } from "./constant";

export default {
    title: "Gyst/IconRemovePanel",
    component: IconRemovePanel,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof IconRemovePanel>;

const Template: ComponentStory<typeof IconRemovePanel> = (args) => (
    <IconRemovePanel {...args} />
);

export const ComponentParameters = Template.bind({});

ComponentParameters.args = {
    id: `component-${COMPONENT_NAME}`,
};