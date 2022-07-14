import { Box, Grid, Title, Text, Paper } from "@mantine/core";
import { Image } from "@mantine/core";
import { Road } from 'tabler-icons-react';

import React from "react";

import type { Props } from "./type";

// {  }: Props

const cellStyle = {
    // background: "red",
};

const InputForm: React.FC<Props> = () => {
    return (
        <Box
            sx={{
                margin: "20px",
                paddingLeft: '100px',
            }}
        >
            <Grid>
                <Grid.Col sx={cellStyle} span={4}>
                    <Title order={2}>{"Alex Worker"}</Title>
                    <Image
                        radius="md"
                        sx={{
                            maxWidth: "160px",
                        }}
                        src="https://thumbs.dreamstime.com/b/woman-construction-worker-8899982.jpg"
                        alt="Random unsplash image"
                    />
                </Grid.Col>
                <Grid.Col sx={cellStyle} span={4}>

                    <Paper
                        sx={{
                            marginBotton : '20px',
                            minWidth : '300px',
                            minHeight : '100px',
                            border: "1px solid black",
                            borderRadius: "md",
                            padding: "20px",
                        }}
                        shadow="sm">

                        <Road size={48} />
                        <Title order={3}>{"Road Paving"}</Title>

                        </Paper>

                        <Paper
                        sx={{
                            minWidth : '300px',
                            minHeight : '100px',
                            border: "1px solid black",
                            borderRadius: "md",
                            padding: "20px",
                        }}
                        shadow="sm">
                        {'asdfasdf'}
                        </Paper>
                </Grid.Col>
                <Grid.Col sx={cellStyle} span={4}>
                    <Title order={4}>{"Total Hours"}</Title>
                    <Title order={2}>{"35"}</Title>
                    <Text>{"4 workers"}</Text>
                </Grid.Col>
            </Grid>

            {"THIS IS MainApp Component"}



            <Title order={3}>{"Alex Worker"}</Title>


        </Box>
    );
};

export default InputForm;
