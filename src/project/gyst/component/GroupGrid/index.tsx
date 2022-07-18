import { Box } from "@mantine/core";
import GroupPanel from "project/gyst/component/GroupPanel";

import type { Props } from "./type";

export default function GroupGrid({ id, value }: Props) {
    debugger;


    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
            {'GROUP GRID'}

            {value.groupPanels.map((panel, index) => (
                <GroupPanel
                    id={`group-panel-${index}-${id}`}
                    key={`group-panel-${panel.id}-item-${index}`}
                    value={panel}
                />
            ))}

        </Box>
    );
}
