import { defineType, defineField } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTagline",
      title: "Hero Tagline",
      type: "string",
    }),
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "bestChoiceHeading",
      title: "Best Choice Heading",
      type: "string",
    }),
    defineField({
      name: "bestChoiceParagraphs",
      title: "Best Choice Body Paragraphs",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "quickConnectHeading",
      title: "Quick-Connect Heading",
      type: "string",
    }),
    defineField({
      name: "quickConnectBody",
      title: "Quick-Connect Body",
      type: "text",
    }),
    defineField({
      name: "testingHeading",
      title: "Testing & Service Heading",
      type: "string",
    }),
    defineField({
      name: "testingBody",
      title: "Testing & Service Body",
      type: "text",
    }),
    defineField({
      name: "adaptabilityImage",
      title: "Flexible Adaptability Diagram",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "adaptabilityTools",
      title: "Compatible Tool Types",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "bSeriesHeading",
      title: "B-Series Heading",
      type: "string",
    }),
    defineField({
      name: "bSeriesBody",
      title: "B-Series Body",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "contactBody",
      title: "Contact Section Body",
      type: "text",
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
