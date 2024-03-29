import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-5xl tracking-wider font-bold capitalize mb-8 text-center text-white">
      {children}
    </h2>
  );
}
