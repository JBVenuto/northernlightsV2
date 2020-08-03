import Head from 'next/head';
import Hero from '../components/hero';
import MapInfo from '../components/map-info';
import { forcast, lastKp } from '../lib/forcast';

export async function getServerSideProps() {
  const res = await fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json')
  const data = await res.json()
  const upcoming = await forcast(data)
  const lastRecorded = await lastKp(data)

  return {
    props: {
      upcoming,
      lastRecorded
    }
  }
}


export default function Home({ upcoming }) {
  return (
    <div>
      <Head>
        <title>Northern Lights</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Germania+One|Roboto" rel="stylesheet"></link>
      </Head>

      <Hero time="2020-07-28 15:00:00" kp="1" />
      <MapInfo />
      {upcoming.map(kpTime => 
        <li>{kpTime[1]} KP at {kpTime[0]}</li>
      )}
    </div>
  )
}
