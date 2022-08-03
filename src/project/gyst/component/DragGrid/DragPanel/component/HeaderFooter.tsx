import type { PropsHeaderFooter } from '../type';
import { useStyles } from '../style';
import { Box} from '@mantine/core';
import React from 'react';

export default function HeaderFooter({ children, justify, isHovering }: PropsHeaderFooter) {

    const { classes } = useStyles();

    const customStyle = {
        justifyContent : justify,
    };

    return (
        <Box
            className={classes.headerFooter}
            sx={customStyle}>
            {isHovering && children}
        </Box>
    );
}
