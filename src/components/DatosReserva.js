import React, { useState, useEffect } from 'react'
function DatosReserva({ precioPorPersona, setPrecio, precio }) {


    const [descuento, setDescuento] = useState(0);
    const [precioMostrar, setPrecioMostrar] = useState(precioPorPersona);
    const [precioOriginal] = useState(precio);

    function handleChange(e) {
        setDescuento(0)
        let selection = e.target.value;
        let discapacidad = 0.3;
        let veranoJoven = 0.5;
        let pensionista = 0.6;
        let infant = 1;

        if (selection === "discap") {
            setPrecioMostrar(precioPorPersona - (precioPorPersona * discapacidad))
            setDescuento(precioPorPersona * discapacidad)

        } else if (selection === "vj") {
            setPrecioMostrar(precioPorPersona - (precioPorPersona * veranoJoven))
            setDescuento(precioPorPersona * veranoJoven)

        } else if (selection === "pens") {
            setPrecioMostrar(precioPorPersona - (precioPorPersona * pensionista))
            setDescuento(precioPorPersona * pensionista)


        } else if (selection === "infant") {
            setPrecioMostrar(precioPorPersona - (precioPorPersona * infant))
            setDescuento(precioPorPersona * infant)


        }
        else {
            setPrecioMostrar(precioPorPersona)
            setDescuento(0)
        }
    }

    useEffect(() => {
        setPrecioMostrar(prev => Math.round(prev * 100) / 100)
        setPrecio(precioOriginal - descuento)
    }, [descuento, precioPorPersona, setPrecio, precioOriginal]);

    return (
        <>
            <form className='sm:space-x-5 mt-3 grid justify-between sm:grid-cols-10'>
                <input className='outline-none border border-transparent border-b-2 border-b-gray-300  p-2 rounded  sm:col-span-2 col-span-12' type='text' placeholder='Nombre' />
                <input className='outline-none border border-transparent border-b-2 border-b-gray-300  p-2 rounded  sm:col-span-2 col-span-12' type='text' placeholder='Apellido' />
                <input className='outline-none border border-transparent border-b-2 border-b-gray-300  p-2 rounded  sm:col-span-2 col-span-12' type='text' placeholder='DNI' />
                <select id='selector' className="py-2 rounded outline-none border border-transparent border-b-2 border-b-gray-300 sm:col-span-3 col-span-12" onChange={handleChange}>
                    <option value="" >Tengo un descuento</option>
                    <option value="discap" >Discapacidad</option>
                    <option value="vj" >Verano joven</option>
                    <option value="pens" >Pensionista</option>
                    <option value="infant" >Niños 0-6</option>
                </select>
                <div className=' flex justify-end items-center  mt-5 sm:mt-0'>
                    <span className='bg-indigo-500  rounded-full text-white font-semibold shadow-md shadow-indigo-400 p-2'>
                        {precioMostrar}€
                    </span>
                </div>
            </form>
        </>
    )
}

export default DatosReserva