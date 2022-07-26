import { GystAppContext, LargeIconSize } from 'gyst/constant';
import { IconPlus } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconAddPanel({ id, position }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.addNewPanel(position);

    return (
        <IconPlus
            className={classes.iconAddPanel}
            onClick={handleClick}
            stroke={2}
            size={LargeIconSize}
            id={id} />
    );
}
