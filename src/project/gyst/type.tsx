import type { DragItemDTO } from 'gyst/component/DragGrid/DragItem/type';
import type { DragGridDTO } from 'gyst/component/DragGrid/type';
export interface Props {
    id : string;
}
export interface GystAppRoot {
    isDebugDialogOpen : boolean;
    dragGrid          : DragGridDTO;
}

export type ListPosition = 'head' | 'tail';

export interface GystAppContextDTO {
    // duplicatePanel : (panelId : string) => void;
    // duplicateItem  : (itemId : string) => void;
    // addNewItem     : (position : ListPosition, panelId : string) => void;
    // addNewPanel    : (position : ListPosition) => void;
    // changeItem     : (item : DragItemDTO) => void;
    // removePanel    : (panelId : string) => void;
    // toggleItem     : (itemId : string) => void;
    // removeItem     : (itemId : string) => void;
    onHelp         : (id : string) => void;
}
