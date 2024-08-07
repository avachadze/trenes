import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faEnvelope, faFaceLaughWink } from '@fortawesome/free-solid-svg-icons';
function info() {
    return (
        <>
            <section className='grid md:flex-row flex-col  gap-5 md:gap-5  grid-cols-12 mt-5 bg-slate-100 dark:bg-slate-800 p-10 rounded shadow-lg border border-transparent dark:hover:border-indigo-600 transition '>
                <div className='flex flex-col  text-indigo-600 dark:text-indigo-400 col-span-12 md:col-span-4'>
                    <FontAwesomeIcon className=" text-2xl" icon={faEuroSign} />
                    <p className='font-semibold px-16 text-center md:px-0  text-indigo-500 dark:text-indigo-400'>
                        Selecciona método de págo que mejor te convenga
                    </p>
                </div>
                <div className='flex flex-col  text-indigo-600 dark:text-indigo-400 col-span-12 md:col-span-4'>
                    <FontAwesomeIcon className=" text-2xl" icon={faEnvelope} />
                    <p className='font-semibold px-16 text-center md:px-0  text-indigo-500 dark:text-indigo-400'>
                        Enviamos justificante por mail para que tengas cópia
                    </p>
                </div>
                <div className='flex flex-col  text-indigo-600 dark:text-indigo-400 col-span-12 md:col-span-4'>
                    <FontAwesomeIcon className=" text-2xl" icon={faFaceLaughWink} />
                    <p className='font-semibold px-16 text-center md:px-0  text-indigo-500 dark:text-indigo-400'>
                        Disfruta de tu viaje! :)
                    </p>
                </div>
            </section>
            <section className='mt-10 grid grid-cols-12 gap-5'>
                <figure className="md:flex group bg-slate-100 dark:bg-slate-800 dark:hover:border border border-transparent dark:hover:border-indigo-600  col-span-12 md:col-span-4 rounded-xl p-8 md:p-0  hover:bg-indigo-500 duration-300">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-md font-medium group-hover:text-white dark:text-slate-400 ">
                                “Nuestro planeta esta sufriendo cambios climaticos, por lo tanto nos comprometemos a ofrecer medio de transporte más sostenible y ecológico.
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-400 ">
                                Medio ambiente
                            </div>
                            <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300 ">
                                Cuida de nuestro planeta
                            </div>
                        </figcaption>
                    </div>
                </figure>
                <figure className="group  md:flex bg-slate-100 dark:bg-slate-800 dark:hover:border border border-transparent dark:hover:border-indigo-600  col-span-12 md:col-span-4 rounded-xl p-8 md:p-0   hover:bg-indigo-500 duration-300">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-md font-medium group-hover:text-white dark:text-slate-400">
                                “Buscamos entre todas las posibilidades en tu ciudad para que podamos garantizar precios razonables. Que la vida cuesta mucho!  ”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-400 ">
                                Precios
                            </div>
                            <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300  ">
                                Mejores precios garantizados
                            </div>
                        </figcaption>
                    </div>
                </figure>
                <figure className="group md:flex bg-slate-100 dark:bg-slate-800 dark:hover:border border border-transparent dark:hover:border-indigo-600  col-span-12 md:col-span-4 rounded-xl p-8 md:p-0  hover:bg-indigo-500 duration-300 ">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <p className="text-md font-medium group-hover:text-white dark:text-slate-400">
                                “Sabemos que los viajes no siempre salen bien.. para ello decidimos tener a nuestros agentes a tu disposición para que te puedan acompañar en todo el”
                            </p>
                        </blockquote>
                        <figcaption className="font-medium">
                            <div className="text-sky-400 ">
                                Atención al cliente
                            </div>
                            <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300">
                                Agentes disponibles 24/7
                            </div>
                        </figcaption>
                    </div>
                </figure>
            </section>
        </>
    )
}

export default info