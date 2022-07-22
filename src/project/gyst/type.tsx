import type { DragGridDTO } from "gyst/component/DragGrid/type";

export interface Props {
    id: string;
}

export interface GystAppRoot {
    dragGrid: DragGridDTO;
    hello: number;
}
