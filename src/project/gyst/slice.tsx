import type { DragGridDTO } from "gyst/component/DragGrid/type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constant";
import { ProjectName } from './constant';
import { copyObject } from "gyst/shared";

export default createSlice({
    name: ProjectName,

    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        updateGroupGridValue: (state, action: PayloadAction<DragGridDTO>) => {

            state.dragGrid = {
                ...action.payload,
            }

            console.log('slice value now:');
            console.log(state.dragGrid);
        },
    },
});
