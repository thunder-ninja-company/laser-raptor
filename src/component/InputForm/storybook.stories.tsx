import type { ComponentMeta, ComponentStory } from "@storybook/react";

import InputForm from ".";

export default {
    title: "shared/component/InputForm",
    component: InputForm,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof InputForm>;

const Template: ComponentStory<typeof InputForm> = (args) => (
    <InputForm {...args} />
);

export const InputFormBaseline = Template.bind({});

InputFormBaseline.args = {
    title: "My Fun Title",
    placeholderMessage: "Placeholder Deluxe",
    isRequired: true,
    errorMessage: "YOU MUST CONSTRUCT ADDITIONAL PYLONS",
    description: "Important field of info",
    id: "username-profile",
};
