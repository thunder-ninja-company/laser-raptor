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
        <Box
            className={classes.dragGrid}
            id={id}>
            <Grid>
                {panels.map((dragPanel, index) =>
                    <Grid.Col
                        key={`gp-${dragPanel.id}`}
                        xs={12}
                        md={6}
                        lg={4}>
                        <LandingZone
                            index={index}
                            panelId={null}
                            type='grid'>
                            <DragPanel dragPanel={dragPanel} />
                        </LandingZone>
                    </Grid.Col>
                )}
            <Grid.Col
                xs={12}
                md={6}
                lg={4}>
                <IconAddPanel
                    id='add-panel-tail'
                    position='tail' />
                </Grid.Col>
            </Grid>
        </Box>
    );
}

/**
 * <br />
            <LandingZone
                index={panels.length + 1}
                panelId={null}
                type='grid'>
                {'GRID3'}
            </LandingZone>
 */
