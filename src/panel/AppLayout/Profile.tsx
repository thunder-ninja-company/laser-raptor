import { Avatar, Button, Center, Grid, useMantineTheme, Group, Textarea, TextInput, Text, Space, Title, Anchor } from "@mantine/core";
import { useForm } from "@mantine/hooks";
import { At, Ballpen, Briefcase, BrandTwitter, ExternalLink, EditCircle } from 'tabler-icons-react';
import { InputForm, SectionBox } from "component";
import { ThemeConsumer } from "styled-components";
import { handle } from "@oclif/core/lib/errors";

export const Profile: React.FC<{}> = () => {
    const theme = useMantineTheme();

    const form = useForm({
        initialValues: {
            email: "",
            username: "",
            bio: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    });

    const Spacer = <Space h="xl" />;

    return (
        <SectionBox>
            <Title order={2}>
                {'Your Profile'}
            </Title>
            <Grid>
                <Grid.Col md={6}>
                <InputForm id="123">

                    <TextInput

                        required
                        label="Username"
                        icon={<At size={14} />}
                        placeholder="username"
                        {...form.getInputProps("username")}
                    />
                    <Space h="lg" />
                    <TextInput
                        required
                        label="Email"
                        placeholder="email address"
                        {...form.getInputProps("email")}
                    />
                    <Space h="lg" />
                    <Textarea
                        placeholder="Your bio"
                        icon={<Ballpen size={14} />}
                        label="Bio"
                        required
                        {...form.getInputProps("bio")}
                        />
                    <Space h="lg" />
                    <TextInput
                        icon={<Briefcase size={14} />}
                        required
                        label="Company"
                        {...form.getInputProps("company")}
                    />
                    <Space h="lg" />
                    <TextInput
                        icon={<ExternalLink size={14} />}
                        required
                        label="Website"
                        {...form.getInputProps("website")}
                    />
                    <Space h="lg" />
                    <TextInput
                        icon={<BrandTwitter size={14} />}
                        required
                        label="Twitter"
                        {...form.getInputProps("twitter")}
                    />
                    <Space h="lg" />


                    <Group>
                        <Button type="submit">{"Cancel"}</Button>
                        <Button>{"Submit"}</Button>
                    </Group>
                </InputForm>
                </Grid.Col>
                <Grid.Col md={6} style={{ textAlign : 'center' }}>
                    <Anchor onClick={handle}>
                        {'Edit   '}
                        <EditCircle  />
                    </Anchor>
                    <Space h="sm" />


                    <Avatar
                        component="a"
                        style={{ boxShadow: "2px 10px 20px rgba(0,0,0,.2)", textDecoration: 'none' }}
                        src="static/media/src/assets/image/profile.png"
                        href="/public-profile"
                        size={256}
                        radius={128}>
                        <Text
                            style={{fontSize: '142px'}}
                            weight={200}>
                            {'DD'}
                        </Text>

                    </Avatar>


                </Grid.Col>
            </Grid>

        </SectionBox>
    );
};

export default Profile;
