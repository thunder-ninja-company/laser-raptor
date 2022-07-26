export type ItemStatus = 'default' | 'checked';

export interface DragItemDTO {
    id: string;
    value: string;
    status: ItemStatus;
}

export interface DragItemProps {
    dragItem: DragItemDTO;
    panelId: string;
}
