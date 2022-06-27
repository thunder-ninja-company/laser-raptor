import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfileSummary from '.';

export default {
    title: 'Dyson/panel/ProfileSummary',
    component: ProfileSummary,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'fullscreen'
    }
} as ComponentMeta<typeof ProfileSummary>;

const Template: ComponentStory<typeof ProfileSummary> = (args) => <ProfileSummary {...args} />;

export const TemplateProfileSummary = Template.bind({});
