import { defineField } from "sanity";
import { BiUser } from "react-icons/bi";

const profile = {
  name: "profile",
  title: "Profile",
  type: "document",
  icon: BiUser,
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(80),
    }),
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      description: "Upload a profile picture",
      options: {
        hotspot: true,
        metadata: ["lqip"], // "blurhash", "palette", etc
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "shortBio",
      title: "Short Bio",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fullBio",
      title: "Full Bio",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              title: "Image caption",
              type: "string",
              description: "Text displayed below the image.",
            },
            {
              name: "alt",
              title: "Alt text",
              type: "string",
              description: "Important for SEO and accessiblity.",
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "resumeURL",
      title: "Upload Resume",
      type: "file",
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: "socialLinks",
    //   title: "Social Links",
    //   type: "object",
    //   description: "Add your social media links:",
    //   fields: [
    //     {
    //       name: "github",
    //       title: "Github URL",
    //       type: "url",
    //       initialValue: "https://github.com/",
    //     },
    //     {
    //       name: "linkedin",
    //       title: "Linkedin URL",
    //       type: "url",
    //       initialValue: "https://linkedin.com/in/",
    //     },
    //     {
    //       name: "twitter",
    //       title: "Twitter URL",
    //       type: "url",
    //       initialValue: "https://twitter.com/",
    //     },
    //     {
    //       name: "codepen",
    //       title: "Codepen URL",
    //       type: "url",
    //       initialValue: "https://codepen.io/",
    //     },
    //   ],
    //   options: {
    //     collapsed: false,
    //     collapsible: true,
    //     columns: 2,
    //   },
    //   validation: (rule) => rule.required(),
    // }),
    // defineField({
    //   name: "skills",
    //   title: "Skills",
    //   type: "array",
    //   description: "Add a list of skills",
    //   of: [{ type: "string" }],
    //   validation: (rule) => rule.required(),
    // }),
    defineField({
      name: "usage",
      title: "Usage",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Code", value: "code" },
            ],
          },
        },
      ],
      validation: (rule) => rule.required(),
    }),
  ],
};

export default profile;
