import LandingZone from "../LandingZone";
import type { Props } from "./type";
import { Box } from "@mantine/core";
import { useStyles } from "./style";
import DragItem from "../DragItem";
import React from "react";

export default function DragPanel({ dragPanel }: Props) {

    const { classes } = useStyles();

    const { id : panelId, items } = dragPanel;

    // debugger;

    return (
        <Box id={panelId} className={classes.groupPanel}>
            {`DragPanel (${panelId})`}
            <LandingZone
                panelId={panelId}
                type='panel'
                index={0} />
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