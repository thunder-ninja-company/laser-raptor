import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { GroupGridDTO } from "./type";
import { initialState } from "./constant";

export const counterSlice = createSlice({
    name: "groupGrid",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        updateGroupGridValue: (state, action: PayloadAction<GroupGridDTO>) => {
            state.groupGrid = action.payload;
        },
    },
});

export const { updateGroupGridValue } = counterSlice.actions;

export default counterSlice.reducer;
