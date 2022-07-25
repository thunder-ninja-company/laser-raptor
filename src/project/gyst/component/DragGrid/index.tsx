import type { DragDropState, DragGridContextDTO, Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragGridContext } from "./constant";
import React, { useEffect } from "react";
import DragGridContent from "./content";
import { DndProvider } from 'react-dnd'
import { handleAddItem, handleAddPanel, handleChange, handleRemoveItem, handleRemovePanel } from "./logic";

export default function DragGrid(props: Props) {

    const { dragGrid : dragGridOriginal, onChange } = props;

    const handleChangeHelper = (dragDropState : DragDropState) => {
        debugger;

        handleChange(dragGridOriginal, dragDropState, onChange)
    }

    const context : DragGridContextDTO = {
        dragGrid : dragGridOriginal,
        onChange : handleChangeHelper,
        onRemovePanel :() => handleRemovePanel,
        onRemoveItem :() => handleRemoveItem,
        onAddPanel :() => handleAddPanel,
        onAddItem :() => handleAddItem,
    };

    // debugger;

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <DragGridContent {...props} />
            </DndProvider>
        </DragGridContext.Provider>

    );
}
