import { localConstant } from "core/constants";
import type { GroupGridDTO } from "gyst/type";
import React from "react";
import type { GroupGridContextDTO } from "./type";

export const GroupGridContext = React.createContext<GroupGridContextDTO | undefined>(undefined);

export const COMPONENT_NAME = localConstant("GroupGrid");

export const GroupGridInitialState: GroupGridDTO = {
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
