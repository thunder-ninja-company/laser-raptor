import type { GroupGridDTO, GystAppRoot } from "gyst/type";

export const ProjectName = "gyst";

export const GroupGridDefaultData: GroupGridDTO = {
    id: "group-panel-1",
    groupPanels: [
        {
            id: "group-panel-1-1",
            groupPanelItems: [
                {
                    id: "item 1 id",
                    value: "item 1 value",
                },
                {
                    id: "item 2 id",
                    value: "item 2 value",
                },
            ],
        },
        {
            id: "group-panel-1-2",
            groupPanelItems: [
                {
                    id: "item 3 id",
                    value: "item 3 value",
                },
                {
                    id: "item 3 id",
                    value: "item 4 value",
                },
            ],
        },
    ],
};

// Define the initial state using that type
export const initialState: GystAppRoot = {
    groupGrid: GroupGridDefaultData,
    hello: 123,
};
