import type { DragPanelDTO } from "./DragPanel/type";

export interface Props {
    onChange: (value: DragGridDTO) => void;
    value: DragGridDTO;
}

export interface ContentProps {
    value: DragGridDTO;
}

export interface DragGridDTO {
    id: string;
    panels: DragPanelDTO[];
}

export interface DragGridContextDTO {
    onChange : (dragDropState : DragDropState) => void;
    value : DragGridDTO;
}

export interface DragDropState {
    dragPanelId : string | null;
    dragItemId : string | null;

    dropPanelId : string | null;
    dropIndex : number | null;
}
