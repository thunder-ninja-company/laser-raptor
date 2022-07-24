import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    dragItem: {
        backgroundColor: theme.colors.orange,
        width: "300px",
        cursor: 'grab',
    },
}));
