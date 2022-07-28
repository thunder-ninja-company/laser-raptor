
import { Box } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";
import type { Props } from "./type";
import { initialDragDropState } from "gyst/component/DragGrid/constant";

export default function DragSource({ panelId }: Props) {

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

    // const context = useContext(GystAppContext);
    // const handleClick = () => context?.duplicatePanel(panelId);
    // onClick={handleClick}

    return (
        <Box
            className={classes.dragSource}
            ref={dragPreview}>

            <div role="Handle" ref={drag}>
                {'DRAGME'}

            </div>
        </Box>
    );
}
