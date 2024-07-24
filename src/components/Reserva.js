import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Tren from './Tren';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import DatosReserva from './DatosReserva';

function Reserva() {
    const { state } = useLocation();
    const [precio, setPrecio] = useState(state[0].price + state[1].price)
    const pasajeros = state[0].searchSummary.totalPassengers;
    const [precioPorPersona, setPrecioPorPersona] = useState(precio / pasajeros);
    const [total, setTotal] = useState();


    useEffect(() => {
        setTotal(precioPorPersona * pasajeros);
        setPrecio(prev => Math.round(prev * 100) / 100)
        setTotal(prev => Math.round(prev * 100) / 100)
    }, [precio, total, precioPorPersona, pasajeros]);
    return (

        <div className='sm:px-32 flex justify-center flex-col p-10 min-h-[80vh]'>
            <div className=' pb-10 grid sm:grid-cols-12  gap-4 content-between border-b-2 border-gray-200'>
                <div className='relative sm:col-span-5'>
                    <Tren tren={state[0]} />
                </div>
                <div className=' col-span-2  hidden sm:flex justify-center items-center flex-col text-indigo-600'>
                    <h2 className=' text-lg font-bold'>Reserva</h2>
                    <FontAwesomeIcon className=" text-2xl" icon={faArrowsLeftRight} />
                </div>
                <div className=' sm:col-span-5'>
                    <Tren tren={state[1]} />
                </div>
            </div>
            <div className='mt-4'>
                <div className='flex justify-between'>
                    <h3 className='font-semibold'> Datos personales para la reserva {pasajeros > 1 && <span className='text-sm'>({pasajeros})</span>}  </h3>
                </div>
            </div>
            <div>
            
                {Array.from(
                    { length: pasajeros },
                    (_, i) =>
                        <DatosReserva key={i} precioPorPersona={precioPorPersona} setPrecioPorPersona={setPrecioPorPersona} precio={precio} setPrecio={setPrecio} />
                )}
            </div>
            <div className='py-10'>
                <span className='bg-indigo-500  rounded-full text-white font-semibold shadow-md shadow-indigo-400 p-2'> TOTAL: {precio}€</span>
            </div>
        </div>


    )
}

export default Reserva