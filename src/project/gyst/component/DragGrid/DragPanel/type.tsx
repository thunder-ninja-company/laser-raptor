import type { DragItemDTO } from "../DragItem/type";

export interface DragPanelProps {
    value: DragPanelDTO;
}

export interface DragPanelDTO {
    id: string;
    items: DragItemDTO[];
}
