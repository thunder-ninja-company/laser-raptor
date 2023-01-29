import React from 'react';
import { useStyles } from './style';
import type { Props } from './type';
import { Box } from '@mantine/core';

// https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:1716-1755
// https://medium.com/nmc-techblog/easy-drag-and-drop-in-react-22778b30ba37

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
