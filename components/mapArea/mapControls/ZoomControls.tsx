import React from 'react';
import { useMap } from 'react-map-gl';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CustomIcon from "@/components/CustomIcon"

const ZoomControls: React.FC = () => {
  const { current: map } = useMap();

  const zoomIn = () => map && map.zoomIn();
  const zoomOut = () => map && map.zoomOut();

  return (
    <div className="absolute bottom-5 right-5 z-10 flex flex-col space-y-1 p-1 bg-white rounded-md shadow-md">
      <button onClick={zoomIn} className="py-[6px] px-2 hover:rounded-md hover:bg-white hover:shadow-md">
        <CustomIcon Icon={AiOutlinePlus} size={24} />
      </button>
      <button onClick={zoomOut} className="py-[6px] px-2 hover:rounded-md hover:bg-white hover:shadow-md">
        <CustomIcon Icon={AiOutlineMinus} size={24} />
      </button>
    </div>
  );
};

export default ZoomControls;
