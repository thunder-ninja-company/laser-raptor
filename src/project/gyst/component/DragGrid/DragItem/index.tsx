import { initialDragDropState } from "../constant";
import type { DragDropState } from "../type";
import type { DragItemProps } from "./type";
import { Box, Text } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";

export default function DragItem({ value, panelId }: DragItemProps) {
    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "BOX",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item : {
            ...initialDragDropState,
            dragPanelId : panelId,
            dragItemId  : value.id,
        } as DragDropState,
        end(item, _monitor){
            console.log(`DragItem has finished dragging ${value.id}`);
            console.log(item)
        }
    }));

    return (
        <Box id={id} className={classes.dragItem} ref={dragPreview}>
            <div role="Handle" ref={drag}>
                <Text>
                    <>
                        {value} {`Item ${isDragging ? '[DRAG]' : ''}`}
                    </>
                </Text>
            </div>
        </Box>
    );
}
