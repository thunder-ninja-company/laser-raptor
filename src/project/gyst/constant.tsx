import { DragGridInitialState } from "gyst/component/DragGrid/constant";
import type { GystAppContextDTO, GystAppRoot } from "gyst/type";
import React from "react";

export const ProjectName = "gyst";

// Define the initial state using that type
export const initialState: GystAppRoot = {
    dragGrid: DragGridInitialState,
    hello: 123,
};

export const GystAppContext = React.createContext<GystAppContextDTO | undefined>(undefined);

export enum IconSize {
    small = 32,
    large = 48,
}

export const LessProminentIconColor = "#888";
