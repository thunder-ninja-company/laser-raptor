import { createStyles } from '@mantine/core'

export const useStyles = createStyles(theme => ({
    inner : {
        justifyContent : 'space-between',
        alignItems     : 'center',
        padding        : `${theme.spacing.md}px ${theme.spacing.md}px`,
        display        : 'flex',

        [theme.fn.smallerThan('sm')] : {
            flexDirection : 'column',
        },
    },

    links : {
        [theme.fn.smallerThan('sm')] : {
            marginBottom : theme.spacing.sm,
            marginTop    : theme.spacing.lg,
        },
    },
}))
