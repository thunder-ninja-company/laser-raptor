import type { ComponentMeta, ComponentStory } from '@storybook/react'

import InputForm from '.'

export default {
    title      : 'shared/component/InputForm',
    component  : InputForm,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof InputForm>

const Template : ComponentStory<typeof InputForm> = args => (
    <InputForm {...args} />
)

export const InputFormBaseline = Template.bind({})

InputFormBaseline.args = {
    id : 'username-profile',
}
