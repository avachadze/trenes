import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import data from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import Buscador from "./Buscador";
function Trenes() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [idas, SetIdas] = useState([]);
  const [ida, setIda] = useState([]);
  const [filter, setFilter] = useState([]);
  const [vueltas, SeVueltas] = useState([]);
  useEffect(() => {
    SetIdas(data.idas);
    SeVueltas(data.vueltas);
    setFilter(idas);
  }, [idas, vueltas]);
  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return hours + "h " + minutes + "min";
  }
  function seleccion(e) {
    setOpen((prev) => true);
    setIda((prev) => e);
    setIda((prev) => ({
      ...prev,
      arrivalStationName: e.arrivalStationName.toString().toLowerCase(),
      departureStationName: e.departureStationName.toString().toLowerCase(),
    }));
  }
  const Filter = (e) => {
    setFilter(
      idas.filter((f) =>
        f.options[0].name.toLowerCase().includes(e.target.value)
      )
    );
  };

  return (
    <>
      <div className="m-3 p-3 min-h-[300px]  shadow-md bg-gray-100 rounded-lg  border-indigo-500 flex flex-col">
        <h1 className="text-2xl font-bold ">Filtrado</h1>
        <div>
          <input type="text" onChange={Filter}></input>

          <select name="carrier">
            <option value="">Elige tu carrier</option>
            <option value="AVLO">AVLO</option>
            <option value="Ave">Ave</option>
            <option value="AVE INT">AVE INT</option>
            <option value="EUROMED">EUROMED</option>
            <option value="Intercit">Intercit</option>
            <option value="MD">MD</option>
            <option value="REG.EXP.">REG.EXP.</option>
          </select>
        </div>
      </div>
      <h2 className="p-3 flex justify-end text-lg">
        Mostrando {filter.length} resultados
      </h2>
      <div className="gap-3 grid grid-cols-2  p-3">
        {filter.map((ida) => (
          <div
            className="
            group 
            shadow-md
            flex
            flex-col
            justify-around
            pt-4
            pl-6
            pr-3
            border-l-4 border-indigo-500
            transition ease-in-out delay-70  hover:-translate-y-1 hover:scale-100  duration-200
            min-h-[100px]
            bg-gray-100
            hover:bg-indigo-400
            hover:border-indigo-700
            hover:text-white
            rounded-lg
            font-bold
            text-gray-400
        "
            key={ida.id}
          >
            <div className="flex justify-between">
              <div className="text-black group-hover:text-white">
                {ida.options[0].name}
              </div>
              <div className="flex gap-1">
                <div
                  className={
                    ida.stops === 0
                      ? " text-sm  bg-green-700 rounded text-white p-1 "
                      : " text-sm  bg-orange-400 rounded text-white p-1"
                  }
                >
                  {ida.stops} parada{ida.stops < 1 && "s"}
                </div>
                <div className=" text-sm bg-red-400 rounded text-white p-1 ">
                  {ida.segments[0].companyName}
                </div>
                <div className=" text-sm bg-indigo-500 rounded text-white p-1 ">
                  {ida.price}€
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-400 group-hover:border-white pl-2">
              <div className="text-sm">{ida.departureStationName}</div>
              <div className="text-sm">{duration(ida.duration)} </div>
              <div className="text-sm">{ida.arrivalStationName}</div>
            </div>

            <div className="flex justify-between py-4">
              <div className="flex gap-2 ">
                <button
                  onClick={() => setModal(true)}
                  className="bg-blue-500 font-semibold text-white py-2 px-4  rounded"
                >
                  Detalles
                </button>
                <button
                  onClick={() => seleccion(ida)}
                  className=" bg-green-500 text-white py-2 px-4   rounded"
                >
                  Seleccionar
                </button>
              </div>
              <div className="flex justify-center items-center">
                <img className="h-5" src={ida.carrier[0].logo} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* modal de reserva */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-[400px]  flex flex-col justify-between">
          <div className="mx-auto my-4">
            <h3 className="text-lg font-black text-gray-800">Reservar ida?</h3>

            <p className="text-sm text-gray-500">
              Te gustaría reservar este billete?
            </p>
            <div className="text-sm  font-bold flex flex-col p-3">
              <span className="text-indigo-700">
                {" "}
                {ida.departureStationName}
              </span>
              <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />
              {/*               <span className="text-indigo-500 "> {duration(ida.duration)}</span>
              <FontAwesomeIcon className="text-indigo-400" icon={faArrowDown} /> */}
              <span className="text-indigo-300"> {ida.arrivalStationName}</span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className=" bg-gray-500 text-white py-2 px-4   rounded"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
            <button class="bg-green-500 text-white py-2 px-4   rounded">
              Reservar
            </button>
          </div>
        </div>
      </Modal>
      {/* Modal de más detalles */}
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className="text-center w-56">
          <div className="mx-auto my-4 w-300">
            <h3 className="text-lg font-black text-gray-800">Datos</h3>
            <p className="text-sm text-gray-500">datos</p>
          </div>
          <div className="flex gap-4">
            <button
              className=" bg-gray-500 text-white py-2 px-4   rounded"
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
            <button class="bg-green-500 text-white py-2 px-4   rounded">
              Reservar
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default Trenes;
