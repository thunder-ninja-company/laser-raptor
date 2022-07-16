import React, { useState } from "react";
import "component/MainApp";
import { AppShell, useMantineTheme } from "@mantine/core";
import MainApp from "component/MainApp";
import AppHeader from "project/gyst/component/AppHeader";
import AppBody from "~src/project/gyst/component/AppBody";

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed={true}
            header={<AppHeader id="app-header" />}
        >
            <AppBody id="app-body" />
        </AppShell>
    );
}
