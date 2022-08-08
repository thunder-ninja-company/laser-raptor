import { IconTrash } from '@tabler/icons';
import { IconSize } from 'gyst/constant';
import type { Props } from './type';
import { useStyles } from './style';

export default function IconRemovePanel({ id } : Props) {

    const { classes } = useStyles();

    return (
        <IconTrash
            className={classes.iconRemovePanel}
            size={IconSize.small}
            stroke={1}
            id={id} />
    );
}
