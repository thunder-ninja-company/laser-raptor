import { LessProminentIconColor } from 'gyst/constant'
import { createStyles } from '@mantine/core'

export const useStyles = createStyles((_theme, {
    isHovering,
} : {
    isHovering : boolean;
}) => ({
    iconAddItem : {
        marginLeft : _theme.spacing.xs + 2,
        cursor     : 'pointer',
        color      : isHovering
            ? LessProminentIconColor
            : '#fff',
    },
}))
