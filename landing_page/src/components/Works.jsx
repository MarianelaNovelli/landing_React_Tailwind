import React from 'react';

const Works = () => {
  return (
    <div className='p-8 xl:p-20'>
        {/* Título y subtítulo */}
        <div className='mb-8'>
            <h1 className='text-[40px] font-black text-secondary'>Nosotros creamos productos digitales en todo el mundo</h1>
            <p className='text-xl text-gray-500'>Encuentra información acerca de nuestros diseños mundiales con las mejores instrucciones aquí.</p>
        </div>
        {/* Primera columna */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
            <div className='flex flex-col gap-2'>
                <img src="work1.png" className='w-full h-[600px] object-cover rounded-3xl mb-4'/>
                <p className='text-gray-400'>Diseño web - 20 de Junio, 2023</p>
                <h3 className='text-2xl font-bold text-secondary'>Diseño Web</h3>
                <p className='text-gray-500'>Nuestros diseños son exclusivos en todo el mundo, puedes contactarnos para más información.</p>
            </div>
            
            {/* Segunda columna */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='flex flex-col gap-4'>
                    <img src="work2.png" className='w-full h-56 object-cover rounded-3xl'/>
                    <p className='text-gray-400'>Diseño web - 20 de Junio, 2023</p>
                    <h3 className='text-2xl font-bold text-secondary'>Diseño Web</h3>
                </div>

                <div className='flex flex-col gap-4'>
                    <img src="work3.png" className='w-full h-56 object-cover rounded-3xl'/>
                    <p className='text-gray-400'>Diseño web - 20 de Junio, 2023</p>
                    <h3 className='text-2xl font-bold text-secondary'>Diseño Web</h3>
                </div>

                <div className='flex flex-col gap-4'>
                    <img src="work4.png" className='w-full h-56 object-cover rounded-3xl'/>
                    <p className='text-gray-400'>Diseño web - 20 de Junio, 2023</p>
                    <h3 className='text-2xl font-bold text-secondary'>Diseño Web</h3>
                </div>

                <div className='flex flex-col gap-4'>
                    <img src="work5.png" className='w-full h-56 object-cover rounded-3xl'/>
                    <p className='text-gray-400'>Diseño web - 20 de Junio, 2023</p>
                    <h3 className='text-2xl font-bold text-secondary'>Diseño Web</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works