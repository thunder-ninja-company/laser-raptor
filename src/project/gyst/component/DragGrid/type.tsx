import type { DragPanelDTO } from "./DragPanel/type";
import type { DragItemDTO } from "./DragItem/type";
import type { ListPosition } from "gyst/type";

export interface Props {
    onChange : (value : DragGridDTO) => void;
    dragGrid : DragGridDTO;
}

export interface DragGridDTO {
    panels : DragPanelDTO[];
    id     : string;
}

export interface DragGridContextDTO {
    duplicatePanel : (panelId : string) => void;
    duplicateItem  : (itemId : string) => void;
    removePanel    : (panelId : string) => void;
    removeItem     : (itemId : string) => void;
    toggleItem     : (itemId : string) => void;
    addNewPanel    : (position : ListPosition) => void;
    changeItem     : (item : DragItemDTO) => void;
    addNewItem     : (position : ListPosition, panelId : string) => void;
    dragDrap       : (dragDropState : DragDropState) => void;
    dragGrid       : DragGridDTO;
};

export interface DragDropState {
    dragPanelId : string | null;
    dropPanelId : string | null;
    dragItemId  : string | null;
    dropIndex   : number | null;
}
