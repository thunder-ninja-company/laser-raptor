import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Account from 'components/Account';
import React from 'react';

export default {
    title: 'Dyson/Account',
    component: Account,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Account>;

const Template: ComponentStory<typeof Account> = (args) => <Account {...args} />;

export const TemplateAccount = Template.bind({});
