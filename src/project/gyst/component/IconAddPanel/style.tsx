import { LessProminentIconColor } from 'gyst/constant';
import { createStyles } from '@mantine/core';

export const useStyles = createStyles(_theme => ({
    iconAddPanel: {
        cursor : 'pointer',
        color  : LessProminentIconColor,
    },
}));
