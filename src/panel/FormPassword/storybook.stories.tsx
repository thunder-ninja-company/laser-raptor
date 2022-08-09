import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ProfileSummary from '.';

export default {
    title: 'Shared/panel/ProfileSummary',
    component: ProfileSummary,
    parameters: {

        layout: 'fullscreen'
    }
} as ComponentMeta<typeof ProfileSummary>;

const Template: ComponentStory<typeof ProfileSummary> = (args) => <ProfileSummary {...args} />;

export const TemplateProfileSummary = Template.bind({});
