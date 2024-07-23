import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vueltas from './Vueltas'
import Idas from './Idas'
import Reserva from './Reserva'
import logo from '../assets/tren.png'
function Header() {

    return (
        <BrowserRouter>
            <header className='grid grid-cols-12 bg-black'>
                <div className='col-span-full flex justify-between items-center p-5'>
                    <img src={logo} className='h-20' alt='aefaef' />
                    <h1 className='text-white font-bold'>Dit Gestion</h1>
                </div>
              {/*   <div className='col-span-full flex justify-between items-center p-5'>

                    <div className='h-[60px] w-full sm:pr-4  flex justify-center '>
                        <div className='bg-indigo-400 border-b-4 border-indigo-500 shadow-md shadow-indigo-700 rounded w-full'>
                            <ul className='text-white font-semibold flex items-center'>

                                <li>Hola</li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-[60px] w-full sm:pl-4  flex justify-center '>
                        <div className='bg-indigo-400 border-b-4 border-indigo-500 shadow-md shadow-indigo-700 rounded w-full'>
                            aef
                        </div>
                    </div>
                </div> */}
            </header>
            <Routes>
                <Route index element={<Idas />}></Route>
                <Route path='vueltas' element={<Vueltas />}></Route>
                <Route path='reserva' element={<Reserva />}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default Header