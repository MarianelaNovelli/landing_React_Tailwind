import React from 'react';
//Iconos
import { FaFirstOrderAlt } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='bg-footer p-8 xl:p-20'>
        <div className='flex flex-col md:flex-row gap-4 items-center justify-between border-b border-gray-500 pb-8'>
            {/* Logo */}
            <div className='w-1/6'>
                <a href='#' className='text-2xl font-bold relative p-1 bg-footer rounded-sm text-white'>Landing Page
            <span className='text-primary text-4xl'>.</span>
            </a>
            </div>
                       
            {/* Redes */}
            <nav className='flex items-center gap-4'>
                <a href="#" className='block bg-primary text-white p-3 rounded-full'><AiFillInstagram></AiFillInstagram></a>

                <a href="#" className='block bg-primary text-white p-3 rounded-full'><BsFacebook></BsFacebook></a>

                <a href="#" className='block bg-primary text-white p-3 rounded-full'><RiTwitterFill></RiTwitterFill></a>

                <a href="#" className='block bg-primary text-white p-3 rounded-full'><AiFillGithub></AiFillGithub></a>
            </nav>
        </div>

        {/* Enlaces */}
        <div className='mt-8'>
            <h3 className='text-lg font-bold text-white text-center md:text-left'>Compañía</h3>
            <nav className='mt-4 flex flex-col md:flex-row items-center justify-between gap-4'>
            <a href='#' className='text-gray-400 mt-4 hover:text-white transition-color'>Acerca de</a>
            <a href='#' className='text-gray-400 mt-4 hover:text-white transition-color'>Eventos</a>
            <a href='#' className='text-gray-400 mt-4 hover:text-white transition-color'>Colaboradores</a>
            <a href='#' className='text-gray-400 mt-4 hover:text-white transition-color'>Términos de uso</a>
            <a href='#' className='text-gray-400 mt-4 hover:text-white transition-color'>Política de privacidad</a>
             <button type='button' className='font-semibold py-2 px-6 bg-primary text-white rounded-xl'>Contactános
            </button>
            </nav>
        </div>

        {/* Copyright */}
        <div className='mt-16'>
            <p className='text-sm text-white text-center'>© Marianela Novelli 2023 - Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer