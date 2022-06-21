import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

import Template from '.';

export default {
    title: 'Dyson/panel/Template',
    component: Template,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof Template>;

const ComponentTemplate: ComponentStory<typeof Template> = (args) => <Template {...args} />;

export const LoggedOut = ComponentTemplate.bind({});

export const LoggedIn = ComponentTemplate.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const loginButton = canvas.getByRole('button', { name: /Log in/i });

    userEvent.click(loginButton);
};
