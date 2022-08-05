import { IconRemoveItem, IconDuplicateItem } from 'gyst/component';
import { DragGridContext, initialDragDropState } from '../constant';
import { Box, Grid, TextInput, Textarea } from '@mantine/core';
import { useDebouncedCallback } from 'use-debounce';
import type { DragDropState } from '../type';
import type { DragItemProps, FormValues } from './type';
import { IconPencil, IconSquareCheck, IconSquare, IconCheckbox } from '@tabler/icons';
import { useHover } from '@mantine/hooks';
import { IconSize, GystAppContext } from 'gyst/constant';
import { useForm } from '@mantine/form';
import { Menu } from '@mantine/core';
import { useStyles } from './style';
import { useDrag } from 'react-dnd';
import { ChangeEventHandler, useContext } from 'react';

export default function DragItem({ dragItem, panelId, position }: DragItemProps) {

    console.log(`DragItem(${dragItem.value})`);

    const {
        hovered : isHovering,
        ref     : refHover,
    } = useHover();

    const {
        hovered : isHoveringCheckbox,
        ref     : refHoverCheckbox,
    } = useHover();

    const {
        status : itemStatus,
        value  : itemValue,
        id     : itemId,
    } = dragItem;

    const { classes } = useStyles({
        isHovering,
        itemStatus,
        position,
    });

    const form = useForm<FormValues>({
        initialValues : {
            value : itemValue,
            email : '',
        },
    });

    const context = useContext(DragGridContext);
    const gystAppContext = useContext(GystAppContext);

    const [{ isDragging : _ }, drag, dragPreview] = useDrag(() => ({
        type: 'item',
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        }),
        item : {
            ...initialDragDropState,
            dragPanelId : panelId,
            dragItemId  : itemId,
        } as DragDropState,
        end(item, _monitor){
            console.log(`DragItem has finished dragging ${itemId}`);
            console.log(item)
        }
    }));
    const fieldText = form.getInputProps('value').value;

    const textboxInputIcon =
        fieldText.length === 0
            ? <IconPencil />
            : null;

    console.log(dragItem);

    const debounced = useDebouncedCallback(_value => {

        console.log(`useDebouncedCallback(${_value})`);

        const newItem = {
            ...dragItem,
            value : form.getInputProps('value').value,
        };

        console.log('newItem:', newItem);

        context?.onChangeItem(newItem);
    },
        // delay in ms
        2000
    );

    const handleChangeValue = (evt: { currentTarget: { value: any; }; }) => {

        const value = evt.currentTarget.value;

        console.log(`form.setFieldValue('value', '${value}');`)

        form.setFieldValue('value', value);

        debounced(value);
    };

    const handleBlur = (_evt: React.FormEvent<HTMLInputElement>) => {
        console.log(`Blur ${dragItem.id}`)
    };

    const handleRemoveItem = () => {
        gystAppContext?.removeItem(itemId);
    };

    const handleDuplicateItem = () => {
        gystAppContext?.duplicateItem(itemId);
    };

    const handleToggleItem = () => gystAppContext?.toggleItem(itemId);

    return (
        <Box
            className={classes.dragItem}
            ref={dragPreview}>
            <div
                role='Handle'
                ref={drag}>
                <div ref={refHover}>
                    <Grid gutter={0}>
                        <Grid.Col
                            className={classes.columnLeft}
                            span={1}>
                            <Box
                                className={classes.iconToggleItem}
                                onClick={handleToggleItem}
                                ref={refHoverCheckbox}>
                                {itemStatus === 'checked'
                                    ? <IconCheckbox stroke={1} />
                                    : isHoveringCheckbox
                                        ? <IconSquareCheck
                                            stroke={1} />
                                        : <IconSquare
                                            stroke={1} />
                                }
                            </Box>
                        </Grid.Col>
                        <Grid.Col
                            className={classes.columnMiddle}
                            span={10}>
                            <Textarea
                                {...form.getInputProps('value')}
                                onChange={handleChangeValue}
                                autosize={true}
                                minRows={1}
                                className={
                                    position === 'head'
                                        ? classes.largeInput
                                        : classes.smallInput
                                } />

                        </Grid.Col>
                        <Grid.Col
                            className={classes.columnRight}
                            span={1}>
                            <Menu className={classes.itemMenu}>
                                <Menu.Item
                                    onClick={handleDuplicateItem}
                                    icon={
                                        <IconDuplicateItem
                                            id={itemId} />
                                    }>
                                    {'Duplicate'}
                                </Menu.Item>
                                <Menu.Item
                                    onClick={handleRemoveItem}
                                    icon={
                                        <IconRemoveItem
                                            id={`remove-item-${itemId}`} />
                                    }>
                                    {'Remove'}
                                </Menu.Item>

                            </Menu>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </Box>
    );
}
