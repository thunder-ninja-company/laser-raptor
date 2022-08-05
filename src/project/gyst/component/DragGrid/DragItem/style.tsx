import { createStyles, CSSObject } from "@mantine/core";
import { LessProminentIconColor } from "gyst/constant";



export const useStyles = createStyles((theme, { isHovering } : { isHovering : boolean;}) => ({
    dragItem : {
        cursor : 'grab',
    },

    largeInput : {
        width : '100%',

        input : {
            backgroundColor : 'transparent',
            outline         : 'none',
            resize          : 'none',
            border          : 'none',
            height          : 'inherit',
            fontSize        : '2rem',
        }
    },

    smallInput : {
        width : '100%',

        input : {
            backgroundColor : 'transparent',
            outline         : 'none',
            resize          : 'none',
            border          : 'none',
            height          : 'inherit',
            fontSize        : '1rem',
        }
    },

    iconToggleItem: {
        marginLeft : theme.spacing.md,
        cursor     : 'pointer',
        color      : isHovering ? ' #aaa' : '#fff',
    },

    columnLeft : {
        alignItems : 'center',
        display    : 'flex',
    },

    columnMiddle : {
        alignItems : 'center',
        display    : 'flex',

    },

    columnRight : {
        alignItems : 'center',
        display    : 'flex',
        width      : '50px',
    },
    itemMenu : {
        button : {
            color : isHovering ? ' #aaa' : '#fff',
        }
    }
}));
