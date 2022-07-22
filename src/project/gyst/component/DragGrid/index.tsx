import type { DragDropState, DragGridDTO, Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragGridContext } from "./constant";
import { DndProvider } from 'react-dnd'
import DragGridContent from "./content";
import React from "react";

export default function DragGrid(props: Props) {

    const { dragGrid, onChange } = props;

    const handleChange = (dragDropState : DragDropState) => {
        // debugger; // heellooooo
        const dragGridCopy = JSON.parse(JSON.stringify(props.dragGrid)) as DragGridDTO;

        if(dragDropState.dropPanelId === null && dragDropState.dropIndex !== null) {

            dragGridCopy.panels.splice(dragDropState.dropIndex || 0, 0, {
                id: 'adsfasdfasdf',
                items: [
                    {
                        id: 'adsfasdfasdf',
                        value: 'item adsfasdfasdf',
                    },
                ],
            })
        } else {
            const dropPanelIndex = dragGridCopy.panels.findIndex(p => p.id === dragDropState.dropPanelId);

            dragGridCopy.panels[dropPanelIndex].items.splice(dragDropState.dropIndex || 0, 0, {
                id: 'adsfasdfasdf',
                value: 'item adsfasdfasdf sdfsfwefwefwef',
            });
        }

        // since either panels or items are being added, we need to re-lookup
        const updatedDragPanelIndex = dragGridCopy.panels.findIndex(p => p.id === dragDropState.dragPanelId);

        // debugger;

        const updatedDragItemIndex = dragGridCopy.panels[updatedDragPanelIndex].items.findIndex(dragItem => dragItem.id === dragDropState.dragItemId);

        dragGridCopy.panels[updatedDragPanelIndex].items.splice(updatedDragItemIndex, 1);

        onChange(dragGridCopy);
    }


    const context = {
        onChange : handleChange,
        dragGrid,
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
