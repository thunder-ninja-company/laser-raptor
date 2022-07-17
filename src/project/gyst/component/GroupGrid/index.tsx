import { Box } from "@mantine/core";

import GroupPanel from "project/gyst/component/GroupPanel";

import type { Props } from "./type";

const groupPanelList = [
    {
        id: "group-panel-item-1",
        items: [
            {
                id: "group-panel-item-1-item-1",
                content: "This is a Title",
            },
            {
                id: "group-panel-item-1-item-2",
                content: "Drag and drop these",
            },
            {
                id: "group-panel-item-1-item-3",
                content: "Add some more!",
            },
        ],
    },
];

export default function GroupGrid({ id }: Props) {
    return (
        <Box id={id} sx={{ padding: "20px", margin: "20px" }}>
            {groupPanelList.map((item, index) => (
                <GroupPanel
                    id={`group-panel-${item.id}`}
                    key={`group-panel-${item.id}-item-${index}`}
                    items={item.items}
                />
            ))}
        </Box>
    );
}
