import { GystAppContext, ItemIconSize } from 'gyst/constant';
import { IconPlus } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from 'gyst/component/style';

export default function IconAddItem({ id, panelId, position }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.addNewItem(position, panelId);

    return (
        <IconPlus
            className={classes.itemIconSize}
            onClick={handleClick}
            stroke={2}
            size={ItemIconSize}
            id={id} />
    );
}
