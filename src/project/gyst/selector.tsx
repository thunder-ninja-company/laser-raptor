import type { GystAppRoot } from 'gyst/type'
import { createSelector } from 'reselect'

const selectState = (state : GystAppRoot) => state

export const selectDragGrid = createSelector(
    selectState,
    _selectState => _selectState.dragGrid,
)

export const selectIsDebugDialogOpen = createSelector(
    selectState,
    _selectState => _selectState.isDebugDialogOpen,
)
