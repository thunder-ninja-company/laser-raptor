import { BrandInstagram, BrandTwitter, BrandYoutube } from 'tabler-icons-react'
import { ActionIcon, Anchor, Group } from '@mantine/core'
import { Footer as MantineFooter } from '@mantine/core'
import type { FooterCenteredProps } from './type'
import { useStyles } from './style'
import React from 'react'

export default function Footer({ links } : FooterCenteredProps) {

    const { classes } = useStyles()

    const items = links.map(link => (
        <Anchor<'a'>
            onClick={event => event.preventDefault()}
            sx={{ lineHeight : 1 }}
            key={link.label}
            href={link.link}
            color='dimmed'
            size='sm'>
            {link.label}
        </Anchor>
    ))

    return (
        <MantineFooter
            height={100}
            p='md'>
            <div className={classes.inner}>
                <Group className={classes.links}>{items}</Group>
                <Group
                    spacing={0}
                    position='right'
                    noWrap={true}>
                    <ActionIcon size='lg'>
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size='lg'>
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size='lg'>
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </div>
        </MantineFooter>
    )
}
