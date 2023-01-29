import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
    inner : {
        display        : 'flex',
        justifyContent : 'space-between',
        alignItems     : 'center',
        padding        : `${theme.spacing.md}px ${theme.spacing.md}px`,

        [theme.fn.smallerThan('sm')] : {
            flexDirection : 'column',
        },
    },

    links : {
        [theme.fn.smallerThan('sm')] : {
            marginTop    : theme.spacing.lg,
            marginBottom : theme.spacing.sm,
        },
    },
}));
