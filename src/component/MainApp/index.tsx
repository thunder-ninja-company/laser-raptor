import { Box, Grid, Title, Text, Paper, Image, Button } from "@mantine/core";
import { Road, Plus } from "tabler-icons-react";

import React from "react";

import type { Props } from "./type";
import Timecard from "component/Timecard";

// {  }: Props

const cellStyle = {
    // background: "red",
};

const MainApp: React.FC<Props> = () => {
    return (
        <Box
            sx={{
                margin: "20px",
                paddingLeft: "100px",
            }}
        >
            <Timecard />
            <Timecard />
            <Timecard />
        </Box>
    );
};

export default MainApp;
