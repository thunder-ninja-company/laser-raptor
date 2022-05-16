import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { DoubleHeader } from '../components/Header';

const mainLinks = [{
  label : 'label1',
  link  : 'link1',
}, {
  label : 'label2',
  link  : 'link2',
}];


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DoubleHeader
        mainLinks={mainLinks}
        userLinks={mainLinks} />
    </div>
  )
}

export default Home
