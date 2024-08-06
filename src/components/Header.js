import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vueltas from './Vueltas'
import Idas from './Idas'
import Reserva from './Reserva'
import DatosFinal from './DatosFinal'
function Header() {

    return (
        <BrowserRouter>
            <header className=' h-[25vh] grid grid-cols-12 shadow-xl border-b-2 '>
                <div className='tren  col-span-full flex justify-center sm:justify-end items-center sm:pr-10'>
                    <h1 className='text-white text-center underline decoration-wavy decoration-2 '>
                        Dit Gestion
                    </h1>
                </div>
            </header>
            <Routes>
                <Route index element={<Idas />}></Route>
                <Route path='vueltas' element={<Vueltas />}></Route>
                <Route path='reserva' element={<Reserva />}></Route>
                <Route path='datos' element={<DatosFinal />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Header