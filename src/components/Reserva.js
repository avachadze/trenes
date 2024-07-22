import React from 'react'
import { useLocation } from 'react-router-dom'
import Tren from './Tren';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
function Reserva() {
    const { state } = useLocation();
    const precio = state[0].price + state[1].price;
    const pasajeros = state[0].searchSummary.totalPassengers;
  
    return (
     
            <div className='flex justify-center flex-col p-10'>
            
                <div className='pb-10 grid sm:grid-cols-12 grid-cols-2 gap-4 content-between border-b-2 border-gray-200'>
                    <div className=' sm:col-span-5'>
                     <Tren tren={state[0]}/>
                    </div>
                    <div className=' col-span-2  hidden sm:flex justify-center items-center flex-col text-indigo-600'>
                        <h2 className='text-lg font-bold'>Reserva</h2>
                    <FontAwesomeIcon className=" text-2xl" icon={faArrowsLeftRight} />

                    </div>
                    <div className=' sm:col-span-5'>
                     <Tren tren={state[1]}/>

                    </div>
                </div>
            <div className='mt-4'>
                <div className='flex justify-between'>
                  <h3 className='font-semibold'> Datos personales para la reserva {pasajeros > 1 && <span className='text-sm'>  ( {pasajeros}  )</span>}  </h3>  
                   <span className='text-sm text-indigo-600 font-semibold'> TOTAL: {precio}€</span>
                </div>
             
            </div>
                <form className='max-w-sm mx-auto'>
                  

                </form>
            </div>


    )
}

export default Reserva