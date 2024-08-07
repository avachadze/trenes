import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vueltas from './Vueltas'
import Idas from './Idas'
import Reserva from './Reserva'
import DatosFinal from './DatosFinal'
function Header() {
    const [dark, setDark] = React.useState(false);
    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }
    return (
        <BrowserRouter>
            <header className='tren dark:bg-blend-multiply h-[25vh] grid grid-cols-12 shadow-xl  '>
                <div className='col-span-full flex  justify-center md:justify-end items-center md:pr-10'>
                    <div>
                        <h1 className='text-white text-center underline decoration-wavy decoration-2 '>
                            Dit Gestion
                        </h1>
                        <label class="inline-flex items-center cursor-pointer w-full justify-end">
                            <input onChange={() => darkModeHandler()} type="checkbox" class="switch__input" id="Switch" />
                            <label class="switch__label" for="Switch">
                                <span class="switch__indicator"></span>
                                <span class="switch__decoration"></span>
                            </label>
                        </label>
                    </div>
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