import { Paper, useMantineTheme } from '@mantine/core'
import type { Props } from './type'
import React from 'react'


const SectionBox : React.FC<Props> = ({ children } : Props) => {

    const theme = useMantineTheme()

    return (
        <Paper
            shadow={theme.shadows.sm}
            radius={theme.radius.sm}
            withBorder={true}
            p='xl'>
            {children}
        </Paper>
    )
}

export default SectionBox
