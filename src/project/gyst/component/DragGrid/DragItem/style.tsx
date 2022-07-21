import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    dragItem: {
        backgroundColor: theme.colors.orange,
        height: "500,",
        width: "300px",

        padding: "20px",
        margin: "20px",
        cursor: 'grab',
    },
}));
