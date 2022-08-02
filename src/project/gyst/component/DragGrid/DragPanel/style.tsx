import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    groupPanel: {
        // border: '1px solid #ccc',
        display: 'flex',
        width : '100%'
    },

    leftColumn : {
        alignItems : 'center',
        paddingLeft: '40px',
        paddingRight: '40px',
    },

    rightColumn : {
        // alignItems : 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


    },
}));
