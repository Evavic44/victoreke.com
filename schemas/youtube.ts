import { defineField, defineType } from "sanity";
import { YoutubeWidget } from "@/app/components/shared/YoutubeWidget";
import { BiLogoYoutube } from "react-icons/bi";

export const youtube = defineType({
  name: "youtube",
  title: "Youtube",
  type: "object",
  icon: BiLogoYoutube,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Youtube Video",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
  },
  components: {
    preview: YoutubeWidget,
  },
});
