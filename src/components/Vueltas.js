import React, { useState, useEffect } from 'react';
import data from "../data/data.json";
import Trenes from "./Trenes";
import { useLocation } from 'react-router-dom';
function Vueltas() {
  const [datos, setDatos] = useState([]);
  const { state } = useLocation();
  const idaReserva = state;
 
  useEffect(() => {
    setDatos(data.vueltas);

  }, []);

  return <div>

    <Trenes txt="vuelta" datos={datos} insideIdas={false} idaR ={state} />
  </div>;
}

export default Vueltas;
