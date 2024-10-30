import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?:string
}

// TODO: link font later
function Caption({ children, className }: Props) {
  return <p className={`text-[12px] leading-[17px] font-medium ${className}`}>{children}</p>;
}

export default Caption;
