import type { GystAppRoot } from 'gyst/type'
import { createSelector } from 'reselect'

const selectState = (state : GystAppRoot) => state

export const selectDragGrid = createSelector(
    selectState,
    _selectState => {
    // debugger;
        return _selectState.dragGrid;
    }
)

export const selectIsDebugDialogOpen = createSelector(
    selectState,
    _selectState => {
    // debugger;
        return _selectState.isDebugDialogOpen;
    }
)
