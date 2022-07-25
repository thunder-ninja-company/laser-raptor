import { AppShell, Grid, MantineProvider } from "@mantine/core";
import { useAppDispatch, useAppSelector } from 'core/hooks';
import { AppHeader, AppBody, DragGrid } from "gyst/component";
import type { DragGridDTO } from "gyst/component/DragGrid/type";
import { selectDragGrid } from "gyst/selector";
import { ProjectName } from "gyst/constant";
import { useSelector } from "react-redux";
import { useStyles } from "./style";
import type { Props } from "./type";
import foo from "gyst/slice";
import { useEffect } from "react";
import { nanoid } from "nanoid";



export default function AppRoot({ id }: Props) {
    const { classes } = useStyles();

    const dragGrid = useSelector(selectDragGrid);

    useEffect(() => {
    }, [dragGrid]);

    const dispatch = useAppDispatch();

    debugger;

    const handleChange = (value: DragGridDTO) => {
        debugger;

        dispatch(foo.actions.updateGroupGridValue(value));
    }

    return (
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
                                key={nanoid()}
                                onChange={handleChange}
                                dragGrid={{...dragGrid}} />
                        </Grid.Col>
                    </Grid>
                </AppBody>
            </AppShell>
        </MantineProvider>
    );
}
