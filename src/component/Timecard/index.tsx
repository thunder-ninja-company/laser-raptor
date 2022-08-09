import { Grid, Title, Paper, Image, Button } from '@mantine/core'
import { Road, Plus } from 'tabler-icons-react'
import type { Props } from './type'
import React from 'react'


const cellStyle = {
}

const Timecard : React.FC<Props> = () => {
    return (
        <Grid
            sx={{
                paddingTop : '40px'
            }}>
            <Grid.Col
                sx={cellStyle}
                span={4}>
                <Title order={2}>{'Alex Worker'}</Title>
                <Image
                    radius='md'
                    sx={{
                        maxWidth : '160px',
                    }}
                    src='https://thumbs.dreamstime.com/b/woman-construction-worker-8899982.jpg'
                    alt='Random unsplash image'/>
            </Grid.Col>
            <Grid.Col
                sx={cellStyle}
                span={4}>
                <div style={{ marginTop : '12px' }}>
                    <Paper
                        shadow='sm'
                        sx={{
                            marginBotton : '20px',
                            minWidth     : '300px',
                            minHeight    : '100px',
                            border       : '1px solid black',
                            borderRadius : 'md',
                            padding      : '20px',
                        }}>
                        <Road size={48} />
                        <Title order={3}>{'Road Paving'}</Title>
                    </Paper>
                </div>
                <div style={{ marginTop : '12px' }}>
                    <Button
                        leftIcon={<Plus size={34} />}
                        size='md'>
                        {'Add Job'}
                    </Button>
                </div>
            </Grid.Col>
            <Grid.Col
                sx={{
                    padding : '40px',
                }}
                span={4}>
                <Title order={4}>{'Total Hours'}</Title>
                <Title order={2}>{'5'}</Title>
            </Grid.Col>
        </Grid>
    )
}

export default Timecard
