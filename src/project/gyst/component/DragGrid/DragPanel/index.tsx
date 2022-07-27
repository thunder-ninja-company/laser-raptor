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
        <Box id={panelId} className={classes.groupPanel}>
            <LandingZone
                panelId={panelId}
                type='panel'
                index={0} />
            <IconDuplicatePanel panelId={panelId} />
            <IconRemovePanel panelId={panelId} />

            <DragSource panelId={panelId} />

            {items.map((dragItem, index) => (
                <React.Fragment key={dragItem.id}>
                    <DragItem
                        panelId={panelId}
                        dragItem={dragItem} />
                    <LandingZone
                        panelId={panelId}
                        index={index + 1}
                        type='panel' />
                </React.Fragment>
            ))}

            <IconAddItem
                id={`add-item-tail-${dragPanel.id}`}
                position='tail'
                panelId={panelId} />
        </Box>
    );
}
