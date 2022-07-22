import type { DragPanelDTO } from "./DragPanel/type";

export interface Props {
    onChange: (value: DragGridDTO) => void;
    dragGrid: DragGridDTO;
}

export interface DragGridDTO {
    id: string;
    panels: DragPanelDTO[];
}

export interface DragDropState {
    dragPanelId : string | null;
    dragItemId : string | null;

    dropPanelId : string | null;
    dropIndex : number | null;
}
