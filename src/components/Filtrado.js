
import React from 'react'
import Slider from 'react-slider'

function Filtrado({ onChange, filtradoPrecio, values, MIN, MAX }) {

    return (

        <div className="flex flex-col p-3 pb-10 m-3 bg-gray-100 border-indigo-500 rounded-lg shadow-md dark:bg-slate-800">

            <h2 className="mb-2 text-2xl font-bold dark:text-slate-300">Filtrado</h2>
            <div className='grid grid-cols-12'>
                <select
                    className=" 
                    col-span-12
                    bg-gray-50 
                    dark:bg-slate-800
                    dark:border-slate-900
                    border-2
                    border-gray-300
                    dark:text-slate-300
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


                <div className='col-span-6 my-5'>
                    <small className='flex justify-center dark:text-slate-400'>
                        Rango actual:  {values[0]} - {values[1]}€
                    </small>
                    <Slider
                        id="anio"
                        className="bg-gray-200 slider dark:bg-slate-600 "
                        onChange={filtradoPrecio}
                        value={values}
                        min={MIN}
                        max={MAX}
                    />
                </div>
                <div className='flex items-center justify-center col-span-6 mt-4 md:col-span-2'>
                    <label>
                        <input onChange={onChange} id='paradas' type="checkbox" className="text-indigo-500 rounded dark:bg-slate-800 dark:border-2 dark:border-primary" />
                        <span className='ml-2 dark:text-slate-400 '>
                            Sin paradas
                        </span>
                    </label>
                </div>
            </div>
        </div>

    )
}

export default Filtrado