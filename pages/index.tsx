import type { NextPage } from 'next'
import { DoubleHeader } from '../components/Header';
import { FooterCentered } from '../components/Footer';
import { NavbarSimple } from '../components/NavbarSimple';

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

const Home: NextPage = () => {
  return (
      <>
        <DoubleHeader
          mainLinks={mainLinks}
          userLinks={mainLinks} />
          <NavbarSimple />
        
        <FooterCentered links={mainLinks} />
      </>
  )
}

export default Home
