import { DragItem, LandingZone } from "../..";
import { Box, Chip } from "@mantine/core";
import { useStyles } from "./style";
import type { DragPanelProps } from "./type";
import React from "react";

export default function DragPanel({ value}: DragPanelProps) {
    const { classes } = useStyles();

    const { id : panelId, items } = value;

    return (
        <Box id={panelId} className={classes.groupPanel}>
            <Chip value={panelId}>
                {`<panel (${panelId})>`}
            </Chip>


            <LandingZone id={`lz-${panelId}-0`} index={0} type='item' />

            {items.map((item, index) => (
                <React.Fragment key={item.id}>
                    <DragItem
                        key={`panel-${panelId}-item-${item.id}`}
                        panelId={panelId}
                        value={item}
                    />
                    <LandingZone id={`lz-${panelId}-${index + 1}`} index={index} type='item' />
                </React.Fragment>
            ))}
        </Box>
    );
}
