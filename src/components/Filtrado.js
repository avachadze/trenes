import React from 'react'

function Filtrado({ onChange }) {
    return (

        <div className="m-3 p-3 min-h-[300px]  shadow-md bg-gray-100 rounded-lg  border-indigo-500 flex flex-col">

            <h1 className="  text-2xl font-bold ">Filtrado</h1>
            <div>

                <select

                    className="
                    
                    bg-gray-50 
                    border-2
                    border-gray-300
                    text-gray-900 text-sm rounded-lg focus:border-indigo-700 block w-full p-2.5"
                    id="compName"
                    name="compName"
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
                <label
                >
                    <input  type="checkbox" class="rounded text-indigo-500" /> Sin paradas
                </label>
            </div>
        </div>

    )
}

export default Filtrado