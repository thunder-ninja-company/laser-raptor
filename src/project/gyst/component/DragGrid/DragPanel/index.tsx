import { DragSource, IconDuplicatePanel, IconRemovePanel, IconAddItem } from 'gyst/component';
import { Menu, Box, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import LandingZone from '../LandingZone';
import type { Props } from './type';
import { useStyles } from './style';
import DragItem from '../DragItem';
import React from 'react';
import HeaderFooter from './component/HeaderFooter';

export default function DragPanel({ dragPanel }: Props) {

    const { classes } = useStyles();

    const { id : panelId, items } = dragPanel;

    const {
        hovered : isHovering,
        ref     : refHover,
    } = useHover();

    return (
        <Box
            className={classes.groupPanel}
            ref={refHover}
            id={panelId}>
            <DragSource panelId={panelId}>
                <HeaderFooter
                    isHovering={isHovering}
                    justify='right'>
                    <div className={classes.hoverBar} />
                    <Menu style={{ paddingTop : '8px'}}>
                        <Menu.Item>
                            <IconRemovePanel
                                panelId={panelId} />
                                <Text>
                                {'test'}
                                </Text>

                        </Menu.Item>
                        <Menu.Item>
                            <IconDuplicatePanel
                                panelId={panelId} />
                        </Menu.Item>
                    </Menu>
                </HeaderFooter>

                <DragItem
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
                            panelId={panelId}
                            type='item'
                            dragItem={dragItem} />
                        <LandingZone
                            panelId={panelId}
                            index={index + 1}
                            type='panel' />
                    </React.Fragment>
                ))}

                <HeaderFooter
                    isHovering={isHovering}
                    justify='left'>
                    <IconAddItem
                        id={`add-item-tail-${dragPanel.id}`}
                        position='tail'
                        panelId={panelId} />
                </HeaderFooter>
            </DragSource>
        </Box>
    );
}
