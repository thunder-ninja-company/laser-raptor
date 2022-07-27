
import { Box, Text } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";
import { LargeIconSize } from "gyst/component";
import { IconAlarm  } from '@tabler/icons';
import type { Props } from "./type";

export default function DragSource({ panelId }: Props) {

    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "BOX",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item : {
            ...{},
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
                <IconAlarm
                    size={LargeIconSize}
                    stroke={2} />

            </div>
        </Box>
    );
}
