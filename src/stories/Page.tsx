import { FooterCentered } from '~src/component/Footer';
import { DoubleHeader } from 'component/Header';
import { LeadGrid } from '~src/component/LeadGrid';
import { NavbarSimple } from '~src/component/NavbarSimple';

import Page123 from 'pages/index';
import React from 'react';

type User = {
    name: string;
};

const mainLinks = [
    {
        label: 'JIRA HOME',
        link: 'https://thunderninja.atlassian.net/jira/projects?selectedProjectType=software'
    },
    {
        label: 'ACCOUNT SETTINGS',
        link: 'ACCOUNT SETTINGS'
    },
    {
        label: 'SUPPORT OPTIONS',
        link: 'SUPPORT OPTIONS'
    }
];

const userLinks = [
    {
        label: 'BOOK A DEMO',
        link: 'BOOK A DEMO'
    },
    {
        label: 'DOCUMENTATION',
        link: 'DOCUMENTATION'
    },
    {
        label: 'COMMUNITY',
        link: 'COMMUNITY'
    },
    {
        label: 'ACADEMY',
        link: 'ACADEMY'
    },
    {
        label: 'FORUMS',
        link: 'FORUMS'
    }
];

export const Page: React.FC = () => {
    const [user, setUser] = React.useState<User>();

    return <Page123 />;
    // return (
    //   <div>
    //     <DoubleHeader
    //       mainLinks={mainLinks}
    //       userLinks={mainLinks} />

    //       <NavbarSimple />
    //       <TableReviews data={[]} />
    //       <LeadGrid />
    //     <FooterCentered links={mainLinks} />
    //     <article>
    //       <section>
    //       </section>

    //     </article>
    //   </div>
    // );
};
