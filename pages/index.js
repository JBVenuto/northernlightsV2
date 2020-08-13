import Head from 'next/head';
import Hero from '../components/hero';
import MapInfo from '../components/map-info';
import KpGraph from '../components/kp-graph';
import Line from '../components/line-graph';
import KpBar from '../components/kp-bar';

import { lastKp } from '../lib/previous';
import { forcast } from '../lib/forcast';

export async function getStaticProps() {
  const res = await fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json')
  const data = await res.json()
  const upcoming = await forcast(data)
  const last = await lastKp(data)

  return {
    props: {
      last,
      upcoming
    }
  }
}


export default function Home({ last, upcoming }) {
  return (
    <div>
      <Head>
        <title>Northern Lights</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Germania+One|Roboto" rel="stylesheet"></link>
      </Head>

      <Hero time={last[0]} kp={last[1]} />
      <MapInfo />
      {/* <Line kp={upcoming} /> */}
      {/* <KpGraph kp={upcoming} /> */}
      <KpBar kp={upcoming} />
      {/* {upcoming.map(kpTime => 
        <li>{kpTime[1]} KP at {kpTime[0]}</li>
      )} */}
    </div>
  )
}
