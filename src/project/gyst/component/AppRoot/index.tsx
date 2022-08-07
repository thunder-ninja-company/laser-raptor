import { initialDragItem, initialDragPanel } from "gyst/component/DragGrid/constant";
import { AppHeader, AppBody, DragGrid, KeyValueList } from "gyst/component";
import type { DragItemDTO } from "gyst/component/DragGrid/DragItem/type";
import type { GystAppContextDTO, ListPosition } from "gyst/type";
import type { DragGridDTO } from "gyst/component/DragGrid/type";
import { AppShell, Grid, MantineProvider } from "@mantine/core";
import { GystAppContext, ProjectName } from "gyst/constant";
import { selectDragGrid } from "gyst/selector";
import { useAppDispatch } from 'core/hooks';
import { useSelector } from "react-redux";
import { copyObject } from "gyst/shared";
import { useStyles } from "./style";
import type { Props } from "./type";
import { nanoid } from "nanoid";
import slice from "gyst/slice";
import {
    toggleItem, duplicateItem, removePanel,
    insertPanel, insertItem, removeItem,
    duplicatePanel, removeEmptyPanels,
} from "gyst/component/DragGrid/logic";

const {
    actions : {
        updateGroupGridValue,
    },
} =  slice;


export default function AppRoot({ id }: Props) {

    const { classes } = useStyles();

    const dragGrid = useSelector(selectDragGrid);

    console.log('AppRoot Drag grid is now: ', dragGrid);

    const dispatch = useAppDispatch();

    const handleChange = (value: DragGridDTO) => {
        debugger;

        dispatch(updateGroupGridValue(value));
    }

    const handleAddNewPanel = (position : ListPosition) => {

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        const newPanel = {
            ...initialDragPanel,
            id: nanoid(),
            items: [{
                ...initialDragItem,
                id: nanoid(),
            }]
        };

        switch(position) {
            case 'head':
                insertPanel(copyGrid, 0, newPanel);
                break;

            case 'tail':
                insertPanel(copyGrid, copyGrid.panels.length, newPanel);
                break;

            default:
                throw Error(`Unknown actionId ${position}`);
        }

        dispatch(updateGroupGridValue(copyGrid));
    };

    const handleAddNewItem = (position : ListPosition, panelId : string) => {
        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        const newItem = {
            ...initialDragItem,
            id: nanoid(),
        }

        insertItem(copyGrid, panelId, position, newItem);

        dispatch(updateGroupGridValue(copyGrid));
    };

    const handleHelp = (id : string) : void => {
        console.log(`handleHelp(${id})`);
        debugger;
    };

    const handleRemovePanel = (panelId: string) : void => {
        console.log(`handleRemovePanel ${panelId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        removePanel(copyGrid, panelId);

        dispatch(updateGroupGridValue(copyGrid));

    };

    const handleRemoveItem = (itemId: string) : void => {
        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        console.log(`handleRemoveItem ${itemId}`);

        removeItem(copyGrid, itemId);

        removeEmptyPanels(copyGrid);

        dispatch(updateGroupGridValue(copyGrid));
    };


    const handleToggleItem = (itemId: string) : void => {
        console.log(`handleToggleItem ${itemId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        toggleItem(copyGrid, itemId);

        dispatch(updateGroupGridValue(copyGrid));
    };

    const handleChangeItem = (item: DragItemDTO) : void => {
        debugger;
        console.log(`handleChangeItem ${item.id}`);

        debugger;

        // const copyGrid = copyObject(dragGrid) as DragGridDTO;

        // changeItem(copyGrid, item);

        // dispatch(updateGroupGridValue(copyGrid));
    };


    const handleDuplicateItem = (itemId: string) : void => {
        console.log(`handleDuplicateItem ${itemId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        duplicateItem(copyGrid, itemId);

        dispatch(updateGroupGridValue(copyGrid));
    };

    const handleDuplicatePanel = (panelId: string) : void => {
        console.log(`handleDuplicatePanel ${panelId}`);

        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        duplicatePanel(copyGrid, panelId);

        dispatch(updateGroupGridValue(copyGrid));
    };

    const context : GystAppContextDTO = {
        duplicatePanel : handleDuplicatePanel,
        duplicateItem  : handleDuplicateItem,
        addNewPanel    : handleAddNewPanel,
        removePanel    : handleRemovePanel,
        addNewItem     : handleAddNewItem,
        removeItem     : handleRemoveItem,
        toggleItem     : handleToggleItem,
        changeItem     : handleChangeItem,
        onHelp         : handleHelp,
    };

    const exampleTheme = {
        fontFamily : "'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue'",
    };

    return (
        <GystAppContext.Provider value={context}>
            <MantineProvider
                emotionOptions={{ key: ProjectName }}
                withNormalizeCSS={true}
                withGlobalStyles={true}
                theme={exampleTheme}>
                <AppShell
                    header={<AppHeader id={`app-header-${id}`} />}
                    navbarOffsetBreakpoint="sm"
                    asideOffsetBreakpoint="sm"
                    className={classes.appRoot}
                    fixed={true}>
                    <AppBody id={`app-body-${id}`}>
                        <Grid>
                            <Grid.Col span={12}>
                                {/* Idea for keyvalue list is to type hint all tyoes and have custom handlers for each
                                eacy to use everywhere and locally customizable for weird code */}
                                <KeyValueList value={dragGrid} />
                                <DragGrid
                                    onChange={handleChange}
                                    dragGrid={dragGrid} />
                            </Grid.Col>
                        </Grid>
                    </AppBody>
                </AppShell>
            </MantineProvider>
        </GystAppContext.Provider>
    );
}
