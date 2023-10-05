// commenting main code for temporarily down page


// import Head from 'next/head'
// import HomeMain from '../components/HomeMain'

// export default function Home() {
//   return (
//     <div className='relative'>
//       <Head>
//         <title>MAC2024 Homepage</title>
//         <meta name="description" content="MAC-2024" />
//         <link rel="icon" href="/icon2.png" />
//       </Head>
//   <HomeMain/>
//     </div>
//   )
// }



// following code lines are for temporarilyDown page.. also created a components named TemporarilyDown in components folder

import PageTemporarilyDown from "../components/TemporarilyDown"

export default function Home() {
  return (
  <PageTemporarilyDown/>
  )
}
