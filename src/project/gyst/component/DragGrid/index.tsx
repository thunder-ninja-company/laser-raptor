import type { DragDropState, DragGridContextDTO, DragGridDTO, Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";
import { changeDragDrop, changeItem } from "./logic";
import type { DragItemDTO } from "./DragItem/type";
import { DragGridContext } from "./constant";
import { copyObject } from "gyst/shared";
import DragGridContent from "./content";
import { DndProvider } from 'react-dnd';
import React from "react";

export default function DragGrid({ dragGrid, onChange }: Props) {

    const handleChangeDragDropHelper = (dragDropState : DragDropState) => {

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        return changeDragDrop(copyGrid, dragDropState, onChange);
    }

    const handleChangeItemHelper = (item : DragItemDTO) =>
        changeItem(dragGrid, item, onChange);

    const context : DragGridContextDTO = {
        onChangeItem : handleChangeItemHelper,
        onChange     : handleChangeDragDropHelper,
        dragGrid     : dragGrid,
    };

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <DragGridContent
                    onChange={onChange}
                    dragGrid={dragGrid} />
            </DndProvider>
        </DragGridContext.Provider>

    );
}
