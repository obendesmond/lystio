import React, { useEffect } from 'react';
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { useMap } from 'react-map-gl';
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { FiEdit2 } from "react-icons/fi";
import { FaRegDotCircle } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { SlLayers } from "react-icons/sl";
import { TiPointOfInterest } from "react-icons/ti";
import { IconType } from 'react-icons'
import CustomIcon from '@/components/CustomIcon';
import BodyText from '@/components/texts/BodyText';



const MapDrawControl: React.FC = () => {
  const { current: map } = useMap();
  const drawRef = React.useRef<MapboxDraw | null>(null);

  useEffect(() => {
    if (!map) return;

    const draw = new MapboxDraw({
      displayControlsDefault: false,
    });

    drawRef.current = draw;
    map.addControl(draw as unknown as mapboxgl.IControl, 'top-left');

    return () => {
      if (draw && map.hasControl(draw)) {
        map.removeControl(draw);
      }
    };
  }, [map]);

  const handleDrawPoint = () => {
    drawRef.current?.changeMode('draw_point');
  };

  const handleDrawPolygon = () => {
    drawRef.current?.changeMode('draw_polygon');
  };

  const handleDelete = () => {
    const selectedFeatures = drawRef.current?.getSelected().features;
    if (selectedFeatures && selectedFeatures.length > 0) {
      drawRef.current?.delete(selectedFeatures.map((feature) => feature.id as string));
    }
  };

  return (
    <>
      <div className="map-draw-controls">
        <div className="flex gap-2 px-5 py-2 items-center bg-white rounded-md shadow-md hover:shadow-lg cursor-pointer">
          <CustomIcon Icon={TiPointOfInterest} />
          <BodyText>Point of Interest</BodyText>
        </div>
        <Item Icon={SlLayers} />
        <Item Icon={FiEdit2} onClick={handleDrawPolygon} />
        <Item Icon={MdOutlineDeleteOutline} onClick={handleDelete} />
        <Item Icon={FaRegDotCircle} onClick={handleDrawPoint} />
      </div>

      <style jsx>{`
        .map-draw-controls {
          position: absolute;
          top: 10px;
          left: 10px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          z-index: 10;
        }
        .map-draw-controls button {
          background: white;
          border: none;
          border-radius: 4px;
          padding: 8px;
          cursor: pointer;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        }
        .map-draw-controls button:hover {
          background: #f0f0f0;
        }
      `}</style>
    </>
  );
};

interface ItemProps {
  Icon:IconType;
  onClick?:() => void
}
function Item({Icon, onClick}:ItemProps){

  return (
    <div onClick={onClick} className="flex items-center justify-center w-11 h-11  rounded-full bg-white transition-transform shadow-lg hover:scale-105 transition-all ease-in-out duration-75">
        <CustomIcon Icon={Icon} size={24} />
    </div>
  )
}

export default MapDrawControl;
