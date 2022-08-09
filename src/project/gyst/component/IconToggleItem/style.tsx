import { LessProminentIconColor } from 'gyst/constant';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
    iconToggleItem : {
        marginLeft : theme.spacing.md,
        cursor     : 'pointer',
        color      : LessProminentIconColor,
    },
}));
