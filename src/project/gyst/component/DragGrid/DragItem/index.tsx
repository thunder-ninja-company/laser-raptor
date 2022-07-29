import { IconRemoveItem, IconDuplicateItem, IconToggleItem } from "gyst/component";
import { DragGridContext, initialDragDropState } from "../constant";
import type { DragDropState } from "../type";
import { useDebouncedCallback } from 'use-debounce';
import type { DragItemDTO, DragItemProps } from "./type";
import { Box, Group, Text, TextInput } from "@mantine/core";
import { useStyles } from "./style";
import { useDrag } from "react-dnd";
import { IconPencil } from "@tabler/icons";
import { useForm } from '@mantine/form';
import type { UseFormReturnType } from "@mantine/form/lib/use-form";
import {useContext } from "react";

interface FormValues {
    value: string;
    email: string;
}

function NameInput({ form }: { form: UseFormReturnType<FormValues> }) {
    return <TextInput {...form.getInputProps('email')} />;
}

export default function DragItem({ dragItem, panelId }: DragItemProps) {

    console.log(`DragItem(${dragItem.value})`);

    const { classes } = useStyles();

    const { id : itemId, value : itemValue } = dragItem;

    const form = useForm<FormValues>({
        initialValues : {
            value : dragItem.value,
            email : '',
        },
    });

    const context = useContext(DragGridContext);

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "item",
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

            <div role="Handle" ref={drag}>
                <Text style={{
                    textDecoration: dragItem.status === 'checked' ? 'line-through' : 'none',
                    backgroundColor : isDragging ? '#0fd' : 'transparent',
                }}>

                </Text>

                <TextInput
                    {...form.getInputProps('value')}
                    onChange={handleChangeValue}
                    style={{
                        outline: 'none',
                    }}
                    onBlur={handleBlur}
                    icon={textboxInputIcon} />

                <Group>
                    <IconRemoveItem
                        id={`remove-item-${itemId}`}
                        itemId={itemId} />
                    <IconToggleItem
                        id={`toggle-item-${itemId}`}
                        itemId={itemId} />
                    <IconDuplicateItem
                        itemId={itemId} />
                </Group>
            </div>
        </Box>
    );
}
