import IconAddPanel from "gyst/component/IconAddPanel";
import IconHelp from "gyst/component/IconHelp";
import { Burger, Header, MediaQuery, Text } from "@mantine/core";
import { useStyles } from "./style";
import type { Props } from "./type";

export default function AppHeader({ id }: Props) {

    const { classes } = useStyles();

    // const handleClick = () => onClick(id, actionType);

    return (
        <Header
            className={classes.appHeader}
            height={80}
            p="md">

            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={false}
                size="sm"
                mr="xl"
              />
            </MediaQuery>

            <IconAddPanel
                id='add-panel-head'
                position='head' />

            <IconHelp id={`help-${id}`} />

        </Header>

    );
}
