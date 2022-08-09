import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { MainLinks } from 'project/constant'

import Footer from '.'

export default {
    title      : 'shared/component/Footer',
    component  : Footer,
    parameters : {
        layout : 'fullscreen',
    },
} as ComponentMeta<typeof Footer>

const Template : ComponentStory<typeof Footer> = args => <Footer {...args} />

export const FooterLoggedOut = Template.bind({})

FooterLoggedOut.args = {
    links : MainLinks,
}
