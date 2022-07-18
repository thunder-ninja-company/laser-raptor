import { Box } from "@mantine/core";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function GroupPanelItem({ value: { id, value } }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.groupPanelItem}>
            {value} {"GroupPanelItem "}
        </Box>
    );
}
