import { Burger, Header, MediaQuery } from '@mantine/core';
import IconHelp from 'gyst/component/IconHelp';
import type { Props } from './type';
import { useStyles } from './style';


export default function AppHeader({ id } : Props) {

    const { classes } = useStyles();

    // const handleClick = () => onClick(id, actionType);

    return (
        <Header
            className={classes.appHeader}
            height={80}
            p='md'>

            <MediaQuery
                largerThan='sm'
                styles={{ display : 'none' }}>
                <Burger
                    opened={false}
                    size='sm'
                    mr='xl' />
            </MediaQuery>

            <div />

            <IconHelp id={`help-${id}`} />
        </Header>

    );
}
