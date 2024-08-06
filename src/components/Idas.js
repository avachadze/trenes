import React, {useState,useEffect} from 'react'
import Trenes from './Trenes'
import data from "../data/data.json";

function Idas(props) {

  const [datos,setDatos] = useState([]);
  useEffect(() => {
    setDatos(data.idas);
   
  }, []);

  return (
    <>
        <Trenes txt="ida" datos={datos} insideIdas={true} />
    </>
  )
}

export default Idas