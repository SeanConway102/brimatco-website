import { product, specRow, tubeNutSpecRow, partNumberSegment } from "./product";
import { driveType } from "./driveType";
import { homepage } from "./homepage";
import { aboutPage } from "./aboutPage";
import { siteSettings } from "./siteSettings";

export const schemaTypes = [
  // Document types
  product,
  driveType,
  homepage,
  aboutPage,
  siteSettings,
  // Object types
  specRow,
  tubeNutSpecRow,
  partNumberSegment,
];
