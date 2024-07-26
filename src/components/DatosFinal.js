import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function DatosFinal() {

    const { state } = useLocation();
    const [datos, setDatos] = useState(state);
    for(let i= 0; i<datos.length; i++){
        console.log(datos.nombres[i])
    }
 

    return (
        <div className='min-h-[80vh] p-10'>

        </div>
    )
}

export default DatosFinal