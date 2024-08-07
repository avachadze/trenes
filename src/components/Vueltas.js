import React, { useState, useEffect } from 'react';
import data from "../data/data.json";
import Trenes from "./Trenes";
import { useLocation } from 'react-router-dom';
function Vueltas() {
  const [datos, setDatos] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    setDatos(data.vueltas);
  }, []);

  return (
    <>
      <Trenes txt="vuelta" datos={datos} insideIdas={false} idaR={state} />
    </>
  )
}

export default Vueltas; 