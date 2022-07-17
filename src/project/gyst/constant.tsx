import type { GroupGridDTO } from "project/gyst/type";

export const PROJECT_NAME = 'gyst';

export const SAMPLE_DATA_GROUP_GRID : GroupGridDTO = {
    id: "group-grid-1",
    items: [
        {
            id: "group-panel-1",
            items: [
                {
                    id: "group-panel-1-item-1",
                    content: "This is a Title",
                },
                {
                    id: "group-panel-1-item-2",
                    content: "Drag and drop these",
                },
                {
                    id: "group-panel-1-item-3",
                    content: "Add some more!",
                },
            ],
        },
        {
            id: "group-panel-2",
            items: [
                {
                    id: "group-panel-2-item-1",
                    content: "This is a Title",
                },
                {
                    id: "group-panel-2-item-2",
                    content: "Drag and drop these",
                },
                {
                    id: "group-panel-2-item-3",
                    content: "Add some more!",
                },
            ],
        },
    ],
};
