import { createStyles } from '@mantine/core';
import type { DragItemType, ItemStatus } from './type';

export const useStyles = createStyles((theme, {
    isHovering,
    itemStatus,
    position,
} : {
    isHovering : boolean;
    itemStatus : ItemStatus;
    position   : DragItemType;
}) => ({
    dragItem : {
        cursor : 'grab',
    },

    largeInput : {
        width : '100%',

        textarea : {
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

        textarea : {
            backgroundColor : 'transparent',
            outline         : 'none',
            resize          : 'none',
            border          : 'none',
            height          : 'inherit',
            fontSize        : '1rem',
        }
    },

    iconToggleItem : {
        paddingRight : theme.spacing.md,
        paddingTop   : (position === 'head'
            ? theme.spacing.xs
            : 6),
        cursor : 'pointer',
        color  : itemStatus === 'checked'
            ? '#000'
            : (isHovering ? ' #aaa' : '#fff'),
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
