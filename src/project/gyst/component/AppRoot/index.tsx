import { AppShell, Grid, MantineProvider } from "@mantine/core";
import { AppHeader, AppBody, GroupGrid } from "gyst/component";
import { selectGroupGrid } from "gyst/selector";
import { ProjectName } from "gyst/constant";
import { useSelector } from "react-redux";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function AppRoot({ id }: Props) {
    const { classes } = useStyles();

    const groupGrid = useSelector(selectGroupGrid);

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
                className={classes.root}
                fixed={true}
            >
                <AppBody id={`app-body-${id}`}>
                    <Grid>
                        <Grid.Col span={12}>
                            <GroupGrid value={groupGrid}
                            />
                        </Grid.Col>
                    </Grid>
                </AppBody>
            </AppShell>
        </MantineProvider>
    );
}
