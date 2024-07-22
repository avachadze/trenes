import React, {useState,useEffect} from 'react'
import Trenes from './Trenes'
import data from "../data/data.json";


function Idas(props) {

  const [datos,setDatos] = useState([]);
  useEffect(() => {
    setDatos(data.idas);
   
  }, []);

  
  return (
    <div>
        <Trenes txt="ida" datos={datos} insideIdas={true} />

    </div>
  )
}

export default Idas