import type { DragGridDTO } from "gyst/component/DragGrid/type";
import { AppShell, Grid, MantineProvider } from "@mantine/core";
import { AppHeader, AppBody, DragGrid } from "gyst/component";
import { GystAppContext, ProjectName } from "gyst/constant";
import { insertItem } from "gyst/component/DragGrid/logic";
import type { GystAppContextDTO } from "gyst/type";
import { selectDragGrid } from "gyst/selector";
import { useAppDispatch } from 'core/hooks';
import { useSelector } from "react-redux";
import { copyObject } from "gyst/shared";
import { useStyles } from "./style";
import type { Props } from "./type";
import { useEffect } from "react";
import { nanoid } from "nanoid";
import foo from "gyst/slice";

export default function AppRoot({ id }: Props) {

    const { classes } = useStyles();

    const dragGrid = useSelector(selectDragGrid);

    useEffect(() => {
    }, [dragGrid]);

    const dispatch = useAppDispatch();

    const handleChange = (value: DragGridDTO) => {
        debugger;

        dispatch(foo.actions.updateGroupGridValue(value));
    }


    const handleRemovePanel = (actionId : string) : void => {
        debugger;
    };

    const handleRemoveItem = (actionId : string) : void => {
        debugger;
    };

    const handleAddPanel = (actionId : string) : void => {
        debugger;
    };

    const handleAddItem = (actionId : string) : void => {
        const copyGrid = copyObject(dragGrid) as DragGridDTO;

        insertItem(copyGrid, 0);

        dispatch(foo.actions.updateGroupGridValue(copyGrid));
    };


    const context : GystAppContextDTO = {
        onRemovePanel : handleRemovePanel,
        onRemoveItem  : handleRemoveItem,
        onAddPanel    : handleAddPanel,
        onAddItem     : handleAddItem,
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
