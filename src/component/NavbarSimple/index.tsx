import { Navbar } from '@mantine/core';
import React, { useState } from 'react';
import { Logout, SwitchHorizontal } from 'tabler-icons-react';

import { data } from './constant';
import { useStyles } from './style';

export default function NavbarSimple({}) {
    const { classes, cx } = useStyles();
    const [active, setActive] = useState('Billing');

    const links = data.map((item) => (
        <a
            className={cx(classes.link, {
                [classes.linkActive]: item.label === active
            })}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}>
            <item.icon className={classes.linkIcon} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <Navbar height={700} width={{ sm: 300 }} p="md">
            <Navbar.Section grow>{links}</Navbar.Section>

            <Navbar.Section className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <SwitchHorizontal className={classes.linkIcon} />
                    <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <Logout className={classes.linkIcon} />
                    <span>Logout</span>
                </a>
            </Navbar.Section>
        </Navbar>
    );
}
