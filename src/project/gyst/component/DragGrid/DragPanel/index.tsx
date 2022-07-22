import type { DragPanelProps } from "./type";
import { Box, Chip } from "@mantine/core";
import LandingZone from "../LandingZone";
import { useStyles } from "./style";
import DragItem from "../DragItem";
import React from "react";

export default function DragPanel({ dragPanel }: DragPanelProps) {
    const { classes } = useStyles();

    const { id : panelId, items } = dragPanel;

    return (
        <Box id={panelId} className={classes.groupPanel}>
            <Chip value={panelId}>
                {`<panel (${panelId})>`}
            </Chip>


            <LandingZone id={`lz-${panelId}-0`} index={0} type='item' />

            {items.map((dragItem, index) => (
                <React.Fragment key={dragItem.id}>
                    <DragItem
                        key={`panel-${panelId}-item-${dragItem.id}`}
                        panelId={panelId}
                        dragItem={dragItem}
                    />
                    <LandingZone
                        panelId={panelId}
                        index={index + 1}
                        type='panel' />
                </React.Fragment>
            ))}
        </Box>
    );
}
