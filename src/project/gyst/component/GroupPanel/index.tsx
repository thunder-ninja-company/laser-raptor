import { Box } from "@mantine/core";
import React from "react";
import GroupPanelItem from "project/gyst/component/GroupPanelItem";

import type { Props } from "./type";

export default function GroupPanel({ id, value }: Props) {
    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
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
