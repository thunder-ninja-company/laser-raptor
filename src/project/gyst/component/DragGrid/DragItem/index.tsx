import { DragGridContext, initialDragDropState } from '../constant';
import type { DragDropState, DragGridContextDTO } from '../type';
import { useStyles } from './style';
import type { DragItemProps, FormValues } from './type';
import { Box, Grid, Textarea } from '@mantine/core';
import { Menu } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useHover } from '@mantine/hooks';
import { IconSquareCheck, IconSquare, IconCheckbox } from '@tabler/icons';
import { IconRemoveItem, IconDuplicateItem } from 'gyst/component';
import { useContext } from 'react';
import { useDrag } from 'react-dnd';

export default function DragItem({
    dragItemIndex,
    dragPanelIndex,
    panelId,
    position,
}: DragItemProps) {
    const context = useContext(DragGridContext);

    const { duplicateItem, removeItem, toggleItem, dragGrid } =
        context as DragGridContextDTO;

    const dragItem = dragGrid.panels[dragPanelIndex].items[dragItemIndex];

    console.log('DragItem dragItem is now: ', dragItem);

    const { hovered: isHovering, ref: refHover } = useHover();

    const { hovered: isHoveringCheckbox, ref: refHoverCheckbox } = useHover();

    const { status: itemStatus, value: itemValue, id: itemId } = dragItem;

    const { classes } = useStyles({
        isHovering,
        itemStatus,
        position,
    });

    const form = useForm<FormValues>({
        initialValues: {
            value: itemValue,
            email: '',
        },
    });

    const [{ isDragging: _ }, drag, dragPreview] = useDrag(() => ({
        type: 'item',
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),

        item: {
            ...initialDragDropState,
            dragPanelId: panelId,
            dragItemId: itemId,
        } as DragDropState,
        end(item) {
            console.log(`DragItem has finished dragging ${itemId}`);
            console.log(item);
        },
    }));

    const handleChangeValue = (evt: { currentTarget: { value: any } }) => {
        debugger;

        const value = evt.currentTarget.value;

        console.log(`form.setFieldValue('value', '${value}');`);

        form.setFieldValue('value', value);

        const newItem = {
            ...dragItem,
            value,
        };

        context?.changeItem(newItem);
    };

    const handleRemoveItem = () => {
        removeItem(itemId);
    };

    const handleDuplicateItem = () => {
        duplicateItem(itemId);
    };

    const handleToggleItem = () => {
        debugger;

        toggleItem(itemId);
    };

    return (
        <Box className={classes.dragItem} ref={dragPreview}>
            <div role="Handle" ref={drag}>
                <div ref={refHover}>
                    <Grid gutter={0}>
                        <Grid.Col className={classes.columnLeft} span={1}>
                            <Box
                                className={classes.iconToggleItem}
                                onClick={handleToggleItem}
                                ref={refHoverCheckbox}
                            >
                                {itemStatus === 'checked' ? (
                                    <IconCheckbox stroke={1} />
                                ) : isHoveringCheckbox ? (
                                    <IconSquareCheck stroke={1} />
                                ) : (
                                    <IconSquare stroke={1} />
                                )}
                            </Box>
                        </Grid.Col>
                        <Grid.Col className={classes.columnMiddle} span={10}>
                            <Textarea
                                {...form.getInputProps('value')}
                                onChange={handleChangeValue}
                                autosize={true}
                                minRows={1}
                                className={
                                    position === 'head'
                                        ? classes.largeInput
                                        : classes.smallInput
                                }
                            />
                        </Grid.Col>
                        <Grid.Col className={classes.columnRight} span={1}>
                            <Menu className={classes.itemMenu}>
                                <Menu.Item
                                    onClick={handleDuplicateItem}
                                    icon={<IconDuplicateItem id={itemId} />}
                                >
                                    {'Duplicate'}
                                </Menu.Item>
                                <Menu.Item
                                    onClick={handleRemoveItem}
                                    icon={
                                        <IconRemoveItem
                                            id={`remove-item-${itemId}`}
                                        />
                                    }
                                >
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
