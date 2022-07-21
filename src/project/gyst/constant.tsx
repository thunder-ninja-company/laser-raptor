import { DragGridInitialState } from "~src/project/gyst/component/DragGrid/constant";
import type { GystAppRoot } from "gyst/type";

export const ProjectName = "gyst";

// Define the initial state using that type
export const initialState: GystAppRoot = {
    dragGrid: DragGridInitialState,
    hello: 123,
};
