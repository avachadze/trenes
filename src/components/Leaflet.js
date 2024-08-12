import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon } from "leaflet"
import L from 'leaflet'
import { Polyline } from 'react-leaflet'
const iconoTren = new Icon({
    iconUrl: require('../assets/icon.png'),
    iconSize: [38, 35],
    iconAnchor: [22, 35],
    popupAnchor: [-3, -76]
})
const limeOptions = { color: '#6366f1' }
console.log(L)
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
        console.log(seleccion)
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
            <MapContainer center={[40.4721436, -3.6825451]} zoom={5} scrollWheelZoom={false}>
                <Polyline pathOptions={limeOptions} positions={latlngs} />
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