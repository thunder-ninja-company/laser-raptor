import type { DragDropState, DragGridContextDTO } from "./type";
import { localConstant } from "core/constants";
import type { DragGridDTO } from "./type";
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
    id: "grid-0",
    panels: [
        {
            id: "panel-0",
            items: [
                {
                    id: "id-alpha",
                    value: "Alpha",
                },
                {
                    id: "id-beta",
                    value: "Beta",
                },
            ],
        },
        {
            id: "panel-1",
            items: [
                {
                    id: "id-charlie",
                    value: "Charlie",
                },
                {
                    id: "id-delta",
                    value: "Delta",
                },
            ],
        },
    ],
};
