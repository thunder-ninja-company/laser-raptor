import { Box } from "@mantine/core";
import React from "react";
import GroupPanelItem from "project/gyst/component/GroupPanelItem";
import { useStyles } from "./style";

import type { Props } from "./type";

export default function GroupPanel({ id, value }: Props) {
    const style = useStyles();

    return (
        <Box id={id} className={style.classes.groupPanel}>
            {`GROUP PANEL ${id} items: `}
            {value.groupPanelItems.map((item, index) => (
                <GroupPanelItem
                    key={`group-panel-${id}-item-${index}`}
                    value={item}
                />
            ))}
        </Box>
    );
}
