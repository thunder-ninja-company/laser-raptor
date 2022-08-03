import type { DragItemDTO } from "../DragItem/type";


export type Props = React.PropsWithChildren<{
    dragPanel: DragPanelDTO;
}>

export type PropsHeaderFooter = React.PropsWithChildren<{
    justify : 'left'  | 'right';
    isHovering : boolean;
}>



export interface DragPanelDTO {
    id: string;
    items: DragItemDTO[];
}
