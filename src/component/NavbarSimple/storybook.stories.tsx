import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import NavbarSimple from '.'

export default {
    title      : 'shared/component/NavbarSimple',
    component  : NavbarSimple,
    parameters : {
        layout : 'fullscreen'
    }
} as ComponentMeta<typeof NavbarSimple>

const Template : ComponentStory<typeof NavbarSimple> = args => <NavbarSimple {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const loginButton = canvas.getByRole('button', { name : /Log in/i })

    userEvent.click(loginButton)
}
