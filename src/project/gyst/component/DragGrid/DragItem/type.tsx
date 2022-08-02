export type ItemStatus = 'default' | 'checked';


export interface DragItemDTO {
    id: string;
    value: string;
    status: ItemStatus;
}

export interface FormValues {
    value: string;
    email: string;
}


type DragItemType = 'head' | 'item' | 'tail';


export interface DragItemProps {
    dragItem: DragItemDTO;
    panelId: string;
    type : DragItemType;
}
