import { GroupGridContext } from "gyst/component/GroupGrid/constant";
import { useStyles } from "./style";
import type { Props } from "./type";
import { Box } from "@mantine/core";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import type { DragSourceInfo } from "gyst/type";

// https://react-dnd.github.io/react-dnd/docs/api/hooks-overview
export default function LandingZone({ index }: Props) {
    const { classes } = useStyles();

    const context = useContext(GroupGridContext);

    const [{ isOver, canDrop, isOverCurrent }, drop] = useDrop(() => ({
        accept: "BOX",
        drop({ groupPanelId, groupPanelItemId } : DragSourceInfo, _monitor) {
            context?.onChangeContextDTO(String(index), groupPanelId, groupPanelItemId);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }));

    return (
        <Box
            style={{ backgroundColor: isOver ? "red" : "pink" }}
            id={String(id)}
            className={classes.root}
            ref={drop}
        >
            {`LZ - ${id}`}

            {canDrop ? "Release to drop" : "Drag a box here"}
            <br />
            {`isOverCurrent (${isOverCurrent})`}
        </Box>
    );
}
