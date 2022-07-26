import { GystAppContext, ItemIconSize } from 'gyst/constant';
import { IconBellPlus } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function AddPanel({ id, position }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.addNewPanel(position);

    return (
        <IconBellPlus
            className={classes.addPanel}
            onClick={handleClick}
            stroke={2}
            size={ItemIconSize}
            id={id} />
    );
}
