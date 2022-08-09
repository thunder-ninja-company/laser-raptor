import type { DragGridDTO } from 'gyst/component/DragGrid/type'
export interface Props {
    id : string;
}
export interface GystAppRoot {
    isDebugDialogOpen : boolean;
    dragGrid          : DragGridDTO;
}

export type ListPosition = 'head' | 'tail'

export interface GystAppContextDTO {
    onHelp         : (id : string) => void;
}
