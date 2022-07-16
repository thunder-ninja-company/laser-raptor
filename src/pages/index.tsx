import { ThumbUp } from "tabler-icons-react";

import { Button, Paper, Text } from "@mantine/core";

import React, { useState } from "react";
import "component/MainApp";
import {
    AppShell,
    Header,
    Footer,
    MediaQuery,
    Burger,
    useMantineTheme,
    Title,
} from "@mantine/core";
import MainApp from "component/MainApp";

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
            fixed={true}
            header={
                <Header height={160} p="md">
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                    >
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

                        <Title>{"Foremans Log"}</Title>
                        <Paper
                            shadow="sm"
                            radius="xl"
                            p="md"
                            withBorder
                            sx={{
                                textAlign: "center",
                                width: "200px",
                                "&:hover": {
                                    background: theme.colors.gray[1],
                                },
                            }}
                        >
                            <Title order={4}>{"Total Hours"}</Title>
                            <Title order={2}>{"35"}</Title>
                            <Text>{"4 workers"}</Text>
                        </Paper>
                        <div>
                            <Button
                                leftIcon={<ThumbUp size={34} />}
                                color="green"
                                size="xl"
                            >
                                Confirm
                            </Button>
                        </div>
                    </div>
                </Header>
            }
            footer={
                <Footer height={60} p="md">
                    {"2022 Acme Construction"}
                </Footer>
            }
        >
            <MainApp />
        </AppShell>
    );
}
