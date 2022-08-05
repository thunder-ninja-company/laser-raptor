import { DragSource, IconDuplicatePanel, IconRemovePanel, IconAddItem } from 'gyst/component';
import { Menu, Box, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useContext } from 'react';
import LandingZone from '../LandingZone';
import type { Props } from './type';
import { useStyles } from './style';
import DragItem from '../DragItem';
import React from 'react';
import HeaderFooter from './component/HeaderFooter';
import { GystAppContext } from 'gyst/constant';

export default function DragPanel({ dragPanel }: Props) {

    const { id : panelId, items } = dragPanel;

    const {
        hovered : isHovering,
        ref     : refHover,
    } = useHover();

    const { classes } = useStyles({ isHovering });

    const gystAppContext = useContext(GystAppContext);

    const handleDuplicatePanel = () => {
        gystAppContext?.duplicatePanel(panelId);
    }
    const handleRemovePanel = () => {
        gystAppContext?.removePanel(panelId);
    }

    return (
        <Box
            className={classes.dragPanel}
            ref={refHover}
            id={panelId}>
            <DragSource panelId={panelId}>
                <HeaderFooter
                    justify='right'>
                    <div className={classes.hoverBar} />
                    <Menu className={classes.panelMenu}>
                        <Menu.Item
                            onClick={handleDuplicatePanel}
                            icon={
                                <IconDuplicatePanel id={panelId} />
                            }>
                            {'Duplicate All'}
                        </Menu.Item>
                        <Menu.Item
                            onClick={handleRemovePanel}
                            icon={
                                <IconRemovePanel id={panelId} />
                            }>
                            {'Remove All'}
                        </Menu.Item>
                    </Menu>
                </HeaderFooter>
                <LandingZone
                    panelId={panelId}
                    type='panel'
                    index={0}>
                    <DragItem
                        position='head'
                        panelId={panelId}
                        dragItem={items[0]} />
                </LandingZone>
                {items
                    .filter((_, itemIndex) => itemIndex !== 0) // skip first element
                    .map((dragItem, index) =>
                        <LandingZone
                            key={dragItem.id}
                            panelId={panelId}
                            index={index + 1}
                            type='panel'>
                            <DragItem
                                panelId={panelId}
                                position='item'
                                dragItem={dragItem} />
                        </LandingZone>
                )}
                <LandingZone
                    panelId={panelId}
                    type='panel'
                    index={items.length} />
                <HeaderFooter
                    justify='left'>
                    <IconAddItem
                        isHovering={isHovering}
                        id={`add-item-tail-${dragPanel.id}`}
                        position='tail'
                        panelId={panelId} />
                </HeaderFooter>
            </DragSource>
        </Box>
    );
}
