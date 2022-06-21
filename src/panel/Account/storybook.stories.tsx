import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Account from '.';

export default {
    title: 'Dyson/panel/Account',
    component: Account,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const TemplateAccount = Template.bind({});
