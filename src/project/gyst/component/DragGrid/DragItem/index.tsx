import { IconRemoveItem, IconDuplicateItem, IconToggleItem } from 'gyst/component';
import { DragGridContext, initialDragDropState } from '../constant';
import { Box, Grid, TextInput } from '@mantine/core';
import { useDebouncedCallback } from 'use-debounce';
import type { DragDropState } from '../type';
import type { DragItemProps, FormValues } from './type';
import { IconPencil } from '@tabler/icons';
import { useHover } from '@mantine/hooks';
import { IconSize } from 'gyst/constant';
import { useForm } from '@mantine/form';
import { Menu } from '@mantine/core';
import { useStyles } from './style';
import { useDrag } from 'react-dnd';
import { useContext } from 'react';

export default function DragItem({ dragItem, panelId, type }: DragItemProps) {

    console.log(`DragItem(${dragItem.value})`);

    const {
        hovered : isHovering,
        ref     : refHover,
    } = useHover();

    const { classes } = useStyles();

    const {
        id : itemId,
        value : itemValue,
    } = dragItem;

    const form = useForm<FormValues>({
        initialValues : {
            value : itemValue,
            email : '',
        },
    });

    const context = useContext(DragGridContext);

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
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

    const handleChangeValue = (evt: React.FormEvent<HTMLInputElement>) => {

        const value = evt.currentTarget.value;

        console.log(`form.setFieldValue('value', '${value}');`)

        form.setFieldValue('value', value);

        debounced(value);
    };

    const handleBlur = (_evt: React.FormEvent<HTMLInputElement>) => {
        console.log(`Blur ${dragItem.id}`)
    };

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
                            <IconToggleItem
                                id={`toggle-item-${itemId}`}
                                size={IconSize.small}
                                itemId={itemId} />
                        </Grid.Col>
                        <Grid.Col
                            className={classes.columnLeft}
                            span={10}>
                            <TextInput
                                {...form.getInputProps('value')}
                                className={
                                    type === 'head'
                                        ? classes.largeInput
                                        : classes.smallInput
                                }
                                onChange={handleChangeValue}
                                icon={textboxInputIcon}
                                onBlur={handleBlur} />
                        </Grid.Col>
                        <Grid.Col
                            className={classes.columnRight}

                            span={1}>
                                {isHovering &&
                                    <Menu>
                                        <Menu.Item>
                                            <IconDuplicateItem
                                                itemId={itemId} />
                                        </Menu.Item>
                                        <Menu.Item>
                                            <IconRemoveItem
                                                id={`remove-item-${itemId}`}
                                                itemId={itemId} />
                                        </Menu.Item>
                                    </Menu>
                                }
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </Box>
    );
}
