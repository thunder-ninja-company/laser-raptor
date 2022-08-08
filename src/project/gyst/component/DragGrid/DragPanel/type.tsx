import type { DragItemDTO } from "../DragItem/type";


export type Props = React.PropsWithChildren<{
    dragPanelIndex: number;
}>

export type PropsHeaderFooter = React.PropsWithChildren<{
    justify : 'left'  | 'right';
}>

export interface DragPanelDTO {
    id: string;
    items: DragItemDTO[];
}
