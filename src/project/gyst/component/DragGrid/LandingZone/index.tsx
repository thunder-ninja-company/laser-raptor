import type { Props } from "./type";
import { DragGridContext } from "../constant";
import type { DragDropState } from "../type";
import { Box } from "@mantine/core";
import { useStyles  } from "./style";
import { useDrop } from "react-dnd";
import { useContext } from "react";

export default function LandingZone({ index, panelId, type, children }: Props) {

    const { classes } = useStyles();

    const context = useContext(DragGridContext);

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: type === 'panel'
            ? 'item'
            : 'panel',

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

    const background = isOver
        ? { backgroundColor: "red" }
        : { backgroundColor: '' };


    const border = type === 'panel'
        ? { border: "1px solid #0f0" }
        : { border: "1px solid #0ff" };

    return (
        <Box
            p="md"
            className={classes.landingZone}
            style={{
                ...background,
                ...border,
            }}
            ref={drop}
            id={id}>
            {children}
        </Box>
    );
}
