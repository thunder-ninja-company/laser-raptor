import { Paper, useMantineTheme } from "@mantine/core";
import React from "react";

import type { Props } from "./type";

const SectionBox: React.FC<Props> = ({ children }: Props) => {
    const theme = useMantineTheme();

    return (
        <Paper
            p="xl"
            radius={theme.radius.sm}
            withBorder={true}
            shadow={theme.shadows.sm}
        >
            {children}
        </Paper>
    );
};

export default SectionBox;
