import { Box } from "@mantine/core";
import React from "react";

import type { Props } from "./type";

const InputForm: React.FC<Props> = ({ children }: Props) => {
    return (
        <Box sx={{ margin: "20px" }}>
            <form>{children}</form>
        </Box>
    );
};

export default InputForm;
