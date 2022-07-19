import { Box } from "@mantine/core";
import { useDrag } from 'react-dnd'
import { useStyles } from "./style";
import type { Props } from "./type";

export default function GroupPanelItem({ value: { id, value } }: Props) {
    const { classes } = useStyles();

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
		// "type" is required. It is used by the "accept" specification of drop targets.
    type: 'BOX',
		// The collect function utilizes a "monitor" instance (see the Overview for what this is)
		// to pull important pieces of state from the DnD system.
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

    return (
        <Box id={id} className={classes.groupPanelItem} ref={dragPreview}>
            {value} {"GroupPanelItem "}
            {isDragging && 'IS DRAGGING'}
            <div role="Handle" ref={drag} />
        </Box>
    );
}
