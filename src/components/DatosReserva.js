import React, { useState, useEffect } from 'react'
function DatosReserva({ precioPorPersona, setPrecio, precio }) {

    const [precioMostrar, setPrecioMostrar] = useState(precioPorPersona);
    const [precioOriginal] = useState(precio);

    useEffect(() => {
        setPrecioMostrar(prev => Math.round(prev * 100) / 100)

    }, [precioPorPersona, setPrecio, precioOriginal]);

    return (
        <>
            <input className='col-span-12 p-2 border border-b-2 border-transparent rounded outline-none dark:bg-slate-700 dark:placeholder-slate-500 dark:text-slate-300 border-b-slate-500 md:col-span-3' name='nombre' type='text' required placeholder='Nombre' />
            <input className='col-span-12 p-2 border border-b-2 border-transparent rounded outline-none dark:bg-slate-700 dark:placeholder-slate-500 dark:text-slate-300 border-b-slate-500 md:col-span-4' name='apellido' type='text' required placeholder='Apellido' />
            <input className='col-span-12 p-2 border border-b-2 border-transparent rounded outline-none dark:bg-slate-700 dark:placeholder-slate-500 dark:text-slate-300 border-b-slate-500 md:col-span-3' name='DNI' type='text' required placeholder='DNI' />
           


            <div className='flex items-end justify-start col-span-2 gap-2 mt-5  md:justify-end md:mt-0'>
                <div className='md:block hidden h-[5px] border-b border-dashed border-slate-300 dark:border-slate-600 w-2/3'>

                </div>
                <span className='p-2 font-semibold text-white bg-indigo-500 rounded-full shadow-md cursor-pointer dark:bg-indigo-700 dark:shadow shadow-indigo-400'>
                    {precioMostrar}€
                </span>
            </div>
        </>
    )
}

export default DatosReserva