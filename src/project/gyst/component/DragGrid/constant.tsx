import type { DragDropState, DragGridContextDTO } from "./type";
import { localConstant } from "core/constants";
import type { DragGridDTO } from "gyst/type";
import React from "react";

export const DragGridContext = React.createContext<DragGridContextDTO | undefined>(undefined);

export const COMPONENT_NAME = localConstant("DragGrid");

export const initialDragDropState : DragDropState = {
    // drag
    dragPanelId : null,
    dragItemId  : null,

    // drop
    dropPanelId : null,
    dropIndex   : null,
};


export const DragGridInitialState: DragGridDTO = {
    id: "gg-0",
    panels: [
        {
            id: "gp-abc",
            items: [
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
            items: [
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
