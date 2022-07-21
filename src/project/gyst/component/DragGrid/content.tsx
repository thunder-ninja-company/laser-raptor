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
            {panels.map((panel, index) => (
                <React.Fragment key={`gp-${panel.id}`}>
                    <DragPanel value={panel} />
                    <LandingZone
                        index={index}
                        panelId={null}
                        type='panel' />
                </React.Fragment>
            ))}
        </Box>
    );
}
