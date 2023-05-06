import React from 'react';
//iconos
import { MdMail } from "react-icons/md";
//iconos
import { RiWhatsappFill, RiUserAddFill, RiSmartphoneFill, RiTv2Fill } from "react-icons/ri";

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20'>
        {/* Primera columna */}
        <div className='flex flex-col gap-4'>
            <h1 className='text-[40px] font-bold text-secondary'>Quiere contactarnos?</h1>
            <p className='text-[20px] text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore esse sapiente dolorum earum cupiditate, animi eligendi hic sequi quas culpa, aperiam nobis officia rem temporibus distinctio, eveniet fuga explicabo nemo!</p>
            <form className='w-full'>
                <div className='relative'>
                    <MdMail className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-500 text-xl'></MdMail>
                    <input type="text" className='w-full bg-gray-200 py-4 pl-10 pr-36 rounded-xl outline-none' placeholder='Ingrese su mail aquí' />
                    <button type='submit' className='absolute font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2 -translate-y-1/2 right-2 shadow-lg'>Suscribite</button>
                </div>
            </form>
        </div>
        {/* Segunda columna */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
                <RiWhatsappFill className='text-3xl text-primary p-2 bg-gray-200 box-content rounded-xl'></RiWhatsappFill>
                <h3 className='text-[20px] font-bold'>Inserte título</h3>
                <p className='text-gray-500'>Escriba una descripción del apartado.</p>
            </div>
            
            <div className='flex flex-col gap-2'>
                <RiUserAddFill className='text-3xl text-primary p-2 bg-gray-200 box-content rounded-xl'></RiUserAddFill>
                <h3 className='text-[20px] font-bold'>Inserte título</h3>
                <p className='text-gray-500'>Escriba una descripción del apartado.</p>
            </div>
            
            <div className='flex flex-col gap-2'>
                <RiSmartphoneFill className='text-3xl text-primary p-2 bg-gray-200 box-content rounded-xl'></RiSmartphoneFill>
                <h3 className='text-[20px] font-bold'>Inserte título</h3>
                <p className='text-gray-500'>Escriba una descripción del apartado.</p>
            </div>
            
            <div className='flex flex-col gap-2'>
                <RiTv2Fill className='text-3xl text-primary p-2 bg-gray-200 box-content rounded-xl'></RiTv2Fill>
                <h3 className='text-[20px] font-bold'>Inserte título</h3>
                <p className='text-gray-500'>Escriba una descripción del apartado.</p>
            </div>
        </div>
    </div>
  )
}

export default Services