import { defineField, defineType } from "sanity";
import { BiBookOpen } from "react-icons/bi";
import Author from "./author";

export default defineType({
  name: "Post",
  title: "Blog Posts",
  type: "document",
  icon: BiBookOpen,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Give your blog post a nice title.",
      validation: (Rule) =>
        Rule.required().min(50).max(70).warning("Recommend 50 - 70 characters"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Add a slug to your post or generate it from the title",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Summarize your article in 150 - 160 characters.",
      rows: 4,
      validation: (Rule) => [
        Rule.required()
          .min(150)
          .error("A description of min 150 characters is required"),
        Rule.max(170).warning(
          "Please keep your description below 160 characters"
        ),
      ],
    }),
    defineField({
      name: "canonicalLink",
      title: "Canonical Link",
      type: "url",
      description:
        "If this post has been shared somewhere else, add a canonical url that links to it.",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description:
        "Upload a cover image for this blog post. Recommended size 1200 x 750",
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
    }),
    defineField({
      name: "tags",
      title: "Post Tags",
      type: "array",
      description: "Add relevant tags that match with your post",
      of: [{ type: "string" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: Author.name }],
    }),
    defineField({
      name: "body",
      title: "Post Body",
      type: "array",
      description: "Write your post content here",
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
});
