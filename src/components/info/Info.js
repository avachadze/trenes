import React from 'react'
import { FaWifi } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
function info() {
    const info = [{
        id: 1,
        icono: <FaEuroSign />,
        texto: " Selecciona método de págo que mejor te convenga"
    },
    {
        id: 1,
        icono: <FaEnvelopeOpenText />,
        texto: " Enviamos justificante por mail para que tengas cópia"
    },
    {
        id: 1,
        icono: <FaWifi />,
        texto: " Quedate conectado/a durante todo el viaje! :)"
    }]
    const info_seccion_inferior = [{
        id: 0,
        info: "“Nuestro planeta esta sufriendo cambios climaticos, por lo tanto, ofrecemos medio de transporte más sostenible y ecológico.”",
        footer: "Medio ambiente",
        descripcion: "Cuida de nuestro planeta"
    },
    {
        id: 1,
        info: "“Buscamos entre todas las posibilidades posibles en nuestro base de datos para garantizar precios razonables. Que la vida cuesta mucho!”",
        footer: "Precios",
        descripcion: "Mejores precios garantizados"
    },
    {
        id: 2,
        info: "“Los viajes no siempre salen bien.. Para garantizar el éxito de viaje, nuestros agentes te van a acompañar en todo el viaje.",
        footer: "Atención al cliente",
        descripcion: "Agentes disponibles 24/7"
    }
    ]
    return (
        <>
            <section className='grid flex-col grid-cols-12 gap-5 p-5 mt-5 transition border border-transparent rounded shadow-lg md:flex-row md:gap-5 bg-slate-100 dark:bg-slate-800 md:p-10 dark:hover:border-indigo-600'>

                {info.map((info) => (
                    <div className='flex flex-col col-span-12 text-indigo-600 dark:text-indigo-400 md:col-span-4'>
                        <span className="flex justify-center text-2xl ">
                            {info.icono}
                        </span>
                        <p className='px-16 font-semibold text-center text-indigo-500 md:px-0 dark:text-indigo-400'>
                            {info.texto}
                        </p>
                    </div>
                ))}
            </section>
            <section className='grid grid-cols-12 gap-5 mt-10'>
                {info_seccion_inferior.map((info) => (
                    <article key={info.id} className="col-span-12 p-8 duration-300 border border-transparent md:flex group bg-slate-100 dark:bg-slate-800 dark:hover:border dark:hover:border-indigo-600 md:col-span-4 rounded-xl md:p-0 hover:bg-indigo-500">
                        <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                            <div>
                                <p className="font-medium text-md group-hover:text-white dark:text-slate-400 ">
                                    {info.info}
                                </p>
                            </div>
                            <div className="font-medium">
                                <div className="text-sky-400 ">
                                    {info.descripcion}
                                </div>
                                <div className="text-slate-500 group-hover:text-slate-300 dark:text-slate-300 ">
                                    {info.footer}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </section>

        </>
    )
}

export default info