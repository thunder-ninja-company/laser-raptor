import { initialDragItem, initialDragPanel } from 'gyst/component/DragGrid/constant'
import type { DragDropState, DragGridContextDTO, Props } from './type'
import { HTML5Backend } from 'react-dnd-html5-backend'
import KeyValueList from 'gyst/component/KeyValueList'
import type { DragItemDTO } from './DragItem/type'
import { IconAddPanel } from 'gyst/component'
import type { ListPosition } from 'gyst/type'
import { DragGridContext } from './constant'
import { Box, Grid } from '@mantine/core'
import { DndProvider } from 'react-dnd'
import LandingZone from './LandingZone'
import { useStyles } from './style'
import DragPanel from './DragPanel'
import { nanoid } from 'nanoid'
import Logic from './logic'

export default function DragGrid({ dragGrid, onChange } : Props) {

    const { classes } = useStyles()

    const duplicatePanel = (panelId : string) : void => {

        const newDragGrid = Logic.duplicatePanel(dragGrid, panelId, nanoid())

        onChange(newDragGrid)
    }

    const duplicateItem = (itemId : string) : void => {

        const newDragGrid = Logic.duplicateItem(dragGrid, itemId, nanoid())

        onChange(newDragGrid)
    }

    const removePanel = (panelId : string) : void => {

        const newDragGrid = Logic.removePanel(dragGrid, panelId)

        onChange(newDragGrid)
    }

    const removeItem = (itemId : string) : void => {

        const newDragGrid = Logic.removeItem(dragGrid, itemId)

        onChange(newDragGrid)
    }

    const toggleItem = (itemId : string) : void => {

        const newDragGrid = Logic.toggleItem(dragGrid, itemId)

        onChange(newDragGrid)
    }

    const addNewPanel = (position : ListPosition) => {

        const newPanel = Logic.newDragPanelDTO();

        const newDragGrid = Logic.insertPanel(dragGrid, position, newPanel)

        onChange(newDragGrid)
    }

    const changeItem = (item : DragItemDTO) : void => {

        const newDragGrid = Logic.changeItem(dragGrid, item)

        onChange(newDragGrid)
    }

    const addNewItem = (position : ListPosition, panelId : string) => {

        const newItem = {
            ...initialDragItem,
            id : nanoid(),
        }

        const newDragGrid = Logic.insertItem(dragGrid, panelId, position, newItem)

        onChange(newDragGrid)
    }

    const dragDrap = (dragDropState : DragDropState) => {

        const newDragGrid = Logic.changeDragDrop(dragGrid, dragDropState)

        onChange(newDragGrid)
    }

    const context : DragGridContextDTO = {
        duplicatePanel,
        duplicateItem,
        removePanel,
        addNewPanel,
        removeItem,
        toggleItem,
        changeItem,
        addNewItem,
        dragDrap,
        dragGrid,
    }

    return (
        <DragGridContext.Provider value={context}>
            <DndProvider backend={HTML5Backend}>
                <KeyValueList
                    id='debug-primary-list'
                    value={dragGrid} />
                <Box
                    className={classes.dragGrid}
                    id={dragGrid.id}>
                    <Grid>
                        <>
                            {dragGrid.panels.map((dragPanel, dragPanelIndex) =>
                                <Grid.Col
                                    key={`gp-${dragPanel.id}-${dragPanelIndex}`}
                                    xs={12}
                                    md={6}
                                    lg={4}>
                                    <LandingZone
                                        index={dragPanelIndex}
                                        panelId={null}
                                        type='grid'>
                                        <DragPanel
                                            dragPanelIndex={dragPanelIndex} />
                                    </LandingZone>
                                </Grid.Col>
                            )}
                            <Grid.Col
                                xs={12}
                                md={6}
                                lg={4}>
                                <LandingZone
                                    index={dragGrid.panels.length}
                                    panelId={null}
                                    type='grid'>
                                    <IconAddPanel
                                        position='tail' />
                                </LandingZone>
                            </Grid.Col>
                        </>
                    </Grid>
                </Box>
            </DndProvider>
        </DragGridContext.Provider>

    )
}
