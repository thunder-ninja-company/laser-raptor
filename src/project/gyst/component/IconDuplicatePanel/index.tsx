import { IconCopy } from '@tabler/icons'
import {IconSize } from 'gyst/constant'
import type { Props } from './type'
import { useStyles } from './style'

export default function IconDuplicatePanel({} : Props) {

    const { classes } = useStyles()

    return (
        <IconCopy
            className={classes.iconDuplicatePanel}
            size={IconSize.small}
            stroke={1} />
    )
}
