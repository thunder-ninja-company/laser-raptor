import { Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export const ProfileSummary: React.FC<{}> = () => {
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
            {"asdfz"}
        </Box>
    );
};

export default ProfileSummary;
