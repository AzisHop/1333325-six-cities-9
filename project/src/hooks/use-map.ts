import {MutableRefObject, useEffect, useState} from 'react';
import leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import {City} from '../types/types';


function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City) {
  const {location: {latitude, longitude, zoom}} = city;
  const [map, setMap] = useState<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new leaflet.Map(mapRef.current, {
        center: {
          lat: latitude,
          lng: longitude,
        },
        zoom: zoom,
        zoomControl: false,
        // marker: true,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [latitude, longitude, mapRef, zoom, map, city]);

  return map;
}

export default useMap;
