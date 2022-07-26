import { initialDragItem, initialDragPanel } from "gyst/component/DragGrid/constant";
import type { DragGridDTO } from "gyst/component/DragGrid/type";
import { AppShell, Grid, MantineProvider } from "@mantine/core";
import { AppHeader, AppBody, DragGrid } from "gyst/component";
import { GystAppContext, ProjectName } from "gyst/constant";
import { insertPanel, insertItem } from "gyst/component/DragGrid/logic";
import type { GystAppContextDTO, ListPosition } from "gyst/type";
import { selectDragGrid } from "gyst/selector";
import { useAppDispatch } from 'core/hooks';
import { useSelector } from "react-redux";
import { copyObject } from "gyst/shared";
import { useStyles } from "./style";
import type { Props } from "./type";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import slice from "gyst/slice";

const {
    actions : {
        updateGroupGridValue,
    },
} =  slice;


export default function AppRoot({ id }: Props) {

    const { classes } = useStyles();

    const dragGrid = useSelector(selectDragGrid);

    useEffect(() => {
    }, [dragGrid]);

    const dispatch = useAppDispatch();

    const handleChange = (value: DragGridDTO) => {
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
        debugger;
        console.log(`handleRemovePanel ${panelId}`);
    };

    const handleRemoveItem = (itemId: string) : void => {
        debugger;
        console.log(`handleRemovePanel ${itemId}`);
    };

    const handleToggleItem = (itemId: string) : void => {
        debugger;
        console.log(`handleRemovePanel ${itemId}`);
    };

    const context : GystAppContextDTO = {
        addNewItem  : handleAddNewItem,
        addNewPanel : handleAddNewPanel,

        removePanel : handleRemovePanel,
        removeItem  : handleRemoveItem,

        toggleItem : handleToggleItem,
        onHelp     : handleHelp,
    };

    return (
        <GystAppContext.Provider value={context}>
            <MantineProvider
                emotionOptions={{ key: ProjectName }}
                withNormalizeCSS={true}
                withGlobalStyles={true}
            >
                <AppShell
                    header={<AppHeader id={`app-header-${id}`} />}
                    navbarOffsetBreakpoint="sm"
                    asideOffsetBreakpoint="sm"
                    className={classes.appRoot}
                    fixed={true}
                >
                    <AppBody id={`app-body-${id}`}>
                        <Grid>
                            <Grid.Col span={12}>
                                <DragGrid
                                    dragGrid={{...dragGrid}}
                                    onChange={handleChange}
                                    key={nanoid()} />
                            </Grid.Col>
                        </Grid>
                    </AppBody>
                </AppShell>
            </MantineProvider>
        </GystAppContext.Provider>
    );
}
