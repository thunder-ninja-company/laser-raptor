import { Box } from "@mantine/core";

import { COMPONENT_NAME } from "./constant";

import type { Props } from "./type";

export default function GroupGrid({ id: _id }: Props) {
    return (
        <Box sx={{ padding: "20px", margin: "20px" }}>
            {`GroupGrid Content ${COMPONENT_NAME}`}
        </Box>
    );
}
