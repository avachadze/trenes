import React from 'react'

function Footer() {
    return (
        <footer className='pt-3 pb-5 shadow-inner  bg-gray-100  flex  flex-col items-center font-semibold w-full'>
            <h2 className='bg-gradient-to-r text-center from-cyan-600  to-indigo-500 inline-block text-transparent bg-clip-text'>
                Dit Gestion
            </h2>
            <div className='grid sm:grid-cols-3 w-full p-3 text-sm text-gray-500 sm:gap-6'>
                <ul>
                    <li>
                        Tel: 953 49 30 28
                    </li>
                    <li>
                        Email: ditgestion@info.com
                    </li>
                </ul>
                <ul>
                    <li>
                        Dirección: Astigarrako Bidea, 2, 5 derecha, 20180, Gipuzkoa
                    </li>
                    <li>
                        Horario: 953 49 30 28
                    </li>
                </ul>
                <ul>
                    <li>
                        Copyright: Dit Gestion 2024
                    </li>
                    <li>
                        Web: Dit Gestion
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer