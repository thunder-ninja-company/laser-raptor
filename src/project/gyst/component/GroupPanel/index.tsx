import { Box } from "@mantine/core";
import React from "react";

import type { Props } from "./type";

export default function GroupPanel({ id, items : itemList }: Props) {
    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
            {itemList.map((item, index) => (
                <Box key={`group-panel-${id}-item-${index}`}>{item}</Box>
            ))}
        </Box>
    );
}
