import AddPanel from "gyst/component/IconAddPanel";
import IconHelp from "gyst/component/IconHelp";
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
            <AddPanel
                id='add-panel-head'
                position='head' />

            <IconHelp id={`help-${id}`} />
        </Box>
    );
}
