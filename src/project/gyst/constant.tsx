import { GroupGridInitialState } from "gyst/component/GroupGrid/constant";
import type { GystAppRoot } from "gyst/type";

export const ProjectName = "gyst";

// Define the initial state using that type
export const initialState: GystAppRoot = {
    groupGrid: GroupGridInitialState,
    hello: 123,
};
