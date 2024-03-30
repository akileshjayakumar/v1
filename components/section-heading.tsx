import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl tracking-wider font-medium capitalize m-[5rem] text-center text-white">
      {children}
    </h2>
  );
}
