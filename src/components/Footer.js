import React from 'react'


import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaTrainSubway } from "react-icons/fa6";



function Footer() {
    return (
        <footer className='flex flex-col items-center w-full pt-3 pb-5 font-semibold shadow-inner dark:bg-slate-950 bg-slate-100'>
            <div className='grid justify-between w-full grid-cols-2 px-10 md:grid-cols-3'>
                <span className='inline-block text-sm text-transparent titulo_footer bg-gradient-to-r from-cyan-600 to-indigo-500 bg-clip-text'>
                    &copy; 2023/2024   Dit Gestion
                </span>
                <span className='justify-center hidden text-3xl text-indigo-800 animate-pulse dark:text-slate-700 md:flex'>
                    <FaTrainSubway />
                </span>
                <ul className='flex justify-end gap-1'>
                    <li className='bg-blue-900 rounded-full text-white w-[25px] h-[25px] flex justify-center items-center hover:scale-125 transition'>
                        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Des_ES">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className='bg-black dark:bg-white dark:text-black rounded-full  text-white w-[25px] h-[25px] flex justify-center items-center hover:scale-125 transition'>
                        <a target='_blank' rel="noreferrer" href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F%3Flocale%3Des_ES">
                            <BsTwitterX />
                        </a>
                    </li>
                </ul>
            </div>
            <div className='flex flex-col w-full p-3 px-10 text-sm text-center md:justify-between md:flex-row md:text-start text-slate-500 md:gap-6'>
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
                        Copyright: Dit Gestion 2023-2024
                    </li>
                    <li>
                        Web: Dit Gestion
                    </li>
                </ul>
            </div>
        </footer >
    )
}

export default Footer