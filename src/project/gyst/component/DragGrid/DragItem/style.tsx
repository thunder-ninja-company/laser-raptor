import { createStyles, CSSObject } from "@mantine/core";



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

    columnLeft : {
        alignItems : 'center',
        display: 'flex',

    },

    columnRight : {
        alignItems : 'center',
        display: 'flex',
        width : '50px',
    },
    itemMenu : {
        button : {
            color : isHovering ? ' #aaa' : '#fff',
        }
    }
}));
