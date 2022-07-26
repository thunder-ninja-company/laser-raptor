import type { DragGridDTO } from "gyst/component/DragGrid/type";

export interface Props {
    id: string;
}

export interface GystAppRoot {
    dragGrid: DragGridDTO;
    hello: number;
}

export type ListPosition = 'head' | 'tail';

export interface GystAppContextDTO {

    addNewPanel : (position : ListPosition) => void;
    addNewItem  : (position : ListPosition, panelId : string) => void;

    removePanel : (panelId : string) => void;
    removeItem  : (itemId : string) => void;

    toggleItem  : (itemId : string) => void;

    onHelp  : (id : string) => void;
}
