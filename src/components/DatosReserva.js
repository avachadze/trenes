import React, { useState, useEffect } from 'react'
function DatosReserva({ precioPorPersona, setPrecio, precio }) {

    const [precioMostrar, setPrecioMostrar] = useState(precioPorPersona);
    const [precioOriginal] = useState(precio);

    useEffect(() => {
        setPrecioMostrar(prev => Math.round(prev * 100) / 100)

    }, [precioPorPersona, setPrecio, precioOriginal]);

    return (
        <>
            <input className='outline-none border border-transparent border-b-2 border-b-gray-300  p-2 rounded  sm:col-span-3 col-span-12' name='nombre' type='text' placeholder='Nombre' />
            <input className='outline-none border border-transparent border-b-2 border-b-gray-300  p-2 rounded  sm:col-span-4 col-span-12' name='apellido' type='text' placeholder='Apellido' />
            <input className='outline-none border border-transparent border-b-2 border-b-gray-300  p-2 rounded  sm:col-span-3 col-span-12' name='DNI' type='text' placeholder='DNI' />


            <div className=' flex sm:justify-end justify-start items-end  mt-5 sm:mt-0  col-span-2 gap-2'>
                <div className='sm:block hidden h-[5px] border-b border-dashed border-gray-300 w-2/3'>

                </div>
                <span className='bg-indigo-500 cursor-pointer rounded-full text-white font-semibold shadow-md shadow-indigo-400 p-2'>
                    {precioMostrar}€
                </span>
            </div>
        </>
    )
}

export default DatosReserva