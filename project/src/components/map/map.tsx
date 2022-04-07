import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';

import {CustomPin} from '../../map-settings';
import useMap from '../../hooks/use-map';

import 'leaflet/dist/leaflet.css';
import {City, Hotel} from '../../types/types';

export function getPoints(offers: Hotel[]) {
  return offers.map((offer) => Object({
    id: offer.id,
    location: offer.location,
  }));
}

interface MapProps {
  city: City;
  places: Hotel[]
  activePlace: number;
}

export default function Map({city, places, activePlace}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const points = getPoints(places);
  const {location: {latitude: lat, longitude: lng, zoom}} = city;

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

  }, [lat, lng, zoom, city, activePlace, map, points]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
