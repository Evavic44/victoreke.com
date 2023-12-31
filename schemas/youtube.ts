import { defineField, defineType } from "sanity";
import { YoutubeWidget } from "@/app/components/shared/YoutubeWidget";

export const youtube = defineType({
  name: "youtube",
  title: "Youtube",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: YoutubeWidget,
  },
});
