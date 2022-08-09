import { GystAppContext, IconSize } from 'gyst/constant'
import { IconPlus } from '@tabler/icons'
import type { Props } from './type'
import { useStyles } from './style'
import { useContext } from 'react'

export default function IconAddPanel({ position : _position } : Props) {

    const { classes } = useStyles()

    const _context = useContext(GystAppContext)

    const handleClick = () =>  {
        // context?.addNewPanel(position);
    }

    return (
        <IconPlus
            className={classes.iconAddPanel}
            size={IconSize.large}
            onClick={handleClick}
            stroke={1} />
    )
}
