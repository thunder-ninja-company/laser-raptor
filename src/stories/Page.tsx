import React from 'react';

import { DoubleHeader } from 'components/Header';
import { FooterCentered } from 'components/Footer';
import { NavbarSimple } from 'components/NavbarSimple';
import { TableReviews } from 'components/TableReviews';
import { LeadGrid } from 'components/LeadGrid';

import './page.css';

type User = {
  name: string;
};

const mainLinks = [{
  label : 'JIRA HOME',
  link : 'https://thunderninja.atlassian.net/jira/projects?selectedProjectType=software',
}, {
  label : 'ACCOUNT SETTINGS',
  link : 'ACCOUNT SETTINGS',
},  {
  label : 'SUPPORT OPTIONS',
  link : 'SUPPORT OPTIONS',
}];

const userLinks = [{
  label : 'BOOK A DEMO',
  link : 'BOOK A DEMO',
}, {
  label : 'DOCUMENTATION',
  link : 'DOCUMENTATION',
}, {
  label : 'COMMUNITY',
  link : 'COMMUNITY',
}, {
  label : 'ACADEMY',
  link : 'ACADEMY',
}, {
  label : 'FORUMS',
  link : 'FORUMS',
}];

export const Page : React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <div>
      <DoubleHeader
        mainLinks={mainLinks}
        userLinks={mainLinks} />
        
        <NavbarSimple />
        <TableReviews data={[]} />
        <LeadGrid />
      <FooterCentered links={mainLinks} />
      <article>
        <section>
        </section>

        
      </article>
    </div>
  );
};
