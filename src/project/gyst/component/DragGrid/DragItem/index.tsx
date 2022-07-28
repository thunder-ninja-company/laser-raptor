import { IconRemoveItem, IconDuplicateItem, IconToggleItem } from "gyst/component";
import { initialDragDropState } from "../constant";
import type { DragDropState } from "../type";
import type { DragItemProps } from "./type";
import { Box, Group, Text } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";


export default function DragItem({ dragItem, panelId }: DragItemProps) {

    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "item",
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
        <Box
            className={classes.dragItem}
            ref={dragPreview}>

            <div role="Handle" ref={drag}>
                <Text style={{
                    textDecoration: dragItem.status === 'checked' ? 'line-through' : 'none',
                    backgroundColor : isDragging ? '#0fd' : 'transparent',
                }}>
                    {`Item ${dragItem.value} ${isDragging ? '!!!!' : ''}`}
                </Text>
                <Group>
                    <IconRemoveItem
                        id={`remove-item-${dragItem.id}`}
                        itemId={dragItem.id} />
                    <IconToggleItem
                        id={`toggle-item-${dragItem.id}`}
                        itemId={dragItem.id} />
                    <IconDuplicateItem
                        itemId={dragItem.id} />
                </Group>
            </div>
        </Box>
    );
}
