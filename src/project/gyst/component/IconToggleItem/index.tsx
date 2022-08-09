import { IconCheckbox } from '@tabler/icons'
import { IconSize } from 'gyst/constant'
import { useStyles } from './style'

export default function IconToggleItem() {

    const { classes } = useStyles()

    return (
        <IconCheckbox
            className={classes.iconToggleItem}
            size={IconSize.small}
            stroke={1} />
    )
}
