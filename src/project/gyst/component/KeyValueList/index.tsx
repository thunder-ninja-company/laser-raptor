import { GystAppContext, IconSize } from 'gyst/constant';
import { IconPlus } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';
import { Box } from '@mantine/core';

export default function KeyValueList({}: Props) {

    const { classes } = useStyles();



    return (
        <Box className={classes.keyValueList}>
            {'asdfasdf'}
        </Box>
    );
}
