
import React, { useState } from 'react'
import Slider from 'react-slider'

function Filtrado({ onChange, filtradoPrecio, values, MIN, MAX  }) {


    return (

        <div className="m-3 p-3 pb-10  shadow-md bg-gray-100 rounded-lg  border-indigo-500 flex flex-col">

            <h1 className="  text-2xl font-bold ">Filtrado</h1>
            <div className='grid grid-cols-12'>
                <select
                    className="
                    col-span-12
                    bg-gray-50 
                    border-2
                    border-gray-300
                    text-gray-900 text-sm rounded-lg focus:border-indigo-700 block w-full p-2.5"
                    name="selectorTren"
                    onChange={onChange}
                    id='carrier'
                >
                    <option value="">Elige tu carrier</option>
                    <option value="AVLO">AVLO</option>
                    <option value="AVE">Ave</option>
                    <option value="AVE INT">AVE INT</option>
                    <option value="EUROMED">EUROMED</option>
                    <option value="Intercit">Intercit</option>
                    <option value="MD">MD</option>
                    <option value="REG.EXP.">REG.EXP.</option>
                </select>


                <div className='my-5 col-span-6'>
                    <small className='flex justify-center'>
                        Rango actual:  {values[0]} - {values[1]}€
                    </small>
                    <Slider
                        id="anio"
                        className="slider"
                        onChange={filtradoPrecio}
                        value={values}
                        min={MIN}
                        max={MAX}
                    />
                </div>
                <div className='sm:col-span-2  col-span-6 flex items-center justify-center mt-4'>
                    <label>
                        <input onChange={onChange} id='paradas' type="checkbox" className="rounded text-indigo-500" /> Sin paradas
                    </label>
                </div>
            </div>
        </div>

    )
}

export default Filtrado