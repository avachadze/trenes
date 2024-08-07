import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Tren from './Tren';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import DatosReserva from './DatosReserva';
import { useNavigate } from 'react-router-dom';

function Reserva() {
    const { state } = useLocation();
    const [precio, setPrecio] = useState(state[0].price + state[1].price)
    const pasajeros = state[0].searchSummary.totalPassengers;
    const [precioPorPersona, setPrecioPorPersona] = useState(precio / pasajeros);
    const navigate = useNavigate();
    const [total, setTotal] = useState();
    function handleSubmit(e) {
        e.preventDefault()
        var formData = new FormData(document.getElementById("formulario"));
        var nombres = formData.getAll("nombre");
        var apellidos = formData.getAll("apellido");
        var DNI = formData.getAll("DNI");
        const datos = [];
        for (var pair of formData.entries()) {
            datos.push(pair[0], pair[1]);
        }
        navigate('/datos', {
            state: {
                nombres: nombres, apellidos: apellidos, DNI: DNI, length: nombres.length, precio: precio
            }
        })
    }
    useEffect(() => {
        setTotal(precioPorPersona * pasajeros);
        setPrecio(prev => Math.round(prev * 100) / 100)
        setTotal(prev => Math.round(prev * 100) / 100)
    }, [precio, total, precioPorPersona, pasajeros]);

    return (
        <div className='px-10 pt-10 flex justify-center flex-col  min-h-[80vh] dark:bg-slate-800'>
            <div className=' py-10 grid md:grid-cols-12  gap-4 content-between border-y-2 border-dashed  border-slate-200 dark:border-slate-700'>
                <div className='relative md:col-span-5'>
                    <Tren tren={state[0]} />
                </div>
                <div className=' col-span-2  hidden md:flex justify-center items-center flex-col text-indigo-600 dark:text-indigo-500'>
                    <h2 className='text-lg font-bold '>Reserva</h2>
                    <FontAwesomeIcon className=" text-2xl" icon={faArrowsLeftRight} />
                </div>
                <div className=' md:col-span-5'>
                    <Tren tren={state[1]} />
                </div>
            </div>
            <div className='mt-4  rounded-lg px-5'>
                <div className='mt-4'>
                    <div className='flex justify-between'>
                        <h3 className='font-semibold dark:text-slate-400'> Datos personales para la reserva {pasajeros > 1 && <span className='text-sm'>({pasajeros})</span>}  </h3>
                    </div>
                </div>
                <div>
                    <form id='formulario' onSubmit={handleSubmit} className='mt-3 grid justify-between md:grid-cols-12 gap-4'>
                        {Array.from(
                            { length: pasajeros },
                            (_, i) =>
                                <DatosReserva key={i} precioPorPersona={precioPorPersona} setPrecioPorPersona={setPrecioPorPersona} precio={precio} setPrecio={setPrecio} />
                        )}
                        <div className='py-10 flex md:justify-start col-span-12 justify-end '>
                            <button className='bg-indigo-500 dark:bg-indigo-700 dark:shadow rounded-full text-white font-semibold shadow-md shadow-indigo-400  p-2 cursor-pointer'> TOTAL: {precio}€</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Reserva