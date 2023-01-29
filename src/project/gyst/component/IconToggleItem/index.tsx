import { IconCheckbox } from '@tabler/icons';
import { IconSize } from 'gyst/constant';
import type { Props } from './type';
import { useStyles } from './style';

export default function IconToggleItem({ id } : Props) {

    const { classes } = useStyles();

    return (
        <IconCheckbox
            className={classes.iconToggleItem}
            size={IconSize.small}
            stroke={1}
            id={id} />
    );
}
