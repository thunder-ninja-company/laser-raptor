import type { LandingZoneProps } from "./type";
import { DragGridContext } from "../constant";
import type { DragDropState } from "../type";
import { useStyles  } from "./style";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { Box, Chip, Text } from "@mantine/core";


export default function LandingZone({ index, panelId }: LandingZoneProps) {
    const { classes } = useStyles();

    const context = useContext(DragGridContext);

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "BOX",
        drop(dragDropState : DragDropState, _monitor) {

            if(!context) {
                console.error(`DragGridContext is not defined in LandingZone ${index}:${panelId}`);
                return;
            }

            context.onChange({
                ...dragDropState,
                dropPanelId : panelId,
                dropIndex : index,
            });
        },

        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
            isOverCurrent: monitor.isOver({ shallow: true }),
        }),
    }));

    const id = `${panelId}:${index}`;

    return (
        <Box
            style={{ backgroundColor: isOver ? "#9dA" : "#0d0" }}
            className={classes.landingZone}
            ref={drop}
            id={id}
        >
            <Chip value={id}>
                {`LZ - ${id}`}
            </Chip>
            <Text>
                {canDrop ? "Release to drop" : "Drag a box here"}
            </Text>
        </Box>
    );
}
