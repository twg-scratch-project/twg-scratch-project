// import { load } from 'dotenv'
import React, {useState, useLayoutEffect, useRef} from 'react'
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// import useMapboxMap from '../hooks/useMapboxMap'
// useMapboxMap(mapRef)

export default function MapBox () {
    // Used to tell mapbox which element to insert the map instance into
    const mapRef = useRef()
    // Could be a single marker instance or an array
    let [marker, setMarker] = useState()

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX;
    useLayoutEffect(() => {   
        // Initialize Map
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center:  [ 12.567898, 55.67583 ],
            zoom: 9
        })
        // Initialize Map Marker && State
        marker = new mapboxgl.Marker()
            .setLngLat([12.567898,55.67583])
            .addTo(map)

        setMarker(marker)

        // Called when element is removed from the dom
        return ()=>{
            // cleanup map.on(event) with map.off(event) here
        }
    }, [])

    // Change marker lat/lng based on the value attribute of <option />
    function handleSelectChange(e) {
        const location = e.target.value
        marker.setLngLat(trips[location])
    }
    // Dummy lat/lng
    const trips = {
        central: [12.567898, 55.67583],
        norrebro: [12.553806, 55.699299],
        airport: [12.650784, 55.618042]
    }

    return <>
        <div>
            <h2>Choose trip: </h2>
            <select onChange={handleSelectChange}>
                <option value="central">Central Station</option>
                <option value="norrebro">Norrebro</option>
                <option value="airport">CPH Airport</option>
            </select> 
        </div>
        <div id="map" style={{width: "100%", height: "100%"}} ref={mapRef}>
        {/* Map inserted here */}
        </div>
    </>
}
    
