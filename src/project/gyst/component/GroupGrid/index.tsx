import { Box } from "@mantine/core";
import { GroupPanel, LandingZone } from "gyst/component";
import { DndProvider } from 'react-dnd'
import React from "react";
import { useStyles } from "./style";
import type { Props } from "./type";
import { HTML5Backend } from "react-dnd-html5-backend";

// https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:1716-1755
// https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

export default function GroupGrid({ value : { id, groupPanels } }: Props) {
    const { classes } = useStyles();

    return (
        <DndProvider backend={HTML5Backend}>
            <Box id={id} className={classes.groupGrid}>
                <LandingZone id={`lz-gg-${id}-0`} />

                {groupPanels.map((panel, index) => (
                    <React.Fragment key={`gp-${panel.id}`}>
                        <GroupPanel value={panel} />
                        <LandingZone id={`lz-gg-${id}-${index + 1}`} />
                    </React.Fragment>

                ))}
            </Box>
        </DndProvider>
    );
}
