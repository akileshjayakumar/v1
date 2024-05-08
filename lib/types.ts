import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

import { ReactElement } from "react";

export type ProjectItem = {
  title: string;
  description: string;
  tags: ReactElement[]; // Expecting an array of JSX elements only
  imageUrl: any; // Define this type based on how you handle images
  repoUrl: string;
  liveUrl: string;
};
