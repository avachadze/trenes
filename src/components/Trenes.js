import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Filtrado from "./Filtrado";
import Modal from "./Modal";
import { useNavigate } from 'react-router-dom';
import Leaflet from "./Leaflet";

function Trenes({ txt, datos, insideIdas, idaR }) {
  const [active, setActive] = useState(null)
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [ida] = useState([]);
  const [vuelta] = useState([]);
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const [reserva] = useState([]);
  const checkParadas = document.getElementById('paradas');
  const checkCarrier = document.getElementById('carrier');
  const MIN = 0;
  const MAX = 200;
  const [values, setValues] = useState([MIN, MAX]);

  useEffect(() => {
    setFilter(datos);
  }, [datos]);

  function duration(e) {
    let hours = Math.floor(e / 60);
    let minutes = e % 60;
    return hours + "h " + minutes + "min";
  }
  function seleccion(e) {
    setOpen((prev) => true);
  }
  function datosSeleccion(e) {
    setModal((prev) => true);
  }

  function checkIfStops(f) {
    if (checkParadas.checked && f.stops === 0) {
      return true
    } else if (!checkParadas.checked) {
      return true
    }
  }
  const Filter = () => {
    setFilter(
      datos.filter((f) =>
        f.segments[0].companyName.includes(checkCarrier.value) &&
        checkIfStops(f) &&
        f.price.toString().toLowerCase() >= values[0] &&
        f.price.toString().toLowerCase() <= values[1]
      )
    );
  };
  const filtradoPrecio = (event) => {
    setValues(event);
    Filter();
  };
  function reservar() {
    if (insideIdas) {
      navigate('/vueltas', { state: ida })
    } else {
      reserva.push(idaR)
      reserva.push(vuelta)
      navigate('/reserva', { state: reserva })
    }
  }
  return (
    <div className="min-h-[71vh]  py-10 md:px-10  dark:bg-slate-900">
      <Filtrado onChange={Filter} filtradoPrecio={filtradoPrecio} values={values} MIN={MIN} MAX={MAX} />
      <h4 className="flex justify-end p-3 text-md dark:text-slate-400">
        Mostrando {filter.length} resultados
      </h4>
      {filter.length === 0 && <span className="flex justify-center">Sin resultados.</span>}
      <div className="grid gap-3 p-3 md:gap-10 md:grid-cols-2">
        {filter.map((tren) => (
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
            dark:hover:border-indigo-700
            dark:hover:text-slate-300
             dark:bg-slate-800
            transition ease-in-out delay-70  hover:-translate-y-1 hover:scale-100  duration-200
            min-h-[100px]
            bg-gray-100
            hover:bg-indigo-400
            hover:border-indigo-700
            hover:text-white
            rounded-lg
            font-bold
            text-slate-400
        "
            key={tren.id}
          >
            <div className="flex justify-between">
              <div className="text-black group-hover:text-white dark:text-slate-300">
                {tren.options[0].name}
              </div>
              <div className="flex gap-1">
                <div
                  className={
                    tren.stops === 0
                      ? " text-sm  bg-green-700 dark:bg-green-900 rounded text-white p-1 "
                      : " text-sm  bg-orange-400 dark:bg-orange-600 rounded text-white p-1"
                  }
                >
                  {tren.stops} parada{tren.stops < 1 && "s"}
                </div>
                <div className="p-1 text-sm text-white bg-red-400 rounded dark:bg-red-800">
                  {tren.segments[0].companyName}
                </div>
                <div className="p-1 text-sm text-white bg-indigo-500 rounded dark:bg-indigo-700">
                  {tren.price}€
                </div>
              </div>
            </div>
            <div className="pl-2 border-l-2 border-slate-400 group-hover:border-white">
              <div className="text-sm">{tren.departureStationName}</div>
              <div className="text-sm">{duration(tren.duration)} </div>
              <div className="text-sm">{tren.arrivalStationName}</div>
            </div>
            <div className="flex justify-between py-4">
              <div className="flex gap-2 ">
                <button
                  onClick={() => {
                    datosSeleccion(tren)
                    setActive(tren)
                    setActive((prev) => ({
                      ...prev,

                      arrivalTime: tren.arrivalTime.slice(-5),
                      departureTime: tren.departureTime.slice(-5),
                    }));
                  }}
                  className="px-4 py-2 font-semibold text-white bg-blue-500 rounded dark:bg-sky-900"
                >
                  Detalles
                </button>
                <button
                  onClick={() => {
                    seleccion(tren)
                    setActive(tren)
                    setActive((prev) => ({
                      ...prev,

                      arrivalTime: tren.arrivalTime.slice(-5),
                      departureTime: tren.departureTime.slice(-5),
                    }));
                  }}
                  className="px-4 py-2 text-white bg-green-500 rounded dark:bg-indigo-700"
                >
                  Seleccionar
                </button>

              </div>
              <div className="flex items-center justify-center">
                <img className="h-5" src={tren.carrier[0].logo} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* modal de reserva */}
      <Modal open={open} onClose={() => {
        setOpen(false)
        setActive(null)
      }}>
        <div className="text-center w-[400px]  flex flex-col justify-between">
          <div className="mx-5 my-4">
            <h3 className="text-lg font-black text-slate-800 dark:text-indigo-400">
              Reserva {txt}
            </h3>
            <div className="flex flex-col p-3 text-sm font-bold">
              <span className="text-indigo-700 lowercase">

                {active && active.departureStationName}

              </span>
              <FontAwesomeIcon className="text-indigo-700" icon={faArrowDown} />

              <div>
                {active && active.stops !== 0
                  ?
                  <>
                    <div className="text-indigo-500 lowercase ">
                      {active && active.segments[0].arrivalPosition.name}
                    </div>
                    <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />

                  </>
                  :
                  <>
                  </>
                }
              </div>
              <span className="text-indigo-300">
                {active && active.arrivalStationName}
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 text-white transition rounded bg-slate-500 dark:bg-indigo-700 dark:hover:bg-indigo-800"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </button>
            <button className="px-4 py-2 text-white transition bg-indigo-500 rounded dark:bg-indigo-700 dark:hover:bg-indigo-800" onClick={reservar} >
              Seleccionar
            </button>
          </div>
        </div>
      </Modal>
      {/* Modal de más detalles */}
      <Modal open={modal} onClose={() => {
        setModal(false)
        setActive(null)
      }}>
        <div className="text-center  w-[400px]  flex flex-col justify-between">
          <div className="mx-5 my-4">
            <h3 className="text-lg font-black text-slate-800 dark:text-indigo-400">
              Datos {txt} a
            </h3>
            <div className="flex flex-col p-3 text-sm font-bold">
              <span className="text-indigo-700 lowercase">

                {active && active.departureStationName}

              </span>
              <FontAwesomeIcon className="text-indigo-700" icon={faArrowDown} />

              <div>
                {active && active.stops !== 0
                  ?
                  <>
                    <div className="text-indigo-500 lowercase ">
                      {active && active.segments[0].arrivalPosition.name}
                    </div>
                    <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />

                  </>
                  :
                  <>
                  </>
                }
              </div>


              <span className="text-indigo-300">
                {active && active.arrivalStationName}
              </span>
            </div>
            <div className="flex flex-col pt-4 text-sm border-t-2 dark:text-slate-400 dark:border-indigo-400 border-slate-100">
              <table>
                <tbody>
                  <tr>
                    <th className="text-start">Duracion:</th>
                    <td className="text-start">{active && active.duration} </td>
                  </tr>
                  <tr>
                    <th className="text-start">Parada(s):</th>
                    <td className="text-start">{active && active.stops}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Pasajeros:</th>
                    <td className="text-start">{active && active.searchSummary.totalPassengers}</td>
                  </tr>
                  <tr>
                    <th className="text-start">Salida:</th>

                    <td className="text-start">{active && active.departureTime}</td>
                  </tr>
                  <tr>
                    <th className="text-start">llegada:</th>
                    <td className="text-start"> {active && active.arrivalTime}</td>
                  </tr>
                </tbody>
              </table>
              {active &&
                <div className="mt-5 leaflet-container">
                  <Leaflet tren={active && active.segments} stops={active && active.stops} />
                </div>
              }
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              className="px-4 py-2 text-white transition rounded bg-slate-500 dark:bg-indigo-700 dark:hover:bg-indigo-800 hover:bg-slate-700"
              onClick={() => setModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default Trenes;
