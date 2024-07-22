import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vueltas from './Vueltas'
import Idas from './Idas'
import Reserva from './Reserva'
function Header() {

    return (
        <BrowserRouter>
            <header className='h-[50px] flex items-center justify-center bg-black shadow-indigo-500 shadow-sm'>
               <h1 className='text-white font-bold'>
                Dit Gestion
               </h1>
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