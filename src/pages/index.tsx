import { AppShell, MantineProvider } from "@mantine/core";
import AppHeader from "project/gyst/component/AppHeader";
import AppBody from "project/gyst/component/AppBody";
import GistApp from "project/gyst";

const id = "project-gyst";

export default function AppShellDemo() {
    return (
        <MantineProvider
            emotionOptions={{ key: "gist" }}
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
                    asdf
                    <GistApp id="gist-app" />
                </AppBody>
            </AppShell>
        </MantineProvider>
    );
}
