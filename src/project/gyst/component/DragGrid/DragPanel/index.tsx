import LandingZone from "../LandingZone";
import type { Props } from "./type";
import { Box } from "@mantine/core";
import { useStyles } from "./style";
import DragItem from "../DragItem";
import React from "react";
import {
    DragSource, IconDuplicatePanel,
    IconRemovePanel, IconAddItem,
} from "gyst/component";

export default function DragPanel({ dragPanel }: Props) {

    const { classes } = useStyles();

    const { id : panelId, items } = dragPanel;

    return (
        <Box
            className={classes.groupPanel}
            id={panelId}>
            <IconDuplicatePanel
                panelId={panelId} />
            <IconRemovePanel
                panelId={panelId} />
            <IconAddItem
                id={`add-item-tail-${dragPanel.id}`}
                position='tail'
                panelId={panelId} />
            <DragSource
                panelId={panelId} />
            <LandingZone
                panelId={panelId}
                type='panel'
                index={0} />
            {items.map((dragItem, index) => (
                <React.Fragment
                    key={dragItem.id}>
                    <DragItem
                        key={`drag-item-${dragItem.id}-hack-${dragItem.value}-${dragItem.status}`}
                        panelId={panelId}
                        dragItem={dragItem} />
                    <LandingZone
                        panelId={panelId}
                        index={index + 1}
                        type='panel' />
                </React.Fragment>
            ))}
        </Box>
    );
}
