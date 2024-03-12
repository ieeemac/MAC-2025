import Head from 'next/head'
import HomeMain from '../components/HomeMain'
import HomeAlert from '../components/HomeAlert'
import CenteredBlockPage1 from '../components/HomeTemp'

// sqrt(sqr(mag(S11+S12*(re(x2)+im(y2)))+sqr(mag(S21+S22*re(x2)+im(y2)))))/2


export default function Home() {
  return (
    <div id="main" className='relative '>
      {/* <Head>
        <title>MAC2024 Homepage</title>
        <meta name="description" content="MAC-2024" />
        <link rel="icon" href="/icon2.png" />
      </Head> */}
      <CenteredBlockPage1/>
      {/* <HomeMain/> */}
      {/* <HomeAlert /> */}
    </div>
  )
}
