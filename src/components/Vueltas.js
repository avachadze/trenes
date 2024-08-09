import React from 'react';
import data from "../data/data.json";
import Trenes from "./Trenes";
import { useLocation } from 'react-router-dom';
function Vueltas() {
  const datos = data.vueltas;
  const { state } = useLocation();



  return (
    <>
      <Trenes txt="vuelta" datos={datos} insideIdas={false} idaR={state} />
    </>
  )
}

export default Vueltas; 