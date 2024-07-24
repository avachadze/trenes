
import React, { useState } from 'react'
import Slider from 'react-slider'
const MIN = 100;
const MAX = 150;
function Filtrado({ onChange }) {

    const [values, setValues] = useState([MIN, MAX]);

    console.log("values: ", values)
    return (

        <div className="m-3 p-3 pb-10  shadow-md bg-gray-100 rounded-lg  border-indigo-500 flex flex-col">

            <h1 className="  text-2xl font-bold ">Filtrado</h1>
            <div>
                <select
                    className="
                    bg-gray-50 
                    border-2
                    border-gray-300
                    text-gray-900 text-sm rounded-lg focus:border-indigo-700 block w-full p-2.5"
                    id="selectorTren"
                    name="selectorTren"
                    onChange={onChange}
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


                <div className='my-5'>
                    <small className='flex justify-center'>
                        Rango actual:  {values[0]} - {values[1]}€
                    </small>
                    <Slider
                        id="anio"
                        className="slider"
                        onChange={setValues}
                        value={values}
                        min={MIN}
                        max={MAX}
                    />
                </div>
                <label>
                    <input onChange={onChange} type="checkbox" className="rounded text-indigo-500" /> Sin paradas
                </label>
            </div>
        </div>

    )
}

export default Filtrado