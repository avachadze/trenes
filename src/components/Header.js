import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vueltas from './Vueltas'
import Idas from './Idas'
import Reserva from './Reserva'
import logo from '../assets/tren.png'
function Header() {

    return (
        <BrowserRouter>
            <header className='h-[15vh] grid grid-cols-12 bg-black'>
                <div className='col-span-full flex justify-between items-center p-5'>
                    <img src={logo} className='h-20' alt='aefaef' />
                    <h1 className='text-white font-bold'>Dit Gestion</h1>
                </div>
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