import { Footer, Header, LeadGrid, NavbarSimple } from 'component';
import type { NextPage } from 'next';
import { MainLinks, UserLinks } from 'project/constant';

import { Counter } from '../counter';

const Home: NextPage = () => {
    return (
        <>
            <Header.default mainLinks={MainLinks} userLinks={UserLinks} />

            <NavbarSimple.default />
            <Counter />
            <LeadGrid.default />
            <Footer.default links={MainLinks} />
        </>
    );
};

export default Home;
