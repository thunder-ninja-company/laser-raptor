import { FooterCentered } from '~src/component/Footer';
import { DoubleHeader } from 'component/Header';
import { LeadGrid } from 'component/LeadGrid';
import { NavbarSimple } from 'component/NavbarSimple';

import type { Props } from './type';

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

export const Template: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <DoubleHeader mainLinks={mainLinks} userLinks={mainLinks} />
            {children}
            <FooterCentered links={mainLinks} />
        </div>
    );
};

export default Template;
