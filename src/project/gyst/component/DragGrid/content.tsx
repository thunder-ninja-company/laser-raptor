import ActionIcon from "~src/project/gyst/component/IconAddPanel";
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
            <Grid.Col
                key={`gp-add-panel-tail`}
                md={6}
                lg={3}>
                <ActionIcon
                    id='add-panel-tail'
                    position='tail' />
                </Grid.Col>
            </Grid>
        </Box>
    );
}
