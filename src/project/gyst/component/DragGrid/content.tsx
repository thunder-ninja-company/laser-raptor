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
            <LandingZone
                index={0}
                panelId={null}
                type='grid' />
            <Grid>
                {panels.map((dragPanel, index) =>
                    <React.Fragment key={`gp-${dragPanel.id}`}>
                        <Grid.Col
                            xs={3}
                            style={{
                                border : '1px solid #0e0',
                            }}>
                            <DragPanel
                                dragPanel={dragPanel} />

                        </Grid.Col>
                        <Grid.Col xs={1}>
                            <LandingZone
                                index={index + 1}
                                panelId={null}
                                type='grid' />
                        </Grid.Col>
                    </React.Fragment>


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
            <br />
            <LandingZone
                index={panels.length + 1}
                panelId={null}
                type='grid' />
        </Box>
    );
}
