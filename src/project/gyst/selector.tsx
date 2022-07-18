import { createSelector } from 'reselect'
import type { GystAppRoot } from './type'

const selectState = (state : GystAppRoot) => state

export const selectGroupGrid = createSelector(
    selectState,
  (_selectState) => _selectState.groupGrid
)
