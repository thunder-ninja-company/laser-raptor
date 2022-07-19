import { Box } from "@mantine/core";
import React from "react";
import { GroupPanelItem } from "gyst/component";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function GroupPanel({ value: { id, groupPanelItems } }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.groupPanel}>
            {groupPanelItems.map((item) => (
                <GroupPanelItem
                    key={`group-panel-${id}-item-${item.id}`}
                    value={item}
                />
            ))}
        </Box>
    );
}
