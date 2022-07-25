import type { GystAppContextDTO } from 'gyst/type';
import { GystAppContext } from 'gyst/constant';
import { IconPlus } from '@tabler/icons';
import type { Props } from "./type";
import { useContext } from 'react';
import { useStyles } from './style';

export default function ActionIcon({ id }: Props) {

    const { classes } = useStyles();

    const context = useContext(GystAppContext);

    const handleClick = () => {
        if(context) {
            debugger;
            context.onAddItem123(id);
        } else {
            debugger;
        }
    }

    return (
        <IconPlus
            className={classes.actionIcon}
            onClick={handleClick}
            stroke={5}
            size={52}
            id={id} />
    );
}
