import type { DragDropState, DragGridContextDTO, Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragGridContext } from "./constant";
import DragGridContent from "./content";
import { DndProvider } from 'react-dnd';
import { handleChange } from "./logic";
import React from "react";

export default function DragGrid(props: Props) {

    const { dragGrid : dragGridOriginal, onChange } = props;

    const handleChangeHelper = (dragDropState : DragDropState) =>
        handleChange(dragGridOriginal, dragDropState, onChange);

    const context : DragGridContextDTO = {
        onChange : handleChangeHelper,
        dragGrid : dragGridOriginal,
    };

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <DragGridContent {...props} />
            </DndProvider>
        </DragGridContext.Provider>

    );
}
