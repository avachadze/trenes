import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Filtrado from "./Filtrado";
import Modal from "./Modal";
import { useNavigate } from 'react-router-dom';



function Trenes({ txt, datos, insideIdas, idaR }) {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [ida, setIda] = useState([]);
  const [vuelta, setVuelta] = useState([]);
  const [filter, setFilter] = useState([]);
  const navigate = useNavigate();
  const [reserva] = useState([]);
  const [pasajeros, setPasajeros] = useState();
  const checkParadas = document.getElementById('paradas');
  const checkCarrier = document.getElementById('carrier');
  const MIN = 0;
  const MAX = 200;
  const [values, setValues] = useState([MIN, MAX]);
  const [parada, setParada] = useState();

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
    setSeleccionado(e)
  }
  function datosSeleccion(e) {
    setModal((prev) => true);
    setSeleccionado(e)
  }

  function setSeleccionado(e) {
    if (insideIdas) {
      setIda((prev) => e);
      setIda((prev) => ({
        ...prev,
        arrivalStationName: e.arrivalStationName.toString().toLowerCase(),
        departureStationName: e.departureStationName.toString().toLowerCase(),
        arrivalTime: e.arrivalTime.slice(-5),
        departureTime: e.departureTime.slice(-5),
      }));
      setParada(e.segments[0].arrivalPosition.name)

      console.log(e.segments[0].arrivalPosition.name)
    } else {
      setVuelta((prev) => e)
      setVuelta((prev) => ({
        ...prev,
        arrivalStationName: e.arrivalStationName.toString().toLowerCase(),
        departureStationName: e.departureStationName.toString().toLowerCase(),
        arrivalTime: e.arrivalTime.slice(-5),
        departureTime: e.departureTime.slice(-5),
      }));
      setParada(e.segments[0].arrivalPosition.name)

    }
    setPasajeros(e.searchSummary.totalPassengers)
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

      <h4 className="p-3 flex justify-end text-md dark:text-slate-400">
        Mostrando {filter.length} resultados
      </h4>
      {filter.length === 0 && <span className="flex justify-center">Sin resultados.</span>}
      <div className="gap-3 grid md:grid-cols-2  p-3">

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
                <div className=" text-sm bg-red-400 dark:bg-red-800 rounded text-white p-1 ">
                  {tren.segments[0].companyName}
                </div>
                <div className=" text-sm bg-indigo-500 dark:bg-indigo-700 rounded text-white p-1 ">
                  {tren.price}€
                </div>

              </div>
            </div>

            <div className="border-l-2 border-slate-400 group-hover:border-white pl-2">
              <div className="text-sm">{tren.departureStationName}</div>
              <div className="text-sm">{duration(tren.duration)} </div>
              <div className="text-sm">{tren.arrivalStationName}</div>
            </div>

            <div className="flex justify-between py-4">
              <div className="flex gap-2 ">
                <button
                  onClick={() => datosSeleccion(tren)}
                  className="bg-blue-500 dark:bg-sky-900 font-semibold text-white py-2 px-4  rounded"
                >
                  Detalles
                </button>
                <button
                  onClick={() => seleccion(tren)}
                  className=" bg-green-500 dark:bg-indigo-700  text-white py-2 px-4   rounded"
                >
                  Seleccionar
                </button>

              </div>
              <div className="flex justify-center items-center">
                <img className="h-5" src={tren.carrier[0].logo} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* modal de reserva */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-[400px]  flex flex-col justify-between">
          <div className="mx-auto my-4">
            <h3 className="text-lg font-black text-slate-800 dark:text-indigo-400">
              Reserva {txt}
            </h3>


            <div className="text-sm  font-bold flex flex-col p-3">
              <span className="text-indigo-700">
                {insideIdas ? ida.departureStationName : vuelta.departureStationName}

              </span>
              <FontAwesomeIcon className="text-indigo-700" icon={faArrowDown} />
              {insideIdas ?
                <div>
                  {ida.stops !== 0
                    ?
                    <>

                      <div className="text-indigo-500 lowercase ">
                        {parada}
                      </div>
                      <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />

                    </>
                    :
                    <>


                    </>
                  }
                </div>
                :
                <>

                  <div className="text-indigo-500 lowercase ">
                    {parada}
                  </div>
                  <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />
                </>
              }
              <span className="text-indigo-300">
                {insideIdas ? ida.arrivalStationName : vuelta.arrivalStationName}

              </span>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className="  bg-slate-500 dark:bg-indigo-700  dark:hover:bg-indigo-800 transition text-white py-2 px-4  rounded"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </button>
            <button className="bg-indigo-500 dark:bg-indigo-700 transition dark:hover:bg-indigo-800 text-white py-2 px-4 rounded" onClick={reservar} >
              Seleccionar
            </button>
          </div>
        </div>
      </Modal>
      {/* Modal de más detalles */}
      <Modal open={modal} onClose={() => setModal(false)}>
        <div className="text-center  w-[400px]  flex flex-col justify-between">
          <div className="mx-auto my-4">
            <h3 className="text-lg font-black text-slate-800 dark:text-indigo-400">
              Datos {txt}
            </h3>


            <div className="text-sm  font-bold flex flex-col p-3">
              <span className="text-indigo-700">
                {insideIdas ? ida.departureStationName : vuelta.departureStationName}

              </span>
              <FontAwesomeIcon className="text-indigo-700" icon={faArrowDown} />
              {insideIdas ?
                <div>
                  {ida.stops !== 0
                    ?
                    <>

                      <div className="text-indigo-500 lowercase ">
                        {parada}
                      </div>
                      <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />

                    </>
                    :
                    <>


                    </>
                  }
                </div>
                :
                <>

                  <div className="text-indigo-500 lowercase ">
                    {parada}
                  </div>
                  <FontAwesomeIcon className="text-indigo-600" icon={faArrowDown} />
                </>
              }
              <span className="text-indigo-300">
                {insideIdas ? ida.arrivalStationName : vuelta.arrivalStationName}

              </span>
            </div>
            <div className="text-sm border-t-2 dark:text-slate-400 dark:border-indigo-400 pt-4 border-slate-100 flex flex-col">
              <table>
                <tr>
                  <th className="text-start">Duracion:</th>
                  <td className="text-start">{insideIdas ? duration(ida.duration) : vuelta.duration}</td>
                </tr>
                <tr>
                  <th className="text-start">Parada(s):</th>
                  <td className="text-start">{insideIdas ? ida.stops : vuelta.stops}</td>
                </tr>
                <tr>
                  <th className="text-start">Pasajeros:</th>
                  <td className="text-start">{pasajeros}</td>
                </tr>
                <tr>
                  <th className="text-start">Salida:</th>
                  <td className="text-start">{insideIdas ? ida.departureTime : vuelta.departureTime} </td>
                </tr>
                <tr>
                  <th className="text-start">llegada:</th>
                  <td className="text-start"> {insideIdas ? ida.arrivalTime : vuelta.arrivalTime}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <button
              className=" bg-slate-500 dark:bg-indigo-700 dark:hover:bg-indigo-800 hover:bg-slate-700 transition text-white py-2 px-4  rounded"
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
