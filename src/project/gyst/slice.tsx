import type { DragGridDTO } from "gyst/component/DragGrid/type";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constant";
import { ProjectName } from './constant';


// export interface CounterState {
//     value: number;
//     status: 'idle' | 'loading' | 'failed';
//   }

//   const initialState: CounterState = {
//     value: 0,
//     status: 'idle',
//   };



export default createSlice({
    name: ProjectName,

    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        updateGroupGridValue: (state, action: PayloadAction<DragGridDTO>) => {
            state.dragGrid = action.payload;
        },
    },
});
