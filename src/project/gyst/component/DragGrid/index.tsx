import { HTML5Backend } from "react-dnd-html5-backend";
import type { DragDropState, Props } from "./type";
import { DragGridContext } from "./constant";
import { DndProvider } from 'react-dnd'
import Content from "./content";
import React from "react";

export default function DragGrid({ value, onChange  }: Props) {

    const handleChange = (dragDropState : DragDropState) => {
        debugger;
    }

    const context = {
        onChange : handleChange,
        value,
    };

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <Content value={value} />
            </DndProvider>
        </DragGridContext.Provider>

    );
}
