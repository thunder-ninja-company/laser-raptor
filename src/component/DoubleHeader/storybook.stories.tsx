import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainLinks, UserLinks } from "project/constant";

import DoubleHeader from ".";

export default {
    title: "shared/component/DoubleHeader",
    component: DoubleHeader,
    parameters: {

        layout: "fullscreen",
    },
} as ComponentMeta<typeof DoubleHeader>;

const Template: ComponentStory<typeof DoubleHeader> = (args) => (
    <DoubleHeader {...args} />
);

export const LoggedOut = Template.bind({});

LoggedOut.args = {
    mainLinks: MainLinks,
    userLinks: UserLinks,
};
