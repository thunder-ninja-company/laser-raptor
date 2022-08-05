import { IconCopy } from '@tabler/icons';
import {IconSize } from 'gyst/constant';
import type { Props } from "./type";
import { useStyles } from './style';

export default function IconDuplicateItem({ id }: Props) {

    const { classes } = useStyles();

    return (
        <IconCopy
            className={classes.iconDuplicateItem}
            size={IconSize.small}
            stroke={1}
            id={id} />
    );
}
