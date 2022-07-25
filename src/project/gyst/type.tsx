import type { DragGridDTO } from "gyst/component/DragGrid/type";

export interface Props {
    id: string;
}

export interface GystAppRoot {
    dragGrid: DragGridDTO;
    hello: number;
}
export interface GystAppContextDTO {
    onRemovePanel : (actionId : string) => void;
    onRemoveItem  : (actionId : string) => void;
    onAddPanel    : (actionId : string) => void;
    onAddItem     : (actionId : string) => void;
}
