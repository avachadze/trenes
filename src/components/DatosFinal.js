import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

function DatosFinal() {

    const { state } = useLocation();
    const [datos, setDatos] = useState(state);
    console.log(datos)

    return (
        <div>
        </div>
    )
}

export default DatosFinal