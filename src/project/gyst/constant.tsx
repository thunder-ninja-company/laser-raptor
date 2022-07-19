import type { GroupGridDTO, GystAppRoot } from "gyst/type";

export const ProjectName = "gyst";

export const GroupGridDefaultData: GroupGridDTO = {
    id: "gg-0",
    groupPanels: [
        {
            id: "gp-abc",
            groupPanelItems: [
                {
                    id: "gpi-abc-1",
                    value: "item abc-2",
                },
                {
                    id: "gpi-abc-2",
                    value: "item abc-2",
                },
            ],
        },
        {
            id: "gp-123",
            groupPanelItems: [
                {
                    id: "gpi-123-1",
                    value: "item 123-2",
                },
                {
                    id: "gpi-123-2",
                    value: "item 123-2",
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
