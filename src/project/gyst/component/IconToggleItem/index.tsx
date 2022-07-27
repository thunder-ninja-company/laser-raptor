
import { GystAppContext, ItemIconSize } from 'gyst/constant';
import { IconCheckbox } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconToggleItem({ id, itemId }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.toggleItem(itemId);

    return (
        <IconCheckbox
            className={classes.iconToggleItem}
            onClick={handleClick}
            stroke={2}
            size={ItemIconSize}
            id={id} />
    );
}