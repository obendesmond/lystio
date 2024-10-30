"use client";

import React, { useState, useEffect, useRef } from 'react';
import Map, { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ZoomControls from './mapControls/ZoomControls';
import MapDrawControl from './mapControls/MapDrawControl';
import LocationMarker from './mapControls/LocationMarker';
import MapViewAndPlanner from './mapControls/MapViewAndPlanner';
import { useAppContext } from '@/context/AppContext';
import { Listing } from '@/types';

// TODO: be here for now, soon move to .env
const MAPBOX_TOKEN = 'pk.eyJ1IjoibHlzdGlvIiwiYSI6ImNtMjA3cmFoejBnMngycXM4anNuNXFmaTQifQ.y-WiEerYZrFOm8Xd8a7GwQ';

const MapArea: React.FC = () => {
  const { listings, grandLocation } = useAppContext();
  const [selectedLocation, setSelectedLocation] = useState<Listing | null>(null);
  const mapRef = useRef<MapRef | null>(null); 

  useEffect(() => {
    if (grandLocation && grandLocation.gj) {
      const geoData = JSON.parse(grandLocation.gj);
  
      // Check if the geoData is a Polygon
      if (geoData.type === "Polygon") {
        const coordinates: [number, number][] = geoData.coordinates[0];
  
        const longitudes = coordinates.map((coord: [number, number]) => coord[0]);
        const latitudes = coordinates.map((coord: [number, number]) => coord[1]);
  
        const minLongitude = Math.min(...longitudes);
        const maxLongitude = Math.max(...longitudes);
        const minLatitude = Math.min(...latitudes);
        const maxLatitude = Math.max(...latitudes);
  
        const bounds: [[number, number], [number, number]] = [
          [minLongitude, minLatitude], // Southwest corner
          [maxLongitude, maxLatitude],  // Northeast corner
        ];
  
        // Fit bounds to the map
        if (mapRef.current) {
          mapRef.current.fitBounds(bounds, { padding: 20 });
        }
      } 
      else if (geoData.type === "Point") {
        // If it's a Point, set the map's view to that point
        const [longitude, latitude] = geoData.coordinates;

        // Set viewport to the Point using flyTo
        if (mapRef.current) {
          mapRef.current.flyTo({
            center: [longitude, latitude],
            zoom: 14, // Set an appropriate zoom level for points
            essential: true, // This animation is considered essential with respect to prefers-reduced-motion
            duration: 1000, // Duration of the fly animation in milliseconds
          });
        }
      }
    }
  }, [grandLocation]);

  return (
    <div className="flex-[0.5] h-full relative">
      <Map
        ref={mapRef}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <ZoomControls />
        <MapDrawControl />
        <MapViewAndPlanner />
        {listings?.map((l) => (
          <LocationMarker
            key={l.id}
            listing={l}
            isSelected={selectedLocation?.id === l.id}
            onHover={() => setSelectedLocation(l)}
            onClose={() => setSelectedLocation(null)}
          />
        ))}
      </Map>
    </div>
  );
};

export default MapArea;
