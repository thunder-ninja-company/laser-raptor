import { LessProminentIconColor } from 'gyst/constant';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles(_theme => ({
    iconAddItem: {
        marginLeft : _theme.spacing.xs * 2 + 4,
        cursor      : 'pointer',
        color       : LessProminentIconColor,
    },
}));
