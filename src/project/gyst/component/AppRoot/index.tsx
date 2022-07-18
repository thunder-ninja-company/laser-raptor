import { AppShell, MantineProvider } from "@mantine/core";
import { AppHeader, AppBody, GroupGrid } from "gyst/component";
import { useSelector } from "react-redux";
import { selectGroupGrid } from "gyst/selector";
import { useStyles } from "./style";
import type { Props } from "./type";
import { PROJECT_NAME } from 'gyst/constant';

export default function AppRoot({ id }: Props) {
    const { classes } = useStyles();

    const groupGrid = useSelector(selectGroupGrid);

    return (
        <MantineProvider
            emotionOptions={{ key: PROJECT_NAME }}
            withNormalizeCSS={true}
            withGlobalStyles={true}
        >
            <AppShell
                header={<AppHeader id={`app-header-${id}`} />}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed={true}
            >
                <AppBody id={`app-body-${id}`}>
                    <GroupGrid id={`group-grid-1-${id}`} value={groupGrid} />

                </AppBody>
            </AppShell>
        </MantineProvider>
    );
}
