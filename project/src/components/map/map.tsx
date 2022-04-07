import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';

import {CustomPin} from './map-settings';
import useMap from '../../hooks/use-map';

import 'leaflet/dist/leaflet.css';
import {Hotel, Location} from '../../types/types';

export function getPoints(hotels: Hotel[]) {
  return hotels.map((hotel) => Object({
    id: hotel.id,
    location: hotel.location,
  }));
}

interface MapProps {
  location: Location;
  hotels: Hotel[]
  activePlace: number;
}

export default function Map({location, hotels, activePlace}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const points = getPoints(hotels);
  const {location: {latitude: lat, longitude: lng, zoom}} = location;

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      markers.addTo(map);

      points.forEach(({id, location: {latitude, longitude}}) => {
        leaflet
          .marker({
            lat: latitude,
            lng: longitude,
          }, {
            icon: String(id) === String(activePlace) ? CustomPin.ACTIVE : CustomPin.DEFAULT,
          })
          .addTo(markers);
      });

      map.flyTo([lat, lng], zoom);
    }

    return () => {
      markers.clearLayers();
    };

  }, [lat, lng, zoom, location, activePlace, map, points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
