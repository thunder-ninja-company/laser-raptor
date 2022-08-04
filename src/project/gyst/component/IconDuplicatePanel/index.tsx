import { GystAppContext, IconSize } from 'gyst/constant';
import { IconCopy } from '@tabler/icons';
import type { Props } from "./type";
import { useStyles } from './style';
import { useContext } from 'react';


export default function IconDuplicatePanel({ panelId }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.duplicatePanel(panelId);

    return (
        <IconCopy
            className={classes.iconDuplicatePanel}
            onClick={handleClick}
            size={IconSize.small}
            stroke={2} />
    );
}
