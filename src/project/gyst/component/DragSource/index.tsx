import { GystAppContext, LargeIconSize } from 'gyst/constant';
import { IconAlarm  } from '@tabler/icons';
import type { Props } from "./type";
import { useStyles } from './style';



export default function DragSource({ panelId }: Props) {

    const { classes } = useStyles();

    // const context = useContext(GystAppContext);
    // const handleClick = () => context?.duplicatePanel(panelId);
    // onClick={handleClick}

    return (
        <IconAlarm
            className={classes.DragSource}
            size={LargeIconSize}
            stroke={2} />
    );
}
