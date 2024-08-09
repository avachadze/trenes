import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWifi } from "react-icons/fa";

import { faEuroSign, faEnvelope } from '@fortawesome/free-solid-svg-icons';
function info() {
    return (
        <>
            <section className='grid flex-col grid-cols-12 gap-5 p-5 mt-5 transition border border-transparent rounded shadow-lg md:flex-row md:gap-5 bg-slate-100 dark:bg-slate-800 md:p-10 dark:hover:border-indigo-600'>
                <div className='flex flex-col col-span-12 text-indigo-600 dark:text-indigo-400 md:col-span-4'>
                    <FontAwesomeIcon className="text-2xl " icon={faEuroSign} />
                    <p className='px-16 font-semibold text-center text-indigo-500 md:px-0 dark:text-indigo-400'>
                        Selecciona método de págo que mejor te convenga
                    </p>
                </div>
                <div className='flex flex-col col-span-12 text-indigo-600 dark:text-indigo-400 md:col-span-4'>
                    <FontAwesomeIcon className="text-2xl " icon={faEnvelope} />
                    <p className='px-16 font-semibold text-center text-indigo-500 md:px-0 dark:text-indigo-400'>
                        Enviamos justificante por mail para que tengas cópia
                    </p>
                </div>
                <div className='flex flex-col col-span-12 text-indigo-600 dark:text-indigo-400 md:col-span-4'>
                    <span className="flex justify-center text-2xl ">
                        <FaWifi />
                    </span>
                    <p className='px-16 font-semibold text-center text-indigo-500 md:px-0 dark:text-indigo-400'>
                        Quedate conectado/a durante todo el viaje! :)
                    </p>
                </div>
            </section>
            <section className='grid grid-cols-12 gap-5 mt-10'>
                <article className="col-span-12 p-8 duration-300 border border-transparent md:flex group bg-slate-100 dark:bg-slate-800 dark:hover:border dark:hover:border-indigo-600 md:col-span-4 rounded-xl md:p-0 hover:bg-indigo-500">
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <div>
                            <p className="font-medium text-md group-hover:text-white dark:text-slate-400 ">
                                “Nuestro planeta esta sufriendo cambios climaticos, por lo tanto nos comprometemos a ofrecer medio de transporte más sostenible y ecológico.
                            </p>
                        </div>
                        <div className="font-medium">
                            <div className="text-sky-400 ">
                                Medio ambiente
                            </div>
                            <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300 ">
                                Cuida de nuestro planeta
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-span-12 p-8 duration-300 border border-transparent group md:flex bg-slate-100 dark:bg-slate-800 dark:hover:border dark:hover:border-indigo-600 md:col-span-4 rounded-xl md:p-0 hover:bg-indigo-500">
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <div>
                            <p className="font-medium text-md group-hover:text-white dark:text-slate-400">
                                “Buscamos entre todas las posibilidades en tu ciudad para que podamos garantizar precios razonables. Que la vida cuesta mucho!  ”
                            </p>
                        </div>
                        <div className="font-medium">
                            <div className="text-sky-400 ">
                                Precios
                            </div>
                            <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300 ">
                                Mejores precios garantizados
                            </div>
                        </div>
                    </div>
                </article>
                <article className="col-span-12 p-8 duration-300 border border-transparent group md:flex bg-slate-100 dark:bg-slate-800 dark:hover:border dark:hover:border-indigo-600 md:col-span-4 rounded-xl md:p-0 hover:bg-indigo-500 ">
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                        <div>
                            <p className="font-medium text-md group-hover:text-white dark:text-slate-400">
                                “Sabemos que los viajes no siempre salen bien.. para ello decidimos tener a nuestros agentes a tu disposición para que te puedan acompañar en todo el”
                            </p>
                        </div>
                        <div className="font-medium">
                            <div className="text-sky-400 ">
                                Atención al cliente
                            </div>
                            <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300">
                                Agentes disponibles 24/7
                            </div>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}

export default info