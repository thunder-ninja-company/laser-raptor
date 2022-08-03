
import { GystAppContext } from 'gyst/constant';
import { IconCheckbox } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';
import { Box } from '@mantine/core';

export default function IconToggleItem({ id, itemId, size }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.toggleItem(itemId);

    return (
        <Box className={classes.iconToggleItem}>
            <IconCheckbox
                onClick={handleClick}
                stroke={2}
                size={size}
                id={id} />
        </Box>
    );
}
