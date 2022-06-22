import { Box } from '@mantine/core';
import React from 'react';

import type { Props } from './type';

export default function Component({
    children
}: Props) {
    return (
        <Box sx={{ margin : '20px' }}>
            <form>
                {children}
            </form>
        </Box>
    );
}
