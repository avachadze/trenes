import React, { useState, useEffect } from 'react'
function DatosReserva({ precioPorPersona, setPrecio, precio }) {

    const [precioMostrar, setPrecioMostrar] = useState(precioPorPersona);
    const [precioOriginal] = useState(precio);

    useEffect(() => {
        setPrecioMostrar(prev => Math.round(prev * 100) / 100)

    }, [precioPorPersona, setPrecio, precioOriginal]);

    return (
        <>
            <input className='dark:bg-slate-800 dark:placeholder-slate-500 dark:text-slate-300 outline-none border border-transparent border-b-2 border-b-slate-300  p-2 rounded  md:col-span-3 col-span-12' name='nombre' type='text' required placeholder='Nombre' />
            <input className='dark:bg-slate-800 dark:placeholder-slate-500 dark:text-slate-300 outline-none border border-transparent border-b-2 border-b-slate-300  p-2 rounded  md:col-span-4 col-span-12' name='apellido' type='text' required placeholder='Apellido' />
            <input className='dark:bg-slate-800 dark:placeholder-slate-500 dark:text-slate-300 outline-none border border-transparent border-b-2 border-b-slate-300  p-2 rounded  md:col-span-3 col-span-12' name='DNI' type='text' required placeholder='DNI' />
           


            <div className=' flex md:justify-end justify-start items-end  mt-5 md:mt-0  col-span-2 gap-2'>
                <div className='md:block hidden h-[5px] border-b border-dashed border-slate-300 dark:border-slate-600 w-2/3'>

                </div>
                <span className='bg-indigo-500 dark:bg-indigo-700 dark:shadow cursor-pointer rounded-full text-white font-semibold shadow-md shadow-indigo-400 p-2'>
                    {precioMostrar}€
                </span>
            </div>
        </>
    )
}

export default DatosReserva