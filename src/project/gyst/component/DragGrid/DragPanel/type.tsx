import type { DragItemDTO } from "../DragItem/type";

export interface DragPanelProps {
    dragPanel: DragPanelDTO;
}

export interface DragPanelDTO {
    id: string;
    items: DragItemDTO[];
}
