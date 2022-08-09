import { Table, Title, Box } from '@mantine/core'
import type { Props } from './type'
import { useStyles } from './style'


export default function KeyValueList({ value, id } : Props) {

    const { classes } = useStyles()

    return (
        <Box
            className={classes.keyValueList}
            id={id}>
            <Title>
                {value.id}
            </Title>
            {value.panels.map(panel =>
                <Box key={`kvl-${id}-${panel.id}`}>
                    <Title order={3}>
                        {panel.id}
                    </Title>
                    <Table
                        highlightOnHover={true}
                        striped={true}>
                        <thead>
                            <tr>
                                <th>
                                    {'id'}
                                </th>
                                <th>
                                    {'value'}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {panel.items.map(item => (
                                <tr key={`kvl-${id}-${panel.id}-${item.id}`}>
                                    <td>
                                        {item.id}
                                    </td>
                                    <td>
                                        {item.value}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Box>
            )}
        </Box>
    )
}
