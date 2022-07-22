import type { ContentProps } from "./type";
import LandingZone from "./LandingZone";
import { useStyles } from "./style";
import { Box } from "@mantine/core";
import DragPanel from "./DragPanel";
import React from "react";

export default function DragGrid(props: ContentProps) {
    const { classes } = useStyles();

    const { value: { id, panels } } = props;

    return (
        <Box id={id} className={classes.dragGrid}>
            <LandingZone
                index={0}
                panelId={null}
                type='grid' />
            {panels.map((dragPanel, index) => (
                <React.Fragment key={`gp-${dragPanel.id}`}>
                    <DragPanel dragPanel={dragPanel} />
                    <LandingZone
                        index={index + 1}
                        panelId={null}
                        type='panel' />
                </React.Fragment>
            ))}
        </Box>
    );
}
