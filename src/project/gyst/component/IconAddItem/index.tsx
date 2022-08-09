import { GystAppContext, IconSize } from 'gyst/constant'
import { IconPlus } from '@tabler/icons'
import type { Props } from './type'
import { useContext } from 'react'
import { useStyles } from './style'

export default function IconAddItem({
    id,
    panelId : _panelId,
    position : _position,
    isHovering,
} : Props) {

    const { classes } = useStyles({ isHovering })

    const _context = useContext(GystAppContext)

    const handleClick = () => {

        // context?.(position, panelId);
    }

    return (
        <IconPlus
            className={classes.iconAddItem}
            onClick={handleClick}
            size={IconSize.small}
            stroke={1}
            id={id} />
    )
}
