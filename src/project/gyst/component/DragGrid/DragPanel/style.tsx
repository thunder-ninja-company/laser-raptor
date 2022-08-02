import { createStyles } from "@mantine/core";

export const useStyles = createStyles(_theme => ({
    groupPanel: {
        display: 'flex',
        width : '100%'
    },

    leftColumn : {
        alignItems: 'center',
    },

    frameSpacer : {
        height : '50px',
        border : '1px solid #0d0',
        alignItems: 'center',
        display: 'flex',

    },

    headerGrid : {

    },

    rightColumn : {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
}));
