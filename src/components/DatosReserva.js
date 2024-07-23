import React, { useState } from 'react'
function DatosReserva({ precio, passangers }) {

    const [precioPorPersona] = useState(precio / passangers)
    const [descuento, setDescuento] = useState(precioPorPersona);
    function handleChange(e) {
        let selection = e.target.value;
        let discapacidad = 0.3;
        let veranoJoven = 0.5;
        let pensionista = 0.6;
        let infant = 1;
        if (selection === "discap") {
            setDescuento(precioPorPersona - (precioPorPersona * discapacidad))

        } else if (selection === "vj") {
            setDescuento(precioPorPersona - (precioPorPersona * veranoJoven))


        } else if (selection === "pens") {
            setDescuento(precioPorPersona - (precioPorPersona * pensionista))

        } else if (selection === "infant") {
            setDescuento(precioPorPersona - (precioPorPersona * infant))

        }
        else {
            setDescuento(precioPorPersona)
        }

    }

    return (
        <>
            <form className='sm:space-x-5 mt-3 grid justify-between sm:grid-cols-10'>
                <input className='outline-none border border-transparent border-b-2 border-b-indigo-600 text-gra p-2 rounded  sm:col-span-2' type='text' placeholder='Nombre' />
                <input className='outline-none border border-transparent border-b-2 border-b-indigo-600 text-gra p-2 rounded  sm:col-span-2' type='text' placeholder='Apellido' />
                <input className='outline-none border border-transparent border-b-2 border-b-indigo-600 text-gra p-2 rounded  sm:col-span-2' type='text' placeholder='DNI' />
                <select className="py-2 rounded outline-none border border-transparent border-b-2 border-b-indigo-600 text-gra sm:col-span-3" onChange={handleChange}>
                    <option value="" >Tengo un descuento</option>
                    <option value="discap" >Discapacidad</option>
                    <option value="vj" >Verano joven</option>
                    <option value="pens" >Pensionista</option>
                    <option value="infant" >Niños 0-6</option>
                </select>

                <div className=' flex justify-end items-center'>
                    <span className='bg-indigo-500  rounded-full text-white font-semibold shadow-md shadow-indigo-400 p-2'>
                        {descuento}€
                    </span>
                </div>
            </form >

        </>
    )
}

export default DatosReserva