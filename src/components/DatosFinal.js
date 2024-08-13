import React, { useEffect } from 'react'
import Info from "./info/Info";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
function DatosFinal() {

    const { state } = useLocation();
    const datos = state;
    const pasajeros = [];
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    for (let i = 0; i < datos.length; i++) {
        pasajeros.push({ nombre: datos.nombres[i], apellidos: datos.apellidos[i], DNI: datos.DNI[i] })
    }
    function shake(e) {
        e.target.classList.add('animate-shake')
        setTimeout(() => {
            e.target.classList.remove('animate-shake');
        }, 2000)
    }
    return (
        <div className='min-h-[70vh] p-5 md:p-10 dark:bg-slate-900'>
            <h2 className='text-lg font-bold text-center md:text-start dark:text-slate-400'>Datos Reserva</h2>
            <div className='grid grid-cols-12 gap-3 py-5 mt-3 border-dashed border-y-2 border-slate-200 dark:border-slate-700'>
                {pasajeros.map((pasajero) => (
                    <div className='col-span-12 md:col-span-4 ' key={pasajero.DNI}>
                        <div className='flex items-center content-between gap-4 pb-5 mt-5 md:flex-row '>
                            <div className='h-full shadow-xl w-20 p-[25px] bg-indigo-500 dark:bg-indigo-700 text-white flex justify-center items-center rounded-3xl'>
                                <FontAwesomeIcon className="text-2xl " icon={faTrain} />
                            </div>
                            <h2 className='flex items-center col-span-11 text-lg font-bold text-primary dark:text-indigo-500'>
                                {pasajero.nombre} {pasajero.apellidos} - {pasajero.DNI}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <section className='mt-5 border-black rounded'>
                <fieldset className='border-2 border-slate-300 dark:border-slate-700'>
                    <legend className='ml-5 font-semibold text-center text-md md:text-start dark:text-slate-300 text-slate-500'>Págo seguro con tarjeta visa o debito</legend>
                    <form className='grid grid-cols-12 gap-3 p-5'>
                        <input className='col-span-6 border rounded md:col-span-4 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700' type='text' placeholder='Nombre' />
                        <input className='col-span-6 border rounded md:col-span-4 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700' type='text' placeholder='Apellido/s' />
                        <input className='col-span-6 border rounded md:col-span-4 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700' type='text' placeholder='Nombre' />
                        <input className='col-span-6 border rounded md:col-span-4 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700' type="number" inputMode="numeric" pattern="[0-9\s]{13,19}"
                            autoComplete="cc-number" maxLength="19"
                            placeholder="xxxx xxxx xxxx xxxx" required />
                        <input className='col-span-3 border md:col-span-1 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700' type='number' placeholder='Mes exp.' />
                        <input className='col-span-3 border md:col-span-1 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700' type='number' placeholder='Año exp.' />
                        <input name="credit-expires" className="col-span-6 border cc-expires md:col-span-2 dark:bg-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700" type="tel" pattern="\d*" maxLength="4" placeholder="CVV" />
                    </form>
                </fieldset>
                <h3 className='mt-5 font-semibold text-center text-md md:text-start dark:text-slate-300'>
                    Págo express
                </h3>
                <div className='flex flex-col items-center gap-4 mt-5 mb-10 md:flex-row'>
                    <button onClick={shake} className='animate-twice animate-duration-300 animate-normal h-[44px] hover:bg-yellow-500 bg-yellow-400 font-semibold p-2  w-full md:w-fit flex items-center gap-2 shadow-2xl rounded border-2 border-yellow-500'>
                        Compra con
                        <img src={require('../assets/paypal.png')} alt='img' className='h-[15px] mt-1' />
                    </button>
                    <button onClick={shake} className='animate-twice animate-duration-300 animate-normal h-[44px] p-2 w-full md:w-[100px] flex font-semibold text-cyan-500 items-center gap-2  shadow-2xl rounded border-2 border-cyan-500'>
                        <img src={require('../assets/bizum.png')} alt='img' className='h-[30px]' />
                        Bizum
                    </button>
                    <button onClick={shake} className='animate-twice animate-duration-300 animate-normal h-[42px] w-full md:w-[100px] p-2 flex font-semibold text-black dark:bg-slate-200 dark:border-white items-center gap-2 shadow-2xl rounded border-2 border-black'>
                        <img src={require('../assets/apple.png')} alt='img' className='h-[30px]' />
                        Pay
                    </button>
                </div>
            </section>
            <Info />
        </div>
    )
}

export default DatosFinal