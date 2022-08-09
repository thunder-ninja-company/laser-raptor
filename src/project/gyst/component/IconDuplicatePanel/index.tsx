import { IconCopy } from '@tabler/icons'
import {IconSize } from 'gyst/constant'
import { useStyles } from './style'

export default function IconDuplicatePanel() {

    const { classes } = useStyles()

    return (
        <IconCopy
            className={classes.iconDuplicatePanel}
            size={IconSize.small}
            stroke={1} />
    )
}
