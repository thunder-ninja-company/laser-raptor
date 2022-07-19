import { Box } from "@mantine/core";
import { useStyles } from "./style";

import type { Props } from "./type";

export default function AppBody({ id, children }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.root}>
            {children}
        </Box>
    );
}
