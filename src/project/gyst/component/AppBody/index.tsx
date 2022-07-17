import { Box } from "@mantine/core";

import type { Props } from "./type";

export default function AppBody({ id, children }: Props) {
    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
            {children}
        </Box>
    );
}
