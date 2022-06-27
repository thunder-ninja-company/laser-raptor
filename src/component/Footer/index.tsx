import { ActionIcon, Anchor, Group } from "@mantine/core";
import React from "react";
import {
    Box,
    BrandInstagram,
    BrandTwitter,
    BrandYoutube,
} from "tabler-icons-react";
import { useStyles } from "./style";
import type { FooterCenteredProps } from "./type";
import { Footer as MantineFooter } from "@mantine/core";

export default function Footer({ links }: FooterCenteredProps) {
    const { classes } = useStyles();

    const items = links.map((link) => (
        <Anchor<"a">
            color="dimmed"
            key={link.label}
            href={link.link}
            sx={{ lineHeight: 1 }}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));

    return (
        <MantineFooter height={100} p="md">
            <div className={classes.inner}>
                <Group className={classes.links}>{items}</Group>
                <Group spacing={0} position="right" noWrap>
                    <ActionIcon size="lg">
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </div>
        </MantineFooter>
    );
}
