import { LessProminentIconColor } from 'gyst/constant';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
    iconAddPanel : {
        marginLeft : theme.spacing.xs * 2,
        marginTop  : theme.spacing.md * 3 + 5,
        cursor     : 'pointer',
        color      : LessProminentIconColor,
    },
}));
