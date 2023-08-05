import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (rule) => rule.max(60).required(),
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
    },
    {
      name: "logo",
      title: "Project Logo",
      type: "image",
    },
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
      description:
        "Leaving this URL blank will add a coming soon to the button.",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
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
        {
          type: "code",
          options: {
            language: "typescript",
            withFilename: true,
            highlightedLines: true,
            languageAlternatives: [
              { title: "Bash", value: "bash" },
              { title: "CSS", value: "css" },
              { title: "Groq", value: "graphql" },
              { title: "HTML", value: "html" },
              { title: "JavaScript", value: "js" },
              { title: "Json", value: "json" },
              { title: "JSX", value: "jsx" },
              { title: "Markdown", value: "markdown" },
              { title: "Python", value: "python" },
              { title: "SASS", value: "sass" },
              { title: "SCSS", value: "scss" },
              { title: "Shell", value: "shell" },
              { title: "SQL", value: "sql" },
              { title: "TSX", value: "tsx" },
              { title: "TypeScript", value: "ts" },
              { title: "Xml", value: "xml" },
              { title: "Yaml", value: "yaml" },
            ],
          },
        },
      ],
    }),
  ],
};

export default project;
