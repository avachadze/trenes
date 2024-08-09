import React, { useEffect } from 'react'
import Info from "./info/Info";
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrain } from '@fortawesome/free-solid-svg-icons';
function DatosFinal() {

    const { state } = useLocation();
    const datos = state;
    const pasajeros = [];
    /*     useEffect(() => {
            window.scrollTo(0, 0);
        }, []) */
    for (let i = 0; i < datos.length; i++) {
        pasajeros.push({ nombre: datos.nombres[i], apellidos: datos.apellidos[i], DNI: datos.DNI[i] })
    }
    function shake(e) {
        console.log(e.target)
        e.target.classList.add('animate-shake')
        setTimeout(() => {
            e.target.classList.remove('animate-shake');
        }, 2000)
    }
    return (
        <div className='min-h-[70vh] p-5 md:p-10 dark:bg-slate-900'>
            <h2 className='text-lg font-bold text-center md:text-start dark:text-slate-400'>Datos Reserva</h2>
            <div className='border-y-2 border-dashed border-slate-200 dark:border-slate-700  grid grid-cols-12  gap-3 py-5 mt-3'>
                {pasajeros.map((pasajero) => (
                    <div className='md:col-span-4 col-span-12 ' key={pasajero.DNI}>
                        <div className='flex pb-5  items-center md:flex-row  gap-4 content-between mt-5 '>
                            <div className='h-full shadow-xl w-20 p-[25px] bg-indigo-500 dark:bg-indigo-700 text-white flex justify-center items-center rounded-3xl'>
                                <FontAwesomeIcon className=" text-2xl" icon={faTrain} />
                            </div>
                            <h2 className='col-span-11 text-lg font-bold flex items-center text-primary dark:text-indigo-500'>
                                {pasajero.nombre} {pasajero.apellidos} - {pasajero.DNI}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            <section className='mt-5  border-black rounded'>
                <fieldset className='border-2 border-slate-300 dark:border-slate-700'>
                    <legend className='text-md font-semibold text-center md:text-start dark:text-slate-300 ml-5 text-slate-500'>Págo seguro con tarjeta visa o debito</legend>
                    <form className='grid grid-cols-12 gap-3 p-5'>
                        <input className='md:col-span-4 col-span-6 rounded dark:bg-slate-700  dark:text-slate-300 border border-slate-300 dark:border-slate-700' type='text' placeholder='Nombre' />
                        <input className='md:col-span-4 col-span-6 rounded dark:bg-slate-700  dark:text-slate-300 border border-slate-300 dark:border-slate-700' type='text' placeholder='Apellido/s' />
                        <input className='md:col-span-4 col-span-6 rounded dark:bg-slate-700  dark:text-slate-300 border border-slate-300 dark:border-slate-700' type='text' placeholder='Nombre' />
                        <input className='md:col-span-4 col-span-6 rounded dark:bg-slate-700  dark:text-slate-300 border border-slate-300 dark:border-slate-700' type="number" inputMode="numeric" pattern="[0-9\s]{13,19}"
                            autoComplete="cc-number" maxLength="19"
                            placeholder="xxxx xxxx xxxx xxxx" required />
                        <input className='md:col-span-1 col-span-3 dark:bg-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700' type='number' placeholder='Mes exp.' />
                        <input className='md:col-span-1 col-span-3 dark:bg-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700' type='number' placeholder='Año exp.' />
                        <input name="credit-expires" className="cc-expires md:col-span-2 col-span-6 dark:bg-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700" type="tel" pattern="\d*" maxLength="4" placeholder="CVV" />
                    </form>
                </fieldset>
                <h3 className='text-md font-semibold text-center md:text-start dark:text-slate-300 mt-5'>
                    Págo express
                </h3>
                <div className='flex flex-col md:flex-row  gap-4 mt-5 mb-10 items-center'>
                    <button onClick={shake} className='animate-twice animate-duration-300 animate-normal h-[44px] hover:bg-yellow-500 bg-yellow-400 font-semibold p-2  w-full md:w-[240px] flex items-center gap-2 shadow-2xl rounded border-2 border-yellow-500'>
                        Compra segura con
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