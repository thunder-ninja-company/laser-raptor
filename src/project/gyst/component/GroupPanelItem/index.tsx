import { Box } from "@mantine/core";

import type { Props } from "./type";

export default function GroupPanelItem({ value: { id, value } }: Props) {
    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
            {value} {'GroupPanelItem '}
        </Box>
    );
}
