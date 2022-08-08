import { IconHelp as TablerIconHelp } from '@tabler/icons';
import { GystAppContext, IconSize } from 'gyst/constant';
import type { Props } from './type';
import { useStyles } from './style';
import { useContext } from 'react';

export default function IconHelp({ id } : Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => context?.onHelp(id);

    return (
        <TablerIconHelp
            className={classes.iconHelp}
            onClick={handleClick}
            size={IconSize.large}
            stroke={1}
            id={id} />
    );
}
