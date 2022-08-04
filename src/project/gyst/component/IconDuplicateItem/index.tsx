import { GystAppContext, IconSize } from 'gyst/constant';
import { IconCopy } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconDuplicateItem({ itemId }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.duplicateItem(itemId);

    return (
        <IconCopy
            className={classes.iconDuplicateItem}
            onClick={handleClick}
            size={IconSize.small}
            stroke={1} />
    );
}
