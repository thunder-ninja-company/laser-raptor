import { GystAppContext, IconSize } from 'gyst/constant';
import { IconPlus } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconAddItem({ id, panelId, position }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.addNewItem(position, panelId);

    return (
        <IconPlus
            className={classes.iconAddItem}
            onClick={handleClick}
            size={IconSize.small}
            stroke={2}
            id={id} />
    );
}
