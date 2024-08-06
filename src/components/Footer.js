import React from 'react'

function Footer() {
    return (
        <footer className='pt-3 pb-5 shadow-inner  bg-slate-100  flex  flex-col items-center font-semibold w-full'>
            <span className='titulo_footer bg-gradient-to-r text-sm text-center from-cyan-600  to-indigo-500 inline-block text-transparent bg-clip-text'>
          2023/2024  &copy;  Dit Gestion
            </span>
            <div className='flex px-10 md:justify-between flex-col md:flex-row w-full p-3 text-center md:text-start text-sm text-gray-500 md:gap-6'>
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