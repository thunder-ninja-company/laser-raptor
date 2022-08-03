import { createStyles } from "@mantine/core";
import { LessProminentIconColor } from "gyst/constant";

export const useStyles = createStyles(_theme => ({
    iconAddItem: {
        marginLeft : '16px',
        cursor      : "pointer",
        color       : LessProminentIconColor,
    },
}));
