import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "object",
      fields: [
        defineField({ name: "line1", title: "Line 1", type: "string" }),
        defineField({ name: "line2", title: "Line 2", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "state", title: "State", type: "string" }),
        defineField({ name: "zip", title: "ZIP Code", type: "string" }),
      ],
    }),
    defineField({
      name: "phone",
      title: "Phone Numbers",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "fax",
      title: "Fax Number",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "string",
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. ISO 9001, AS9100D, ITAR",
    }),
    defineField({
      name: "footerDescription",
      title: "Footer Description",
      type: "text",
    }),
    defineField({
      name: "seoTitle",
      title: "Default SEO Title",
      type: "string",
    }),
    defineField({
      name: "seoDescription",
      title: "Default SEO Description",
      type: "text",
    }),
    defineField({
      name: "socketDriveChoices",
      title: "Socket Drive Choices",
      type: "array",
      of: [{ type: "string" }],
      description: "Shared list of socket drive choices shown on product pages",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
