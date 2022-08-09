import type { DragGridDTO } from 'gyst/component/DragGrid/type'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './constant'
import { ProjectName } from './constant'
import { copyObject } from 'gyst/shared'

export default createSlice({
    initialState,
    name     : ProjectName,
    reducers : {
        updateGroupGridValue : (state, action : PayloadAction<DragGridDTO>) => {

            state.dragGrid = copyObject(action.payload) as DragGridDTO
        },

        toggleDebugDialog : state => {

            state.isDebugDialogOpen = !state.isDebugDialogOpen
        },
    },
})
