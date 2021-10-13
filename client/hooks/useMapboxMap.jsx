import { useLayoutEffect } from "react";

import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

/*
    __Custom Hook Example__
    Creates a new map in the location/style you configure
    - Implementation:
        const {addMarker, removeMarker, map} = useMapboxMap({
            container: myRef.current
            style: "",
            zoom: 9
            center:[1,2]
        })
*/

export default function useMapboxMap(options) {
    let [marker, setMarker] = useState()
    mapboxgl.accessToken = process.env.MAPBOX

    const defaultOptions = {
        // Which element to insert the map into
        container: "map", // should pass a ref as argument & access the current property; should be 'container: containerRef.current'
        style: 'mapbox://styles/mapbox/dark-v10',
        center:  [ 12.567898, 55.67583 ],
        zoom: 9
    };
    
    function handleAddMarker(){
    }

    function handleRemoveMarker() {}
 
    useLayoutEffect(()=>{
        const map = new mapboxgl.Map({
            ...defaultOptions,
            ...options       
        })
        // return () =>{
        //     // if we use map.on(event), we will need to map.off(event) here
        // }
    })

    return {handleAddMarker, handleRemoveMarker, map};
}