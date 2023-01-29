import { useBooleanToggle } from '@mantine/hooks';
import React, { useState } from 'react';
import { useStyles } from './style';
import type { DoubleHeaderProps } from './type';
import {
    Anchor, Burger, Container, Group, Header as MantineHeader,
} from '@mantine/core';

const HEADER_HEIGHT = 84;


export default function DoubleHeader({
    mainLinks,
    userLinks,
} : DoubleHeaderProps) {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes, cx } = useStyles();
    const [active, setActive] = useState(0);

    const mainItems = mainLinks.map((item, index) => (
        <Anchor<'a'>
            href={item.link}
            key={item.label}
            className={cx(classes.mainLink, {
                [classes.mainLinkActive] : index === active,
            })}
            onClick={event => {
                event.preventDefault();
                setActive(index);
            }}>
            {item.label}
        </Anchor>
    ));

    const _secondaryItems = userLinks.map(item => (
        <Anchor<'a'>
            href={item.link}
            key={item.label}
            onClick={event => event.preventDefault()}
            className={classes.secondaryLink}>
            {item.label}
        </Anchor>
    ));

    return (
        <MantineHeader height={HEADER_HEIGHT}>
            <Container className={classes.inner}>
                <div className={classes.links}>

                    {'asdfasdfasdf'}
                    <Group
                        spacing={0}
                        position='right'
                        className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </div>
                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size='sm'/>
            </Container>
        </MantineHeader>
    );
}
