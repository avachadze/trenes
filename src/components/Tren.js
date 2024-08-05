import React from 'react'

function Tren({ tren }) {
    let arrival = tren.arrivalTime
    let departure = tren.departureTime
    let pasajeros = tren.searchSummary.totalPassengers;
    function duration(e) {
        let hours = Math.floor(e / 60);
        let minutes = e % 60;
        return hours + "h " + minutes + "min";
    }
    return (
        <>
            <div
                className=" 
            group 
            shadow-md
            flex
            flex-col
            justify-around
            pb-5
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
            >
                <div className="flex justify-between">
                    <div className="text-black group-hover:text-white">
                        {tren.options[0].name}
                    </div>
                    <div className="flex gap-1">
                        <div
                            className={
                                tren.stops === 0
                                    ? " text-sm cursor-pointer  bg-green-700 rounded text-white p-1 "
                                    : " text-sm cursor-pointer  bg-orange-400 rounded text-white p-1"
                            }
                        >
                            {tren.stops} par aaada{tren.stops < 1 && "s"}
                        </div>
                        <div className=" text-sm bg-red-400 rounded text-white p-1 cursor-pointer">
                            {tren.segments[0].companyName}
                        </div>
                        <div className=" text-sm bg-indigo-500 rounded text-white p-1 cursor-pointer">
                            {tren.price}€
                        </div>
                    </div>


                </div>
                <div className="border-l-2 border-gray-400 group-hover:border-white pl-2 mb-3">
                    <div className="text-sm">{tren.departureStationName}</div>
                    <div className="text-sm">{duration(tren.duration)} </div>
                    <div className="text-sm">{tren.arrivalStationName}</div>
                </div>
                <span className='text-sm text-orange-500'>Salida: {departure.slice(-5)} </span>
                <span className='text-sm text-indigo-600'>Llegada: {arrival.slice(-5)}</span>
                <div className="flex gap-1 justify-end">

                    <div className="text-sm cursor-pointer bg-indigo-500 rounded text-white p-1 ">
                        X{pasajeros}
                    </div>

                </div>
            </div>
        </>

    )
}

export default Tren