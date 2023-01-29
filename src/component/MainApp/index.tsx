import Timecard from 'component/Timecard';
import { Box } from '@mantine/core';
import type { Props } from './type';
import React from 'react';


const MainApp : React.FC<Props> = () => {
    return (
        <Box
            sx={{
                margin      : '20px',
                paddingLeft : '100px',
            }}>
            <Timecard />
            <Timecard />
            <Timecard />
        </Box>
    );
};

export default MainApp;
