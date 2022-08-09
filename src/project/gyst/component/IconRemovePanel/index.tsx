import { IconTrash } from '@tabler/icons'
import { IconSize } from 'gyst/constant'
import { useStyles } from './style'

export default function IconRemovePanel() {

    const { classes } = useStyles()

    return (
        <IconTrash
            className={classes.iconRemovePanel}
            size={IconSize.small}
            stroke={1} />
    )
}
