import { Input, InputWrapper } from '@mantine/core';
import React from 'react';

import type { Props } from './type';

export default function Component({
    placeholderMessage,
    isRequired = false,
    title = 'trololo',
    errorMessage,
    description,
    id,
}: Props) {
    return (
        <InputWrapper
            description={description}
            required={isRequired}
            error={errorMessage}
            label={title}
            id={id}>
            <Input
                placeholder={placeholderMessage}
                id={id} />
        </InputWrapper>
    );
}
