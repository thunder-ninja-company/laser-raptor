import ActionIcon from "gyst/component/ActionIcon";
import { Box } from "@mantine/core";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function AppHeader({ id }: Props) {

    const { classes } = useStyles();

    // const handleClick = () => onClick(id, actionType);

    return (
        <Box
            className={classes.root}
            onClick={() => ({})}
            id={id}>
            <ActionIcon id='header-add-icon' />
        </Box>
    );
}
