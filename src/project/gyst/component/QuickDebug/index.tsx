import { useStyles } from './style'
import type { Props } from './type'
import { Box } from '@mantine/core'
import React from 'react'

export default function QuickDebug({ value  } : Props) {

    const { classes } = useStyles()

    return (
        <Box classNames={classes.quickDebug}>
            {value}
        </Box>
    )
}
