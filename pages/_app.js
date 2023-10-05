import '../styles/globals.css'
import Navbar from '../components/Navbar'
import "@fontsource/rubik-maze"
import Footer from '../components/Footer'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return <>


  {/* commented navbar, NextNProgress, and footer for temporarily down page */}

  {/* <Navbar/> */}
  {/* <NextNProgress/> */}
    <Component {...pageProps} />
    {/* <Footer/> */}
  </>
  
}

export default MyApp
