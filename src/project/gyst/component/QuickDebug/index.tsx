import { useStyles } from './style';
import type { Props } from './type';
import { Box } from '@mantine/core';
import React from 'react';

export default function QuickDebug({ value, id  } : Props) {

    const { classes } = useStyles();

    return (
        <Box
            id={id}
            classNames={classes.quickDebug}>
            {value}
        </Box>
    );
}
