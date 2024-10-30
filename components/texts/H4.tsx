import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?:string
}
function H4({ children, className }: Props) {
  return <p className={`text-[26px] leading-8 font-medium ${className}`}>{children}</p>;
}

export default H4;
