import type { DragPanelDTO } from "./DragPanel/type";
import type { DragItemDTO } from "./DragItem/type";

export interface Props {
    onChange : (value: DragGridDTO) => void;
    dragGrid : DragGridDTO;
}

export interface DragGridDTO {
    panels : DragPanelDTO[];
    id     : string;
}

export interface DragGridContextDTO {
    onChangeItem : (dragItem : DragItemDTO) => void;
    onChange     : (dragDropState : DragDropState) => void;
    dragGrid     : DragGridDTO;
};

export interface DragDropState {
    dragPanelId : string | null;
    dropPanelId : string | null;
    dragItemId  : string | null;
    dropIndex   : number | null;
}
