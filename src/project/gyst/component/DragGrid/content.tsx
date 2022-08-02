import { IconAddPanel } from "gyst/component";
import { Box, Grid } from "@mantine/core";
import LandingZone from "./LandingZone";
import type { Props } from "./type";
import { useStyles } from "./style";
import DragPanel from "./DragPanel";
import React from "react";

export default function DragGridContent({ dragGrid : { id, panels }} : Props) {

    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.dragGrid}>
            <LandingZone
                index={0}
                panelId={null}
                type='grid' />
            <Grid>
                {panels.map((dragPanel, index) =>
                    <Grid.Col
                        key={`gp-${dragPanel.id}`}
                        sm={6}
                        lg={4}>
                        <DragPanel
                            dragPanel={dragPanel} />
                        <LandingZone
                            index={index + 1}
                            panelId={null}
                            type='grid' />
                    </Grid.Col>
                )}
            <Grid.Col
                key={`gp-add-panel-tail`}
                md={6}
                lg={3}>
                <IconAddPanel
                    id='add-panel-tail'
                    position='tail' />
                </Grid.Col>
            </Grid>
            <LandingZone
                index={panels.length + 1}
                panelId={null}
                type='grid' />
        </Box>
    );
}
