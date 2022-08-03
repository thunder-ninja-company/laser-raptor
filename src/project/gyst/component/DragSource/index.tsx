import { initialDragDropState } from "gyst/component/DragGrid/constant";
import { Box } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";
import type { Props } from "./type";

export default function DragSource({ panelId, children }: Props) {

    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "panel",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item : {
            ...initialDragDropState,
            dragPanelId : panelId,
            dragItemId  : null,
        },
        end(item, _monitor){
            console.log(`DragItem has finished dragging ${panelId}`);
            console.log(item)
        }
    }));

    return (
        <Box
            className={classes.dragSource}
            ref={dragPreview}>
            <div role="Handle" ref={drag}>
                {children}
            </div>
        </Box>
    );
}
