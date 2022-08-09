import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { MainLinks } from "project/constant";

import ProjectTimeline from ".";

export default {
    title: "shared/component/ProjectTimeline",
    component: ProjectTimeline,
    parameters: {

        layout: "fullscreen",
    },
} as ComponentMeta<typeof ProjectTimeline>;

const Template: ComponentStory<typeof ProjectTimeline> = (args) => <ProjectTimeline {...args} />;

export const ProjectTimelineLoggedOut = Template.bind({});

ProjectTimelineLoggedOut.args = {
    links: MainLinks,
};
