export type ItemStatus = 'default' | 'checked';

export interface DragItemDTO {
    status : ItemStatus;
    value  : string;
    id     : string;
}

export interface FormValues {
    value : string;
    email : string;
}

// rename this, doesnt make sense anymore
export type DragItemType = 'head' | 'item' | 'tail';

export interface DragItemProps {
    dragPanelIndex : number;
    dragItemIndex  : number;
    position       : DragItemType;
    panelId        : string;
}
