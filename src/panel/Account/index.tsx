import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import Template from "panel/Template";

export const Account: React.FC<{}> = () => {
    const form = useForm({
        initialValues: {
            email: "",
            termsOfService: false,
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    });

    return (
            <Box sx={{ maxWidth: 300 }} mx="auto">
                <TextInput
                    required
                    label="Email"
                    placeholder="email address"
                    {...form.getInputProps("email")}
                />
                <Checkbox
                    mt="md"
                    label="I agree to sell my privacy"
                    {...form.getInputProps("termsOfService", {
                        type: "checkbox",
                    })}
                />
                <Group position="right" mt="md">
                    <Button type="submit">{"Submit"}</Button>
                </Group>
            </Box>
        </Template>
    );
};

export default Account;
