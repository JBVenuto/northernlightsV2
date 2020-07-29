import Head from 'next/head';
// import styles from '../styles/Home.module.css'
import Hero from '../components/hero';
import MapInfo from '../components/map-info';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Northern Lights</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Germania+One|Roboto" rel="stylesheet"></link>
      </Head>

      <Hero time="2020-07-28 15:00:00" kp="1" />
      <MapInfo />
    </div>
  )
}
