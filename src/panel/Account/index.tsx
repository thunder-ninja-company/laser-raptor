import { Paper, Text } from '@mantine/core';
import Template from 'panel/Template';
import InputForm from 'component/InputForm';

export const Account: React.FC = () => {
    return (
        <Template>
            <Paper style={{ margin: '40px' }} shadow="sm" p="md" withBorder>

                <InputForm id=''>
                    <InputText />
                </InputForm>
                <Text>Paper sdaasdasdis the most basic ui component</Text>
                <Text>
                    Use it to create cardddds, dropdowns, modals and other components that require background with
                    shadow
                </Text>
            </Paper>
        </Template>
    );
};

export default Account;
