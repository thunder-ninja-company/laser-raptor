import { DragGridContext } from '../constant'
import type { DragDropState } from '../type'
import { useStyles  } from './style'
import { Box } from '@mantine/core'
import type { Props } from './type'
import { useDrop } from 'react-dnd'
import { useContext } from 'react'

export default function LandingZone({ index, panelId, type, children } : Props) {

    const { classes } = useStyles()

    const context = useContext(DragGridContext)

    const [{ isOver, _canDrop }, drop] = useDrop(() => ({
        accept : type === 'panel'
            ? 'item'
            : 'panel',

        drop(dragDropState : DragDropState, _monitor) {
            context?.changeItem({
                ...dragDropState,
                dropPanelId : panelId,
                dropIndex   : index,
            })
        },

        collect : monitor => ({
            isOver        : monitor.isOver(),
            canDrop       : monitor.canDrop(),
            isOverCurrent : monitor.isOver({ shallow : true }),
        }),
    }))

    return (
        <Box
            style={{ backgroundColor : isOver ? '#fdf' : '' }}
            className={classes.landingZone}
            ref={drop}
            p='md'>
            {children}
        </Box>
    )
}
