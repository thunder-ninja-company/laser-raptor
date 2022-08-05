import type { PropsHeaderFooter } from "./type";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((_theme, { isHovering } : { isHovering : boolean; }) => ({
    dragPanel: {
        display: 'flex',
        width : '100%'
    },

    leftColumn : {
        alignItems: 'center',
    },

    hoverBar : {
        // borderTop : `1px solid ${isHovering ? ' #aaa' : '#fff'}`,
        borderBottom : `1px solid ${isHovering ? ' #aaa' : '#fff'}`,
        marginRight: '8px',
        marginTop : '9px',
        width : '100%',
        height : '4px',
    },

    panelMenu : {
        paddingTop : '8px',

        button : {
            color : isHovering ? ' #aaa' : '#fff',
        }
    }
}));
