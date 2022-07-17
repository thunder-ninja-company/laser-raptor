import { Box } from "@mantine/core";
import GroupGrid from "../GroupGrid";

import { COMPONENT_NAME } from "./constant";

import type { Props } from "./type";

export default function LandingPad({ id }: Props) {
    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
            {'landing pad?'}
        </Box>
    );
}
