import {
    Footer, Header, LeadGrid, NavbarSimple
} from 'component';
import type { NextPage } from 'next';

import { Counter } from '../counter';



const Home: NextPage = () => {
    return (
        <>
            <Header mainLinks={mainLinks} userLinks={mainLinks} />

            <NavbarSimple />
            <Counter />
            <LeadGrid />
            <Footer links={mainLinks} />
        </>
    );
};

export default Home;
