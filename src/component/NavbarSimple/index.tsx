import { Navbar, Title, Text, Divider } from "@mantine/core";
import Sidebar from "./Sidebar";
import type { Props } from "./type";

const NavbarSimple: React.FC<Props> = ({ opened }: Props) => {
    return (
        <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 300 }}
        >
            <Title order={5}>Project Mayhem</Title>
            <Sidebar />
            <Navbar.Section grow={true}>{null}</Navbar.Section>
            <Navbar.Section>
                <Text
                    transform="uppercase"
                    align="center"
                    size="xs"
                    color="lightgray"
                >
                    {"Version: 6.2.33"}
                </Text>
            </Navbar.Section>
        </Navbar>
    );
};

export default NavbarSimple;
