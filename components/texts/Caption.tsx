import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?:string
}
function Caption({ children, className }: Props) {
  return <p className={`text-[12px] leading-[17px] font-medium ${className}`}>{children}</p>;
}

export default Caption;
