import type { ComponentMeta, ComponentStory } from '@storybook/react'

import MainApp from '.'

export default {
    title      : 'shared/component/MainApp',
    component  : MainApp,
    parameters : {

        layout : 'fullscreen',
    },
} as ComponentMeta<typeof MainApp>

const Template : ComponentStory<typeof MainApp> = args => (
    <MainApp {...args} />
)

export const MainAppBaseline = Template.bind({})

MainAppBaseline.args = {
}
