import type { GystAppRoot } from 'gyst/type'
import { createSelector } from 'reselect'

const selectState = (state : GystAppRoot) => state

export const selectDragGrid = createSelector(
    selectState,
  (_selectState) => {
    console.log('selector is now returning:');
    console.log(_selectState.dragGrid);

    return _selectState.dragGrid;
  }
)
