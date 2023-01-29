import type { CSSObject } from '@mantine/core';

// styles object is compatible with every Mantine component
export const shareThisStyle : CSSObject = {
    border : '1px solid #eee',
    color  : '#999',

    '&:hover' : {
        backgroundColor : '#0f3',
    },
};
