import job from "./job";
import profile from "./profile";
import project from "./project";
import post from "./post";
import author from "./author";
import heroe from "./heroe";
import { youtube } from "./youtube";
import blockContent from "./blockContent";

export const schemaTypes = [
  profile,
  job,
  project,
  post,
  author,
  heroe,

  // Reference types
  blockContent,
  youtube,
];
