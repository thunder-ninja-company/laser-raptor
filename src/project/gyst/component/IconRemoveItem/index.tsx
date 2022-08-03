import { GystAppContext, IconSize } from 'gyst/constant';
import { IconTrash } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconRemoveItem({ id, itemId }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.removeItem(itemId);

    return (
        <IconTrash
            className={classes.iconRemoveItem}
            onClick={handleClick}
            size={IconSize.small}
            stroke={2}
            id={id} />
    );
}
