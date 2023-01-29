import { Grid, Paper, useMantineTheme } from '@mantine/core';
import React from 'react';

import type { Props } from './type';

const ProjectTimeline : React.FC<Props> = () => {

    const theme = useMantineTheme();

    return (
        <Paper
            p='xl'
            radius={theme.radius.sm}
            withBorder={true}
            shadow={theme.shadows.sm}>
            <h1>
                {'Project TImeline v1.o'}
            </h1>
            <Grid>
                <Grid.Col span={4}>{'1'}</Grid.Col>
                <Grid.Col span={4}>{'2'}</Grid.Col>
                <Grid.Col span={4}>{'3'}</Grid.Col>
            </Grid>
        </Paper>
    );
};

export default ProjectTimeline;
