import { Avatar, Paper, Title, useMantineTheme } from "@mantine/core";

export default function Profile() {
    const theme = useMantineTheme();

    return (
        <Paper
            p="xl"
            radius={theme.radius.sm}
            withBorder={true}
            shadow={theme.shadows.sm}
        >
            <Title>{"Avatar"}</Title>
            <Avatar
                component="a"
                style={{ boxShadow: "2px 10px 20px rgba(0,0,0,.2)" }}
                src="static/media/src/assets/image/profile.png"
                href="/public-profile"
                size={256}
                radius={128}
            />
        </Paper>
    );
}
