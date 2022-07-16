import {
    Burger,
    Container,
    Group,
    Header as MantineHeader,
} from "@mantine/core";
import { useBooleanToggle } from "@mantine/hooks";
import { COMPONENT_NAME } from "./constant";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function DraggableContent({ id: _id }: Props) {
    const [opened, toggleOpened] = useBooleanToggle(false);
    const { classes } = useStyles();

    return (
        <MantineHeader height={100}>
            <Container className={classes.inner}>
                <div className={classes.links}>
                    <Group
                        spacing={0}
                        position="right"
                        className={classes.mainLinks}
                    >
                        {`Hello, ${_id} from ${COMPONENT_NAME}`}
                    </Group>
                </div>
                <Burger
                    opened={opened}
                    onClick={() => toggleOpened()}
                    className={classes.burger}
                    size="sm"
                />
            </Container>
        </MantineHeader>
    );
}
