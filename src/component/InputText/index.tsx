import { Input, InputWrapper } from "@mantine/core";

import type { Props } from "./type";

export const InputText: React.FC<Props> = ({
    placeholderMessage,
    isRequired = false,
    title = "trololo",
    description,
}: Props) => (
    // handle the new value from the input
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { value } = e.target;

    // };

    <InputWrapper description={description} required={isRequired} label={title}>
        <Input placeholder={placeholderMessage} />
    </InputWrapper>
);

export default InputText;
