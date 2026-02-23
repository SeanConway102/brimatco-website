import { defineType, defineField, defineArrayMember } from "sanity";

export const specRow = defineType({
  name: "specRow",
  title: "Specification Row",
  type: "object",
  fields: [
    defineField({
      name: "socketSizes",
      title: "Socket Sizes",
      type: "text",
      rows: 2,
      description: "Socket size ranges (use newline to separate metric/imperial)",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "idlerGears",
      title: "Idler Gears",
      type: "array",
      of: [{ type: "number" }],
      description: "Available idler gear counts (e.g. [1, 2, 3])",
    }),
    defineField({
      name: "sqDrive",
      title: "Square Drive",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "torqueValues",
      title: "Torque Values (primary unit)",
      type: "array",
      of: [{ type: "number" }],
      description: "Torque values per idler gear count (ft-lbs or in-lbs depending on product)",
    }),
    defineField({
      name: "torqueNM",
      title: "Torque Values (NM)",
      type: "array",
      of: [{ type: "number" }],
    }),
    defineField({
      name: "dimA",
      title: "Dimension A",
      type: "number",
    }),
    defineField({
      name: "dimR",
      title: "Dimension R",
      type: "number",
    }),
  ],
});

export const tubeNutSpecRow = defineType({
  name: "tubeNutSpecRow",
  title: "Tube Nut Specification Row",
  type: "object",
  fields: [
    defineField({
      name: "modelStyle",
      title: "Model/Style",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "diagramImage",
      title: "Diagram Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "socketSizes",
      title: "Socket Sizes",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "sqDrive",
      title: "Square Drive",
      type: "string",
    }),
    defineField({
      name: "maxTorqueFtLbs",
      title: "Max Torque (ft-lbs)",
      type: "number",
    }),
    defineField({
      name: "maxTorqueNM",
      title: "Max Torque (NM)",
      type: "number",
    }),
    defineField({ name: "dimA", title: "Dimension A", type: "number" }),
    defineField({ name: "dimR", title: "Dimension R", type: "number" }),
    defineField({ name: "dimC", title: "Dimension C", type: "number" }),
    defineField({ name: "dimD", title: "Dimension D", type: "number" }),
  ],
});

export const partNumberSegment = defineType({
  name: "partNumberSegment",
  title: "Part Number Segment",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "value",
      title: "Value",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "model",
      title: "Model Code",
      type: "string",
      description: "e.g. QCL, QCM, QCH, QCEH, QCEH-SP, QC-TW",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "model", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short torque range summary",
    }),
    defineField({
      name: "sqDrive",
      title: "Square Drive Size",
      type: "string",
    }),
    defineField({
      name: "torqueUnit",
      title: "Torque Unit",
      type: "string",
      options: {
        list: [
          { title: "Foot/Lbs", value: "FOOT/LBS" },
          { title: "Inch/Lbs", value: "INCH/LBS" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "diagramImage",
      title: "Technical Diagram",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "specialOptions",
      title: "Special Featured Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "partNumberExample",
      title: "Part Number Example",
      type: "string",
    }),
    defineField({
      name: "partNumberBreakdown",
      title: "Part Number Breakdown",
      type: "array",
      of: [defineArrayMember({ type: "partNumberSegment" })],
    }),
    defineField({
      name: "specs",
      title: "Specifications",
      type: "array",
      of: [defineArrayMember({ type: "specRow" })],
    }),
    defineField({
      name: "tubeNutSpecs",
      title: "Tube Nut Specifications",
      type: "array",
      of: [defineArrayMember({ type: "tubeNutSpecRow" })],
      description: "Only for tube nut products",
    }),
    defineField({
      name: "homepageSummary",
      title: "Homepage Summary",
      type: "object",
      description: "Data shown on the homepage product catalog tab",
      fields: [
        defineField({
          name: "series",
          title: "Series Label",
          type: "string",
        }),
        defineField({
          name: "duty",
          title: "Duty Class",
          type: "string",
        }),
        defineField({
          name: "torqueNm",
          title: "Max Torque (NM)",
          type: "string",
        }),
        defineField({
          name: "torqueImperial",
          title: "Max Torque (Imperial)",
          type: "string",
        }),
        defineField({
          name: "shortDescription",
          title: "Short Description",
          type: "text",
          rows: 2,
        }),
        defineField({
          name: "applications",
          title: "Applications",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({
          name: "housing",
          title: "Housing Type",
          type: "string",
        }),
        defineField({
          name: "heatTreat",
          title: "Heat Treatment",
          type: "string",
        }),
        defineField({
          name: "compatibility",
          title: "Platform Compatibility",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "orderIndex",
      title: "Display Order",
      type: "number",
      description: "Order in product listings (lower = first)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "model",
      media: "diagramImage",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderIndex",
      by: [{ field: "orderIndex", direction: "asc" }],
    },
  ],
});
