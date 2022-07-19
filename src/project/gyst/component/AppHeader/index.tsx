import { Box } from "@mantine/core";

import { COMPONENT_NAME } from "./constant";
import { useStyles } from "./style";

import type { Props } from "./type";

export default function AppHeader({ id }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.root}>
            {`AppBody Content ${COMPONENT_NAME}`}
        </Box>
    );
}
