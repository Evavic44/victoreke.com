import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../lib/sanity.api";

const imageBuilder = imageUrlBuilder({
  projectId: projectId || "",
  dataset: dataset || "",
});

export const urlFor = (source: string) => {
  return imageBuilder.image(source);
};
