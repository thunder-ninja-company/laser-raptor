import { Footer, DoubleHeader, LeadGrid, NavbarSimple } from 'component';
import type { NextPage } from 'next';
import { MainLinks, UserLinks } from 'project/constant';

import { Counter } from '../counter';

const Home: NextPage = () => {
    return (
        <>
            <DoubleHeader mainLinks={MainLinks} userLinks={UserLinks} />
            <NavbarSimple />
            <Counter />
            <LeadGrid />
            <Footer links={MainLinks} />
        </>
    );
};

export default Home;
