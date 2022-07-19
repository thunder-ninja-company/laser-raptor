import { Box } from "@mantine/core";
import { useDrop } from "react-dnd";
import { useStyles } from "./style";

import type { Props } from "./type";

// https://react-dnd.github.io/react-dnd/docs/api/hooks-overview
export default function LandingZone({ id }: Props) {
    const { classes } = useStyles();

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'BOX',
        // Props to collect
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        })
      }))


    return (
        <Box id={String(id)} className={classes.root} ref={drop}
        style={{ backgroundColor: isOver ? 'red' : 'pink' }}>
            {`LZ - ${id}`}

            {canDrop ? 'Release to drop' : 'Drag a box here'}
        </Box>
    );
}
