import { LessProminentIconColor } from 'gyst/constant';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles(_theme => ({
    iconAddPanel: {
        cursor : 'pointer',
        color  : LessProminentIconColor,
        marginLeft : _theme.spacing.md * 2 + 2,
        marginTop : _theme.spacing.md * 3 + 5,
    },
}));
