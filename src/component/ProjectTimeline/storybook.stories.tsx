import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainLinks } from "project/constant";

import ProjectTimeline from ".";

export default {
    title: "Dyson/component/ProjectTimeline",
    component: ProjectTimeline,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: "fullscreen",
    },
} as ComponentMeta<typeof ProjectTimeline>;

const Template: ComponentStory<typeof ProjectTimeline> = (args) => <ProjectTimeline {...args} />;

export const ProjectTimelineLoggedOut = Template.bind({});

ProjectTimelineLoggedOut.args = {
    links: MainLinks,
};
