import { GystAppContext, ItemIconSize } from 'gyst/constant';
import { IconHelp as TablerIconHelp } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function IconHelp({ id }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.onHelp(id);

    return (
        <TablerIconHelp
            className={classes.iconHelp}
            onClick={handleClick}
            stroke={1}
            size={ItemIconSize}
            id={id} />
    );
}
