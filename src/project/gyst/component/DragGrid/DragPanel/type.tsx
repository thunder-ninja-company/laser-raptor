import type { DragItemDTO } from "../DragItem/type";

export interface Props {
    dragPanel: DragPanelDTO;

}

export interface DragPanelDTO {
    id: string;
    items: DragItemDTO[];
}
