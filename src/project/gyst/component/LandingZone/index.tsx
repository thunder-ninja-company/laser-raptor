import { Box } from "@mantine/core";
import { useStyles } from "./style";

import type { Props } from "./type";

export default function LandingZone({ id }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={String(id)} className={classes.root}>
            {`LZ - ${id}`}
        </Box>
    );
}
