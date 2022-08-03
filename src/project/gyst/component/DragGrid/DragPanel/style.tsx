import { createStyles } from "@mantine/core";

export const useStyles = createStyles(_theme => ({
    dragPanel: {
        display: 'flex',
        width : '100%'
    },

    leftColumn : {
        alignItems: 'center',
    },

    hoverBar : {
        borderTop : '1px solid #eee',
        borderBottom : '1px solid #eee',
        marginRight: '8px',
        marginTop : '9px',
        width : '100%',
        height : '4px',
    },

    headerFooter : {
        height : '20px',
        alignItems: 'center',
        display: 'flex',

    },
}));
