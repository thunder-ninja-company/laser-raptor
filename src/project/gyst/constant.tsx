import type { GroupGridDTO } from "project/gyst/type";

export const PROJECT_NAME = "gyst";

export const GroupGridData: GroupGridDTO = {
    id: "group-panel-1",
    groupPanels: [
        {
            id: "group-panel-1-1",
            groupPanelItems: [{
                id: "item 1 id",
                value: "item 1 value",
            },
            {
                id: "item 2 id",
                value: "item 2 value"
            }]
        },
        {
            id: "group-panel-1-2",
            groupPanelItems: [{
                id: "item 3 id",
                value: "item 3 value"
            },
            {
                id: "item 3 id",
                value: "item 4 value"
            }]
        },
    ],
};
