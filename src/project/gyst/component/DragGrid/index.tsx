import { initialDragItem, initialDragPanel } from "gyst/component/DragGrid/constant";
import type { DragDropState, DragGridContextDTO, DragGridDTO, Props } from "./type";
import KeyValueList from "gyst/component/KeyValueList";
import { HTML5Backend } from "react-dnd-html5-backend";
import type { DragItemDTO } from "./DragItem/type";
import type { ListPosition } from "gyst/type";
import { DragGridContext } from "./constant";
import { IconAddPanel } from "gyst/component";
import { Box, Grid } from "@mantine/core";
import { copyObject } from "gyst/shared";
import { DndProvider } from 'react-dnd';
import LandingZone from "./LandingZone";
import { useStyles } from "./style";
import DragPanel from "./DragPanel";
import { nanoid } from "nanoid";
import Logic from './logic';
import React from "react";

export default function DragGrid({ dragGrid, onChange }: Props) {

    const { classes } = useStyles();

    const duplicatePanel = (panelId: string) : void => {
        console.log(`handleDuplicatePanel ${panelId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        Logic.duplicatePanel(copyGrid, panelId);

        onChange(dragGrid);
    };

    const duplicateItem = (itemId: string) : void => {
        console.log(`handleDuplicateItem ${itemId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        Logic.duplicateItem(copyGrid, itemId);

        onChange(dragGrid);
    };

    const removePanel = (panelId: string) : void => {
        console.log(`handleRemovePanel ${panelId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        Logic.removePanel(copyGrid, panelId);

        onChange(copyGrid);
    };

    const removeItem = (itemId: string) : void => {
        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        console.log(`handleRemoveItem ${itemId}`);

        Logic.removeItem(copyGrid, itemId);

        Logic.removeEmptyPanels(copyGrid);

        onChange(copyGrid);
    };

    const toggleItem = (itemId: string) : void => {
        console.log(`handleToggleItem ${itemId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        Logic.toggleItem(copyGrid, itemId);

        debugger;

        onChange(copyGrid);
    };

    const addNewPanel = (position : ListPosition) => {

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        // todo move into logic portion

        const newPanel = {
            ...initialDragPanel,
            id: nanoid(),
            items: [{
                ...initialDragItem,
                id: nanoid(),
            }]
        };

        switch(position) {
            case 'head':
                Logic.insertPanel(copyGrid, 0, newPanel);
                break;

            case 'tail':
                Logic.insertPanel(copyGrid, copyGrid.panels.length, newPanel);
                break;

            default:
                throw Error(`Unknown actionId ${position}`);
        }

        debugger;

        onChange(copyGrid);
    };

    const changeItem = (item: DragItemDTO) : void => {
        console.log(`handleChangeItem ${item.id}`);

        debugger;

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        Logic.changeItem(copyGrid, item);

        onChange(copyGrid);
        // dispatch(updateGroupGridValue(copyGrid));
    };

    const addNewItem = (position : ListPosition, panelId : string) => {
        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        const newItem = {
            ...initialDragItem,
            id: nanoid(),
        }

        Logic.insertItem(copyGrid, panelId, position, newItem);

        debugger;

        onChange(copyGrid);

        // dispatch(updateGroupGridValue(copyGrid));
    };

    const dragDrap = (dragDropState : DragDropState) => {

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        Logic.changeDragDrop(copyGrid, dragDropState, onChange);

        onChange(copyGrid);
    }

    const context : DragGridContextDTO = {
        duplicatePanel,
        duplicateItem,
        removePanel,
        removeItem,
        toggleItem,
        addNewPanel,
        changeItem,
        addNewItem,
        dragDrap,
        dragGrid,
    };

    // DragGrid
    console.log('DragGrid dragGrid is now: ', dragGrid);

    // const { dragGrid : { id, panels } } = context as DragGridContextDTO;

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <KeyValueList
                    id='debug-primary-list'
                    value={dragGrid}  />
                    <Box
                        className={classes.dragGrid}
                        id={dragGrid.id}>
                        <Grid>
                            <>
                                {dragGrid.panels.map((dragPanel, dragPanelIndex) =>
                                    <Grid.Col
                                        key={`gp-${dragPanel.id}`}
                                        xs={12}
                                        md={6}
                                        lg={4}>
                                        <LandingZone
                                            index={dragPanelIndex}
                                            panelId={null}
                                            type='grid'>
                                            <DragPanel dragPanelIndex={dragPanelIndex} />
                                        </LandingZone>
                                    </Grid.Col>
                                )}
                                <Grid.Col
                                    xs={12}
                                    md={6}
                                    lg={4}>
                                    <LandingZone
                                        index={dragGrid.panels.length}
                                        panelId={null}
                                        type='grid'>
                                        <IconAddPanel
                                            id='add-panel-tail'
                                            position='tail' />
                                    </LandingZone>
                                </Grid.Col>
                            </>
                        </Grid>
                    </Box>
            </DndProvider>
        </DragGridContext.Provider>

    );
}
