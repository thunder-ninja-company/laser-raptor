import { initialDragDropState } from "../constant";
import type { DragDropState } from "../type";
import type { DragItemProps } from "./type";
import { Box, Text } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";

export default function DragItem({ dragItem, panelId }: DragItemProps) {
    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "BOX",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item : {
            ...initialDragDropState,
            dragPanelId : panelId,
            dragItemId  : dragItem.id,
        } as DragDropState,
        end(item, _monitor){
            console.log(`DragItem has finished dragging ${dragItem.id}`);
            console.log(item)
        }
    }));

    return (
        <Box className={classes.dragItem} ref={dragPreview}>
            <div role="Handle" ref={drag}>

                <Text>
                    {`Item ${dragItem.value} ${isDragging ? '[DRAG]' : ''}`}
                </Text>
            </div>
        </Box>
    );
}
