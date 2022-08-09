import { AppHeader, AppBody, DragGrid, KeyValueList } from 'gyst/component'
import { AppShell, Grid, MantineProvider, Dialog } from '@mantine/core'
import { selectDragGrid, selectIsDebugDialogOpen } from 'gyst/selector'
import type { DragGridDTO } from 'gyst/component/DragGrid/type'
import { GystAppContext, ProjectName } from 'gyst/constant'
import type { GystAppContextDTO } from 'gyst/type'
import { useAppDispatch } from 'core/hooks'
import { useSelector } from 'react-redux'
import { useStyles } from './style'
import type { Props } from './type'
import slice from 'gyst/slice'

const {
    actions : {
        updateGroupGridValue,
        toggleDebugDialog
    },
} =  slice

export default function AppRoot({ id } : Props) {

    const { classes } = useStyles()

    const dragGrid = useSelector(selectDragGrid)
    const isDebugDialogOpen = useSelector(selectIsDebugDialogOpen)

    console.log('AppRoot Drag grid is now: ', dragGrid)

    const dispatch = useAppDispatch()

    const handleChange = (value : DragGridDTO) => {
        debugger

        dispatch(updateGroupGridValue(value))
    }

    const handleHelp = (id : string) : void => {
        console.log(`handleHelp(${id})`)

        dispatch(toggleDebugDialog())
    }


    const context : GystAppContextDTO = {
        onHelp : handleHelp,
    }

    const exampleTheme = {
        fontFamily : '\'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\'',
    }

    const handleCloseDialog = () => {
        debugger
    }

    return (
        <GystAppContext.Provider value={context}>
            <MantineProvider
                emotionOptions={{ key : ProjectName }}
                withNormalizeCSS={true}
                withGlobalStyles={true}
                theme={exampleTheme}>
                <AppShell
                    header={<AppHeader id={`app-header-${id}`} />}
                    navbarOffsetBreakpoint='sm'
                    asideOffsetBreakpoint='sm'
                    className={classes.appRoot}
                    fixed={true}>
                    <AppBody id={`app-body-${id}`}>
                        <Dialog
                            onClose={handleCloseDialog}
                            opened={isDebugDialogOpen}>
                            <KeyValueList
                                id='drag-grid-data'
                                value={dragGrid} />
                        </Dialog>
                        <Grid>
                            <Grid.Col span={12}>
                                <DragGrid
                                    onChange={handleChange}
                                    dragGrid={dragGrid} />
                            </Grid.Col>
                        </Grid>
                    </AppBody>
                </AppShell>
            </MantineProvider>
        </GystAppContext.Provider>
    )
}
