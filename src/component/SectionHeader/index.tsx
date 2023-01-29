import {
    Burger,
    Header,
    MediaQuery,
    Title,
    useMantineTheme,
} from '@mantine/core';
import TopMenuLogo from 'assets/image/ninja.png';
import React from 'react';

import type { Props } from './type';

const InputForm : React.FC<Props> = ({ opened, onSetOpened } : Props) => {
    const theme = useMantineTheme();

    return (
        <Header
            height={70}
            p='md'>
            <div
                style={{
                    display    : 'flex',
                    alignItems : 'center',
                    height     : '100%',
                }}>
                <MediaQuery
                    smallerThan='sm'
                    styles={{ display : 'none' }}>
                    <img
                        src={TopMenuLogo}
                        style={{
                            width       : '34px',
                            height      : '34px',
                            marginRight : '14px',
                        }}/>
                </MediaQuery>
                <MediaQuery
                    largerThan='sm'
                    styles={{ display : 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => onSetOpened(!opened)}
                        size='sm'
                        color={theme.colors.gray[6]}
                        mr='xl'/>
                </MediaQuery>

                <Title>{'Towncall Header'}</Title>
            </div>
        </Header>
    );
};

export default InputForm;
