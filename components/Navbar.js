import React, { useState } from 'react'
import fonts from "../styles/customFont.module.css"
import Sidebar from './Sidebar'
import {GiHamburgerMenu} from "react-icons/gi"
import Link from "next/link";
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router=useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-black flex h-[72px] items-center p-6'>
     
      <div className={`flex-1 font-bold text-3xl`}>
<div className=' flex flex-start'>
<Link href='/'>
<p className=' cursor-pointer font-extrabold'>
<span className='text-orange-400'>MAC</span><span className='text-white'>2024</span>
</p>
</Link>
</div>
        </div>
      

        <div className='hidden lg:flex lg:gap-2 text-lg font-semibold'>
            <Link href='/'>
            <span className={`${router.pathname == "/" ? "  text-orange-400 " : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
                About
            </span>
            </Link>
            <Link href='/Committee'>
            <span className={`${router.pathname == "/Committee" ? " text-orange-400" : "text-white"}  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}>
            Committee</span>
            </Link>
            
        </div>
        
        
        <span className='block lg:hidden' onClick={()=>setIsOpenSidebar(prev=>!prev)}><GiHamburgerMenu className='w-6 h-6 text-white'/></span>
        <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar}/>}
        </AnimatePresence>
    </div>
  )
}

export default Navbar