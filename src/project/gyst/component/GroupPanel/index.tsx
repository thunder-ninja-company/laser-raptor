import { GroupPanelItem, LandingZone } from "gyst/component";
import { Box } from "@mantine/core";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function GroupPanel({ value: { id, groupPanelItems } }: Props) {
    const { classes } = useStyles();

    return (
        <Box id={id} className={classes.groupPanel}>
            {`GP - ${id}`}

            <LandingZone id={`lz-${id}-0`} />

            {groupPanelItems.map((item, index) => (
                <>
                    <GroupPanelItem
                        key={`gp-${id}-item-${item.id}`}
                        value={item}
                    />
                    <LandingZone id={`lz-${id}-${index + 1}`} />
                </>
            ))}
        </Box>
    );
}
