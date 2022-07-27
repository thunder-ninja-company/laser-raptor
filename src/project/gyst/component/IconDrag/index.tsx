import { GystAppContext, ItemIconSize } from 'gyst/constant';
import { IconCopy } from '@tabler/icons';
import type { Props } from "./type";
import { useStyles } from './style';
import { useContext } from 'react';


export default function IconDrag({ panelId }: Props) {

    const { classes } = useStyles();

    // const context = useContext(GystAppContext);
    // const handleClick = () => context?.duplicatePanel(panelId);
    // onClick={handleClick}

    return (
        <IconCopy
            className={classes.IconDrag}
            size={ItemIconSize}
            stroke={2} />
    );
}
