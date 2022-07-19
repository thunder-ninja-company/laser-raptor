import { Box } from "@mantine/core";
import { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useStyles } from "./style";

import type { Props } from "./type";

// https://react-dnd.github.io/react-dnd/docs/api/hooks-overview
export default function LandingZone({ id }: Props) {
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
        <Box id={String(id)} className={classes.root} ref={dropRef}>
            {`LZ - ${id}`}
        </Box>
    );
}
