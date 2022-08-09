import type { DragDropState, DragGridContextDTO } from './type';
import type { DragPanelDTO } from './DragPanel/type';
import type { DragItemDTO } from './DragItem/type';
import { localConstant } from 'core/constants';
import type { DragGridDTO } from './type';
import React from 'react';

export const DragGridContext = React.createContext<DragGridContextDTO | undefined>(undefined);

export const COMPONENT_NAME = localConstant('DragGrid');

export const initialDragDropState : DragDropState = {
    // drag
    dragPanelId : null,
    dragItemId  : null,

    // drop
    dropPanelId : null,
    dropIndex   : null,
};

export const initialDragItem : DragItemDTO = {
    id     : '',
    value  : 'Default item',
    status : 'default',
};

export const initialDragPanel : DragPanelDTO = {
    id    : '',
    items : [
        initialDragItem,
    ],
};

export const initialDragGrid : DragGridDTO = {
    id     : '',
    panels : [
        initialDragPanel,
    ],
};

export const DragGridInitialState : DragGridDTO = {
    ...initialDragGrid,
    id     : 'grid-0',
    panels : [
        {
            ...initialDragPanel,
            id    : 'panel-0',
            items : [
                {
                    ...initialDragItem,
                    id    : 'item-alpha',
                    value : 'alpha',
                },
                {
                    ...initialDragItem,
                    id    : 'item-beta',
                    value : 'beta',
                },
                {
                    ...initialDragItem,
                    id    : 'item-charlie',
                    value : 'charlie',
                },
                {
                    ...initialDragItem,
                    id    : 'item-delta',
                    value : 'delta',
                },
            ],
        },
        {
            id    : 'panel-1',
            items : [
                {
                    ...initialDragItem,
                    id    : 'item-echo',
                    value : 'echo',
                },
                {
                    ...initialDragItem,
                    id    : 'item-foxtrot',
                    value : 'foxtrot',
                },
            ],
        },
    ],
};
