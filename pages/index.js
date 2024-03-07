import Head from 'next/head'
import HomeMain from '../components/HomeMain'
import HomeAlert from '../components/HomeAlert'



export default function Home() {
  return (
    <div id="main" className='relative '>
      <Head>
        <title>MAC2024 Homepage</title>
        <meta name="description" content="MAC-2024" />
        <link rel="icon" href="/icon2.png" />
      </Head>
      <HomeMain/>
      {/* <HomeAlert /> */}
    </div>
  )
}
