import { defineType, defineField, defineArrayMember } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroCta1Label",
      title: "Hero CTA 1 Label",
      type: "string",
    }),
    defineField({
      name: "heroCta1Href",
      title: "Hero CTA 1 Link",
      type: "string",
    }),
    defineField({
      name: "heroCta2Label",
      title: "Hero CTA 2 Label",
      type: "string",
    }),
    defineField({
      name: "heroCta2Href",
      title: "Hero CTA 2 Link",
      type: "string",
    }),
    defineField({
      name: "problemCards",
      title: "Why Brimatco Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Name", type: "string", description: "Lucide icon name (e.g. Crosshair, Shield, Cog)" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
            defineField({ name: "stat", title: "Stat Value", type: "string" }),
            defineField({ name: "statLabel", title: "Stat Label", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "featuresImage",
      title: "Features Section Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon Name", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "ctaHeading",
      title: "Custom Engineering Heading",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "Custom Engineering Description",
      type: "text",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Homepage" };
    },
  },
});
