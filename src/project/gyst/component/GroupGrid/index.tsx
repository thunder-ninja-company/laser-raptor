import { Box } from "@mantine/core";
import { GroupPanel } from "gyst/component";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function GroupGrid({ id, value }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.groupGrid}>
            {value.groupPanels.map((panel, index) => (
                <GroupPanel
                    key={`group-panel-${panel.id}-item-${index}`}
                    value={panel}
                />
            ))}
        </Box>
    );
}
