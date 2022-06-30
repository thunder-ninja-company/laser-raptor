import { useState } from "react";
import TopMenuLogo from "assets/image/ninja.png";
import {
    AppShell,
    Navbar,
    Header,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Title,
    Space,
} from "@mantine/core";
import { Footer, NavbarSimple, HelpSection, SectionHeader, SectionBox } from "component";
import { MainLinks } from "~src/project/constant";
import Profile from "./Profile";

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const handleSetOpened = (opened: boolean) => {
        setOpened(opened);
    };

    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            header={<SectionHeader opened={opened} onSetOpened={handleSetOpened} />}
            navbar={<NavbarSimple opened={opened} />}
            aside={<HelpSection id="help-section" />}
            footer={<Footer links={MainLinks} />}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed={false}
        >
            <Title>
                {'Project Mayhem Home'}
            </Title>
            <Space h="lg" />
            <Profile />
        </AppShell>
    );
}
