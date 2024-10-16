import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

import { ReactElement } from "react";

export type ProjectItem = {
  title: string;
  description: string;
  tags: ReactElement[];
  imageUrl: any;
  repoUrl: string;
  liveUrl: string;
};
