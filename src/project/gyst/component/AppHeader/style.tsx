import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    appHeader: {
        backgroundColor: theme.colors.cyan,
        padding: "20px",
        margin: "20px",
        display: "flex",
        justifyContent: "space-between",
    },
}));
