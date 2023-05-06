import React, {useState} from 'react';
import { FaFirstOrderAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='flex items-center justify-between xl:justify-start w-full py-4 px-8 xl:px-20 h-[10vh] z-50'>
        <div className='xk:w-1/6 text-center -mt-4'>
            <a href='#' className='text-2xl font-bold relative p-1 bg-white rounded-sm'>Landing Page
            <span className='text-primary text-4xl'>.</span>{" "}
            <FaFirstOrderAlt className='text-primary absolute -left-3 -bottom-3 -z-10'></FaFirstOrderAlt>
            </a>
        </div>
        <nav className={`fixed bg-white w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>   
            <a href='#' className='text-xl font-medium hover:text-primary'>Inicio</a>
            <a href='#' className='text-xl font-medium hover:text-primary'>Acerca de</a>
            <a href='#' className='text-xl font-medium hover:text-primary'>Servicios</a>
            <a href='#' className='text-xl font-medium hover:text-primary'>Productos</a>
        </nav>
        <button onClick={()=> setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>
            {showMenu ? <RxCross2 className='text-primary'></RxCross2> : <FiMenu className='text-primary'></FiMenu>}
        </button>
    </header>
  )
}

export default Header