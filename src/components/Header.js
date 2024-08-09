import React, {useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vueltas from './Vueltas'
import Idas from './Idas'
import Reserva from './Reserva'
import DatosFinal from './DatosFinal'
function Header() {

    const [isDark, setDark] = useState();
    let color = localStorage.getItem("theme");
   
    useEffect(() => {
        if (color === "dark"){
       setDark(true)
        }else{
           
            setDark(false)
    
        }
        document.body.classList.add(color);
    }, [color]);



    const darkModeHandler = () => {
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("dark");
            setDark(false);
          } else {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("dark");
            setDark(true);
          }
    }

    return (
        <BrowserRouter>
            <header className='tren dark:bg-blend-multiply h-[25vh] grid grid-cols-12 shadow-xl '>
                <div className='flex items-center justify-center col-span-full md:justify-end md:pr-10'>
                    <div className='flex flex-row justify-between w-full px-4 md:block md:w-fit'>
                        <h1 className='text-center text-white underline decoration-wavy decoration-2 '>
                            Dit Gestion
                        </h1>
                            <label className="inline-flex items-center justify-end cursor-pointer md:w-full">
                                <input onChange={() => darkModeHandler()} type="checkbox" checked={isDark ? 'checked' : ''} className="switch__input" id="Switch" />
                                <label className="switch__label" htmlFor="Switch">
                                    <span className="switch__indicator"></span>
                                    <span className="switch__decoration"></span>
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