import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"

const iconoTren = new Icon({
    iconUrl: require('../assets/icon.png'),
    iconSize: [35, 35]
})

function Mapa({ tren, stops }) {
    let seleccion = null;
    let parada = null;
    let arrival = null;

    if (stops === 0) {
        seleccion = tren
        arrival = seleccion[0].arrivalPosition;
        console.log("departure")

    }
    else {
        seleccion = tren
        console.log(seleccion)
        parada = seleccion[0].arrivalPosition
        arrival = seleccion[2].arrivalPosition;
        console.log("a buscar")
    }


    return (
        <>
            <MapContainer center={[40.4721436, -3.6825451]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='Dit Gestion'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    icon={iconoTren}
                    position={[seleccion[0].departurePosition.latitude, seleccion[0].departurePosition.longitude]}>
                    <Popup>

                        <div className='lowercase'>
                            {seleccion[0].departurePosition.name}
                        </div>
                    </Popup>

                </Marker>

                {parada && <Marker icon={iconoTren} position={[parada.latitude, parada.longitude]}>
                    <Popup>
                        <div className='lowercase'>
                            {parada.name}
                        </div>
                    </Popup>
                </Marker>}


                {arrival && <Marker icon={iconoTren} position={[arrival.latitude, arrival.longitude]}>
                    <Popup>
                        <div className='lowercase'>
                            {arrival.name}
                        </div>
                    </Popup>
                </Marker>}
            </MapContainer>

        </>
    )
}

export default Mapa