import type { ComponentMeta, ComponentStory } from "@storybook/react";

import InputText from ".";

export default {
    title: "Dyson/component/InputText",
    component: InputText,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => (
    <InputText {...args} />
);

export const InputTextBaseline = Template.bind({});

InputTextBaseline.args = {
    title: "My Fun Title",
    placeholderMessage: "Placeholder Deluxe",
    isRequired: true,
    errorMessage: "YOU MUST CONSTRUCT ADDITIONAL PYLONS",
    description: "Important field of info",
    id: "username-profile",
};
