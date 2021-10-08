import 'mapbox-gl/dist/mapbox-gl.css'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import MapGL, {Marker} from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import marker from '../images/marker.png';

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWNrc2RlZWVlZSIsImEiOiJja3VoZzU2aWcyZHk5Mm5xamVjYjJmYzBoIn0.jeBXbfS27jfUNY1XikYJ8w';

const SearchMap = () => {
  const [selected, setSelected] = useState({latitude: null, longitude: null})
  const [viewport, setViewport] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
    zoom: 8
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(

    (newViewport) => {console.log(newViewport); setViewport(newViewport);    
    
    },
    []
  );
  return (
    <div className='map-page'>
    <div className='map-component'
    >
      <MapGL
        ref={mapRef}
        {...viewport}
        width="100%"
        height="100%"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
       >
{ selected.latitude &&
           <Marker 
           latitude={selected.latitude}
           offsetTop={-30}
           offsetLeft={-10}
           longitude={selected.longitude}>
               <img src={marker} className='marker' alt='marker' />
               </Marker>
}
        <Geocoder
          mapRef={mapRef}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={handleViewportChange}
          reverseGeocode={true}

        // onSelected={(result) => setSelected( {name: result.result.place_name,
        //     latitude: result.result.center[1],
        //     longitude: result.result.center[0]}) }
        onResult={(result) => {setSelected( {name: result.result.place_name,
            latitude: result.result.center[1],
            longitude: result.result.center[0]});
            _toggle();
        }
        }
        //  onClear={() => {setViewport({
        //     latitude: 40.7128,
        //     longitude: -74.0060,
        //     zoom: 8
        //   });
        //   setSelected({latitude: 0, longitude: 0});
        // }
        // }
          position="top-center"
          marker={false}
        />
      </MapGL>
    </div>
    {selected.latitude  && 
    <div>you're going to {selected.name}</div>}
    </div>
  );
};

export default SearchMap