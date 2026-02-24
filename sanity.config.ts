import { defineConfig, buildLegacyTheme } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { schemaTypes } from "@/sanity/schemas";
import StudioNavbar from "@/components/studio/StudioNavbar";

const theme = buildLegacyTheme({
  "--black": "#1A1A1A",
  "--white": "#F9F7F2",
  "--gray-base": "#666",
  "--component-bg": "#F9F7F2",
  "--brand-primary": "#BD1E2D",
  "--focus-color": "#BD1E2D",
  "--default-button-primary-color": "#BD1E2D",
});

export default defineConfig({
  name: "brimatco",
  title: "Brimatco Corporation",

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  basePath: "/admin",

  theme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
