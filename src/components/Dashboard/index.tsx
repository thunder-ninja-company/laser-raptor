import { Grid } from '@mantine/core';
import { LeadGrid } from 'components/LeadGrid';
import { NavbarSimple } from 'components/NavbarSimple';
import { Template } from 'components/Template';

export const Page: React.FC = () => {
    return (
        <Template>
            <Grid>
                <Grid.Col span={3}>
                    <NavbarSimple />
                </Grid.Col>
                <Grid.Col span={9}>
                    <article>
                        <section>
                            <LeadGrid />
                            {'this is the section part 32132132'}
                        </section>
                    </article>
                </Grid.Col>
            </Grid>
        </Template>
    );
};

export default Page;
