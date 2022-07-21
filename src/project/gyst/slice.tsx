import { initialState } from "./constant";
import type { DragGridDTO } from "gyst/component/DragGrid/type";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "gragGrid",

    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        updateGroupGridValue: (state, action: PayloadAction<DragGridDTO>) => {
            state.dragGrid = action.payload;
        },
    },
});

export const { updateGroupGridValue } = counterSlice.actions;

export default counterSlice.reducer;
