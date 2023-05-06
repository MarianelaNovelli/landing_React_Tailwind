import React from 'react';
//iconos
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className='bg-gray-200 p-8 flex flex-col gap-8'>
        <h1 className='text-[40px] text-center font-black text-secondary'>Este es el apartado de comentarios</h1>
        <div className='flex justify-center gap-4'>
            <span className='text-5xl text-primary'><RiDoubleQuotesL></RiDoubleQuotesL></span>
            <p className='max-w-2xl text-center text-gray-500'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, nisi delectus. Distinctio, libero voluptate labore minus assumenda delectus eveniet nihil nulla sequi eum quas aut voluptatem sint at quidem ex.
            </p>
            <span className='text-5xl text-primary'><RiDoubleQuotesR></RiDoubleQuotesR></span>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
            <div className='flex items-center justify-center gap-8 md:gap-12'>
            <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
            />

            <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
            />

            <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full ring-4 ring-primary-300 p-1 bg-white"
            />

            <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-10 h-10 md:w-16 md:h-16 object-cover rounded-full"
            />

            <img
                src="https://img.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg"
                className="w-8 h-8 md:w-14 md:h-14 object-cover rounded-full"
            />
            </div>
            <div>
                <h3 className='text-center text-[24px] font-bold text-secondary'>Marianela Novelli</h3>
                <h5 className='text-center text-[20px] text-gray-500'>Profesora de Matemática</h5>
            </div>
        </div>
    </div>
  )
}

export default Reviews