import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { Icon } from "leaflet"
import { Polyline } from 'react-leaflet'
const iconoTren = new Icon({
    iconUrl: require('../assets/icon.png'),
    iconSize: [38, 35],
    iconAnchor: [22, 35],
    popupAnchor: [-3, -76]
})
const colorLinea = { color: '#6366f1' }
function Mapa({ tren, stops }) {
    let seleccion = null;
    let parada = null;
    let arrival = null;
    var latlngs;
    if (stops === 0) {
        seleccion = tren
        arrival = seleccion[0].arrivalPosition;
        latlngs = [
            [seleccion[0].departurePosition.latitude, seleccion[0].departurePosition.longitude],
            [arrival.latitude, arrival.longitude],
        ];
    }
    else {
        seleccion = tren
        parada = seleccion[0].arrivalPosition
        arrival = seleccion[2].arrivalPosition;
        latlngs = [
            [seleccion[0].departurePosition.latitude, seleccion[0].departurePosition.longitude],
            [parada.latitude, parada.longitude],
            [arrival.latitude, arrival.longitude]
        ];
    }

    return (
        <>
            <MapContainer center={[40.3260685, -4.8379791]} zoom={5} scrollWheelZoom={false}>
                <Polyline pathOptions={colorLinea} positions={latlngs} />
                <TileLayer
                    attribution='Dit Gestion'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    icon={iconoTren}
                    position={[seleccion[0].departurePosition.latitude, seleccion[0].departurePosition.longitude]}>
                    <Popup>
                        <div className='flex flex-col lowercase'>
                            <span className='text-lg text-center'>
                                Salida
                            </span>
                            <span>
                                {seleccion[0].departurePosition.name}
                            </span>
                        </div>
                    </Popup>
                </Marker>
                {parada && <Marker icon={iconoTren} position={[parada.latitude, parada.longitude]}>
                    <Popup>
                        <div className='flex flex-col lowercase'>
                            <span className='text-lg text-center'>
                                Parada
                            </span>

                            <span>
                                {parada.name}
                            </span>
                        </div>
                    </Popup>
                </Marker>}
                {arrival && <Marker icon={iconoTren} position={[arrival.latitude, arrival.longitude]}>
                    <Popup>
                        <div className='flex flex-col lowercase'>
                            <span className='text-lg text-center'>
                                Llegada
                            </span>
                            <span>
                                {arrival.name}
                            </span>
                        </div>
                    </Popup>
                </Marker>}
            </MapContainer>
        </>
    )
}
export default Mapa