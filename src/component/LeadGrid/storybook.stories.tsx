import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import LeadGrid from '.';

export default {
    title: 'shared/component/LeadGrid',
    component: LeadGrid,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof LeadGrid>;

const Template: ComponentStory<typeof LeadGrid> = (args) => <LeadGrid {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const loginButton = canvas.getByRole('button', { name: /Log in/i });

    userEvent.click(loginButton);
};
