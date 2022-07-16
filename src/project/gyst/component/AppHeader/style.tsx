import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    inner: {
        height: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },

    burger: {
        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: 100,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: "uppercase",
        fontSize: 13,
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[1]
                : theme.colors.gray[6],
        padding: `7px ${theme.spacing.sm}px`,
        fontWeight: 700,
        borderBottom: "2px solid transparent",
        transition: "border-color 100ms ease, color 100ms ease",

        "&:hover": {
            color: theme.colorScheme === "dark" ? theme.white : theme.black,
            textDecoration: "none",
        },
    },
}));
