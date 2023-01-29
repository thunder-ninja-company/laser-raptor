import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';


export const Account : React.FC = () => {
    const form = useForm({
        initialValues : {
            email          : '',
            termsOfService : false,
            username       : '',
        },

        validate : {
            email : value =>
                /^\S+@\S+$/.test(value) ? null : 'Invalid email',
        },
    });

    return (
        <Box
            sx={{ maxWidth : 300 }}
            mx='auto'>
            <TextInput
                required={true}
                label='Email'
                placeholder='email address'
                {...form.getInputProps('email')}/>
            <TextInput
                required={true}
                label='Username'
                placeholder='email address'
                {...form.getInputProps('username')}/>
            <Checkbox
                mt='md'
                label='I agree to sell my privacy'
                {...form.getInputProps('termsOfService', {
                    type : 'checkbox',
                })}/>
            <Group
                position='right'
                mt='md'>
                <Button type='submit'>{'Submit'}</Button>
            </Group>
        </Box>
    );
};

export default Account;
