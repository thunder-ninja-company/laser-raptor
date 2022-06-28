import { Aside, Divider, MediaQuery, Text } from "@mantine/core";
import React from "react";

import type { Props } from "./type";

const HelpSection: React.FC<Props> = ({}: Props) => {
    return (
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
                <Text size="xl">{"Context Documentation"}</Text>
                <Divider my="sm" variant="dashed" />
            </Aside>
        </MediaQuery>
    );
};

export default HelpSection;
