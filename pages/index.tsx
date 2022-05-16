import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DoubleHeader } from '../components/Header';

const mainLinks = [{
  label : 'PRIVACY & SECURITY',
  link : 'PRIVACY & SECURITY',
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
      <DoubleHeader
        mainLinks={mainLinks}
        userLinks={mainLinks} />
  )
}

export default Home
