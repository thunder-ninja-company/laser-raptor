import { GystAppContext, ItemIconSize } from 'gyst/constant';
import { IconX } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconRemovePanel({ id, panelId }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.removePanel(panelId);

    return (
        <IconX
            className={classes.iconRemovePanel}
            onClick={handleClick}
            stroke={2}
            size={ItemIconSize}
            id={id} />
    );
}
