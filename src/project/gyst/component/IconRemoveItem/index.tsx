import { IconTrash } from '@tabler/icons'
import { IconSize } from 'gyst/constant'
import type { Props } from './type'
import { useStyles } from './style'

// eslint-disable-next-line no-empty-pattern
export default function IconRemoveItem({ } : Props) {

    const { classes } = useStyles()

    return (
        <IconTrash
            className={classes.iconRemoveItem}
            size={IconSize.small}
            stroke={1} />
    )
}
