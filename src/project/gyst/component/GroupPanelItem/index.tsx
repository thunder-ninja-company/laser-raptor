import { useStyles } from "./style";
import type { Props } from "./type";
import { Box } from "@mantine/core";
import { useDrag } from "react-dnd";
import type { DragSourceInfo } from "gyst/type";

export default function GroupPanelItem({ value: { id, value } }: Props) {
    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        // "type" is required. It is used by the "accept" specification of drop targets.
        type: "BOX",
        // The collect function utilizes a "monitor" instance (see the Overview for what this is)
        // to pull important pieces of state from the DnD system.
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item : {
            groupPanelItemId : id,
        } as DragSourceInfo,
        end(_item, _monitor){
            console.log(_item);
            debugger;
        }
    }));

    const handleClick = () => {
        console.log(id);
    };

    return (
        <Box id={id} className={classes.groupPanelItem} ref={dragPreview}>
            <div role="Handle" ref={drag} onClick={handleClick}>
                {value} {"GroupPanelItem "}
                {isDragging && "IS DRAGGING"}
            </div>
        </Box>
    );
}
