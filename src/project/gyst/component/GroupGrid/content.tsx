import { GroupGridContext } from "./constant";
import { useStyles } from "./style";
import type { ContentProps } from "./type";
import { Box } from "@mantine/core";
import { GroupPanel, LandingZone } from "gyst/component";
import React, { useContext } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:1716-1755
// https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

export default function GroupGrid({
    value: { id, groupPanels },
}: ContentProps) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.groupGrid}>
            <LandingZone id={`lz-gg-${id}-0`} index={0} />

            {groupPanels.map((panel, index) => (
                <React.Fragment key={`gp-${panel.id}`}>
                    <GroupPanel value={panel} />
                    <LandingZone id={`lz-gg-${id}-${index + 1}`} index={index} />
                </React.Fragment>
            ))}
        </Box>
    );
}
