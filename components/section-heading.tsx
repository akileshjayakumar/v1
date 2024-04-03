import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-4xl tracking-wider font-medium capitalize m-[2rem] text-center text-white">
      {children}
    </h2>
  );
}
