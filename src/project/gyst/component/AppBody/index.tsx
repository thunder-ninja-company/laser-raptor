import { Box } from '@mantine/core';
import type { Props } from './type';
import { useStyles } from './style';

export default function AppBody({ id, children } : Props) {

    const { classes } = useStyles();

    return (
        <Box
            id={id}
            className={classes.appBody}>
            {children}
        </Box>
    );
}
