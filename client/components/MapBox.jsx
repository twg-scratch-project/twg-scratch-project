// import { load } from 'dotenv'
// import "dotenv/config.js";
import React, {useState, useLayoutEffect, useRef} from 'react'
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

// import useMapboxMap from '../hooks/useMapboxMap'
// useMapboxMap(mapRef)

export default function MapBox () {
    // Used to tell mapbox which element to insert the map instance into
    const mapRef = useRef()
    // Could be a single marker instance or an array
    let [marker, setMarker] = useState();
    const [center, setCenter] = useState([12.567898,55.67583]);


    mapboxgl.accessToken = 'pk.eyJ1IjoiZWNrc2RlZWVlZSIsImEiOiJja3VoZzU2aWcyZHk5Mm5xamVjYjJmYzBoIn0.jeBXbfS27jfUNY1XikYJ8w';
    useLayoutEffect(() => {   
        // Initialize Map
        const map = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/dark-v10',
            center: center,
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
    }, [center])

    // Change marker lat/lng based on the value attribute of <option />
    function handleSelectChange(e) {
        const location = e.target.value
        marker.setLngLat(trips[location])
        setCenter(trips[location])
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
    
