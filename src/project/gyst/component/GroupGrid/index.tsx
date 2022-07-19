import { Box } from "@mantine/core";
import { GroupPanel, LandingZone } from "gyst/component";
import { useStyles } from "./style";
import type { Props } from "./type";

// https://codesandbox.io/s/zqwz5n5p9x?file=/src/index.js:1716-1755

export default function GroupGrid({ value : { id, groupPanels } }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.groupGrid}>
            <LandingZone id={`lz-gg-${id}-0`} />

            {groupPanels.map((panel, index) => (
                <>
                    <GroupPanel
                        key={`gp-${panel.id}`}
                        value={panel}
                    />
                    <LandingZone id={`lz-gg-${id}-${index + 1}`} />
                </>

            ))}
        </Box>
    );
}
