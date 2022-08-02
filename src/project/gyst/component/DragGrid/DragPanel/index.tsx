import LandingZone from '../LandingZone';
import type { Props } from './type';
import { Menu, Box, Grid, Divider } from '@mantine/core';
import { IconHandMove } from '@tabler/icons';
import { useStyles } from './style';
import DragItem from '../DragItem';
import React from 'react';
import {
    DragSource, IconDuplicatePanel,
    IconRemovePanel, IconAddItem,
} from 'gyst/component';

export default function DragPanel({ dragPanel }: Props) {

    const { classes } = useStyles();

    const { id : panelId, items } = dragPanel;

    return (
        <Box
            className={classes.groupPanel}
            id={panelId}>
            <DragSource panelId={panelId}>
                <Grid gutter={0}>
                    <Grid.Col
                        className={classes.leftColumn}
                        span={11}>
                        <Divider
                            labelPosition='center'
                            variant='dashed'
                            my='xs'
                            label={
                                <>
                                    <IconHandMove size={12} />
                                    <Box ml={5}>
                                        {'Drag'}
                                    </Box>
                                </>
                            }
                        />
                    </Grid.Col>
                    <Grid.Col
                        className={classes.rightColumn}
                        span={1}>
                        <Menu>
                            <Menu.Item>
                                <IconRemovePanel panelId={panelId} />
                            </Menu.Item>
                            <Menu.Item>
                                <IconDuplicatePanel panelId={panelId} />
                            </Menu.Item>
                        </Menu>
                    </Grid.Col>
                </Grid>



                <DragItem
                    key={`drag-item-${items[0].id}-hack-${items[0].value}-${items[0].status}`}
                    type='head'
                    panelId={panelId}
                    dragItem={items[0]} />

                <LandingZone
                    panelId={panelId}
                    type='panel'
                    index={0} />

                {items
                    .filter((_, itemIndex) => itemIndex !== 0) // skip first element
                    .map((dragItem, index) => (
                    <React.Fragment
                        key={dragItem.id}>
                        <DragItem
                            key={`drag-item-${dragItem.id}-hack-${dragItem.value}-${dragItem.status}`}
                            panelId={panelId}
                            type='item'
                            dragItem={dragItem} />
                        <LandingZone
                            panelId={panelId}
                            index={index + 1}
                            type='panel' />
                    </React.Fragment>
                ))}
                <IconAddItem
                    id={`add-item-tail-${dragPanel.id}`}
                    position='tail'
                    panelId={panelId} />
                    </DragSource>
            </Box>

    );
}
