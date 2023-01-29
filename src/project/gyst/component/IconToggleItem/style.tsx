import { createStyles } from '@mantine/core';
import { LessProminentIconColor } from 'gyst/constant';

export const useStyles = createStyles(_theme => ({
    iconToggleItem : {
        marginLeft : _theme.spacing.md,
        cursor     : 'pointer',
        color      : LessProminentIconColor,
    },
}));
