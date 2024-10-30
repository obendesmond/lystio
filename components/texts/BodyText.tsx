import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?:string
}

// TODO: link font later
function BodyText({ children, className }: Props) {
  return <p className={`text-[15px] leading-[22.5px] font-medium ${className}`}>{children}</p>;
}

export default BodyText;
