import { DragSource, IconDuplicatePanel, IconRemovePanel, IconAddItem } from 'gyst/component';
import HeaderFooter from './component/HeaderFooter';
import type { DragGridContextDTO } from '../type';
import { DragGridContext } from '../constant';
import { Menu, Box } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import LandingZone from '../LandingZone';
import type { Props } from './type';
import { useStyles } from './style';
import { useContext } from 'react';
import DragItem from '../DragItem';
import React from 'react';

export default function DragPanel({ dragPanelIndex } : Props) {

    const {
        duplicatePanel, removePanel, dragGrid,
    } = useContext(DragGridContext) as DragGridContextDTO;

    const panel = dragGrid.panels[dragPanelIndex];

    const { id : panelId, items } = panel;

    console.log('DragPanel dragPanel is now: ', panel);

    const {
        hovered : isHovering,
        ref     : refHover,
    } = useHover();

    const { classes } = useStyles({ isHovering });

    const handleDuplicatePanel = () => duplicatePanel(panelId);

    const handleRemovePanel = () => removePanel(panelId);

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

                {items.map((dragItem, dragItemIndex) => {
                    return (
                        dragItemIndex === 0
                            ? <LandingZone
                                index={dragItemIndex}
                                panelId={panelId}
                                type='panel'>
                                {`HEAD landing-zone-${dragItem.value}-${dragItemIndex}`}
                                <DragItem
                                    key={`landing-zone-${dragItem.value}-${dragItemIndex}`}
                                    dragPanelIndex={dragPanelIndex}
                                    dragItemIndex={dragItemIndex}
                                    position='head'
                                    panelId={panelId} />
                            </LandingZone>
                            : <LandingZone
                                key={`ITEM landing-zone-${dragItem.value}-${dragItemIndex + 1}`}
                                index={dragItemIndex + 1}
                                panelId={panelId}
                                type='panel'>
                                {`ITEM landing-zone-${dragItem.value}-${dragItemIndex + 1}`}
                                <DragItem
                                    dragPanelIndex={dragPanelIndex}
                                    dragItemIndex={dragItemIndex}
                                    panelId={panelId}
                                    position='item' />
                            </LandingZone>
                    );
                }
                )}
                <LandingZone
                    index={items.length}
                    panelId={panelId}
                    type='panel' />
                <HeaderFooter
                    justify='left'>
                    <IconAddItem
                        id={`add-item-tail-${panelId}`}
                        isHovering={isHovering}
                        panelId={panelId}
                        position='tail' />
                </HeaderFooter>
            </DragSource>
        </Box>
    );
}
