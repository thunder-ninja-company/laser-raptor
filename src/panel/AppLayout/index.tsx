import React, { useState } from 'react';
import TopMenuLogo from "assets/image/ninja.png";
import {
    AppShell,
    Navbar,
    Header,
    // Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
    Title,
    ScrollArea,
} from "@mantine/core";
import { Sidebar } from "./Sidebar";
import { Footer } from "component";
import { MainLinks } from "~src/project/constant";

export default function AppShellDemo() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
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
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 200, lg: 300 }}>
                        <Title order={4}>
                            Navbar Title
                        </Title>
                        <Sidebar />

                        <img
                            src={TopMenuLogo}
                            style={{
                                width: "34px",
                                height: "34px",
                                marginRight: "14px",
                            }}
                        />

                    <Navbar.Section mt="xs">
                        {'Header with logo?'}
                    </Navbar.Section>

                    <Navbar.Section mx="-xs" px="xs">
                        {'SECTION content here'}
                    </Navbar.Section>
                    <Navbar.Section mx="-xs" px="xs">
                        {'SECTION content here'}
                    </Navbar.Section>
                    <Navbar.Section grow={true} mx="-xs" px="xs">
                        {'Filler area maybe'}
                    </Navbar.Section>

                    <Navbar.Section>
                            {'footer with user?'}
                    </Navbar.Section>

                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                    <Aside
                        p="md"
                        hiddenBreakpoint="sm"
                        width={{ sm: 200, lg: 300 }}
                    >
                        <Text>APPSIDEBAR sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={<Footer links={MainLinks} />}
            header={
                <Header height={70} p="md">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <MediaQuery
                            smallerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <img
                                src={TopMenuLogo}
                                style={{
                                    width: "34px",
                                    height: "34px",
                                    marginRight: "14px",
                                }}
                            />
                        </MediaQuery>
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: "none" }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Title>{"Towncall"}</Title>
                    </div>
                </Header>
            }
        >
            <Text>Resize app to see responsive navbar in action</Text>
        </AppShell>
    );
}
