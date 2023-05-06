import React from 'react';

const Clients = () => {
  return (
    <div className='bg-gray-100 p-85 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0 p-10'>
        <h1 className='text-2xl font-black text-gray-700 text-center'>Nuestros mejores clientes</h1>
        <div className='flex flex-col md:flex-row flex-wrap items-center gap-20'>
            <img src="google.png" className='w-40'/>
            <img src="airbnb.png" className='w-40'/>
            <img src="amazon.png" className='w-40'/>
            <img src="shopify.png" className='w-40'/>
            <img src="google.png" className='w-40'/>
        </div>
    </div>
  )
}

export default Clients;