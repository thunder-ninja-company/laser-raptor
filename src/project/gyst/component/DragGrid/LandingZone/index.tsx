import type { LandingZoneProps } from "./type";
import { DragGridContext } from "../constant";
import type { DragDropState } from "../type";
import { useStyles  } from "./style";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { Box, Text } from "@mantine/core";


export default function LandingZone({ index, panelId, type }: LandingZoneProps) {

    const { classes } = useStyles();

    const context = useContext(DragGridContext);

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: type === 'panel' ? 'item' : 'panel',
        drop(dragDropState : DragDropState, _monitor) {
            context?.onChange({
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
    const defaultBackgroundColor = type === 'grid' ? '#934' : '#f3a';

    return (
        <Box
            className={classes.landingZone}
            style={isOver ? { backgroundColor: "red" } : { backgroundColor: defaultBackgroundColor }}
            ref={drop}
            id={id}>
            <Text size='xs'>
                {canDrop ? `(${id}) Release to drop` : `(${id}) Drag a box here`}
            </Text>
        </Box>
    );
}
