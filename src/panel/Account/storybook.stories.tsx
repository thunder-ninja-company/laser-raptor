import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Account from ".";

export default {
    title: "Shared/panel/Account",
    component: Account,
    parameters: {

        layout: "fullscreen",
    },
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = (args) => (
    <Account {...args} />
);

export const TemplateAccount = Template.bind({});
