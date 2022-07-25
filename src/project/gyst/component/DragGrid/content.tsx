import type { DragGridDTO, Props } from "./type";
import LandingZone from "./LandingZone";
import { useStyles } from "./style";
import { Box, Grid } from "@mantine/core";
import DragPanel from "./DragPanel";
import React from "react";

export default function DragGridContent(props : Props) {

    const { classes } = useStyles();

    // debugger;

    console.log('asdfasdfasdf');

    const { id, panels } = props.dragGrid;

    // debugger;

    return (
        <Box id={id} className={classes.dragGrid}>
            <LandingZone
                index={0}
                panelId={null}
                type='grid' />
            <Grid>
                {panels.map((dragPanel, index) => (
                    <Grid.Col
                        key={`gp-${dragPanel.id}`}
                        md={6}
                        lg={3}>
                        <DragPanel dragPanel={dragPanel} />
                        <LandingZone
                            index={index + 1}
                            panelId={null}
                            type='panel' />
                    </Grid.Col>
                ))}
            </Grid>
        </Box>
    );
}
