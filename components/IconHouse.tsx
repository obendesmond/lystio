"use client"

import { IconType } from "react-icons";
import CustomIcon from "./CustomIcon";

interface Props {
  Icon: IconType;
  active: boolean;
  onClick?: () => void;
}
const IconHouse = ({ Icon, active, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-2 rounded-md 
        ${active ? "bg-ly-white shadow-md" : "opacity-50"}
      `}
    >
      <CustomIcon Icon={Icon} />
    </div>
  );
};

export default IconHouse;
