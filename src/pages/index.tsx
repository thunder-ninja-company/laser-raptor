import { FooterCentered } from "components/Footer"
import { DoubleHeader } from "components/Header"
import { LeadGrid } from "components/LeadGrid"
import { NavbarSimple } from "components/NavbarSimple"
import { TableReviews } from "components/TableReviews"
import type { NextPage } from "next"

import { Counter } from "../counter"

const mainLinks = [
  {
    label: "JIRA HOME",
    link: "https://thunderninja.atlassian.net/jira/projects?selectedProjectType=software"
  },
  {
    label: "ACCOUNT SETTINGS",
    link: "ACCOUNT SETTINGS"
  },
  {
    label: "SUPPORT OPTIONS",
    link: "SUPPORT OPTIONS"
  }
]

const userLinks = [
  {
    label: "BOOK A DEMO",
    link: "BOOK A DEMO"
  },
  {
    label: "DOCUMENTATION",
    link: "DOCUMENTATION"
  },
  {
    label: "COMMUNITY",
    link: "COMMUNITY"
  },
  {
    label: "ACADEMY",
    link: "ACADEMY"
  },
  {
    label: "FORUMS",
    link: "FORUMS"
  }
]

const Home: NextPage = () => {
  return (
    <>
      <DoubleHeader mainLinks={mainLinks} userLinks={mainLinks} />

      <NavbarSimple />
      <TableReviews data={[]} />
      <Counter />
      <LeadGrid />
      <FooterCentered links={mainLinks} />
    </>
  )
}

export default Home
