import React from 'react'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
function DatosFinal() {

    const { state } = useLocation();
    const datos = state;
    const pasajeros = [];

    for (let i = 0; i < datos.length; i++) {
        pasajeros.push({ nombre: datos.nombres[i], apellidos: datos.apellidos[i], DNI: datos.DNI[i] })
    }
    console.log(pasajeros)
    return (
        <div className='min-h-[70vh] p-10'>
            <h2 className='text-lg font-bold'>Datos Reserva</h2>
            <div className='border-b-2 border-dashed  border-gray-200 grid grid-cols-12'>
                {pasajeros.map((pasajero) => (
                    <div className='col-span-4' key={pasajero.DNI}>
                        <div className='flex pb-5  gap-4 content-between mt-5 '>
                            <div className='h-full shadow-lg w-20 p-4 bg-indigo-500 text-white flex justify-center items-center rounded-xl'>
                                <FontAwesomeIcon className=" text-2xl" icon={faTrain} />
                            </div>
                            <h2 className='col-span-11 text-lg font-bold flex items-center text-primary'>
                                {pasajero.nombre} {pasajero.apellidos} - {pasajero.DNI}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <section className='mt-5'>
                <h3 className='text-md font-semibold'>
                    Selecciona tipo de pago
                </h3>
                <div className='flex gap-4 mt-5 items-center'>
                    <div className='h-[44px] bg-yellow-400 font-semibold p-2 w-[240px] flex items-center gap-2 cursor-pointer shadow-2xl rounded border-2 border-indigo-400'>
                        Compra segura con

                        <img src={require('../assets/paypal.png')} alt='img' className='h-[15px]' />

                    </div>
                    <div className='h-[44px] p-2 w-[100px] flex font-semibold text-cyan-500 items-center gap-2 cursor-pointer shadow-2xl rounded border-2 border-cyan-500'>
                        <img src={require('../assets/bizum.png')} alt='img' className='h-[30px]' />
                        Bizum
                    </div>

                    <div className='cursor-pointer'>
                        <img src={require('../assets/tarjeta.png')} alt='img' className='h-[55px] ' />
                    </div>
                </div>
            </section>
           

        </div>
    )
}

export default DatosFinal