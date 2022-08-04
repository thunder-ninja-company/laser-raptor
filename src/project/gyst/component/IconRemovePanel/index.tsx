import { GystAppContext, IconSize } from 'gyst/constant';
import { IconTrash } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconRemovePanel({ panelId }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.removePanel(panelId);

    return (
        <IconTrash
            className={classes.iconRemovePanel}
            onClick={handleClick}
            size={IconSize.small}
            stroke={1} />
    );
}
