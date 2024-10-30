import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?:string
}

// TODO: link font later
function Title({ children, className }: Props) {
  return <p className={`text-[18px] leading-[21.6px] font-medium ${className}`}>{children}</p>;
}

export default Title;
