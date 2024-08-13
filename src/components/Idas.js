import React from 'react'
import Trenes from './Trenes'
import data from "../data/data.json";

function Idas(props) {
  const datos = data.idas;


  return (
    <>
      <Trenes txt="ida" datos={datos} insideIdas={true} />
    </>
  )
}

export default Idas