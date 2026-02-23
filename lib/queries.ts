// GROQ queries for Brimatco website

// Products
export const allProductsQuery = `*[_type == "product"] | order(orderIndex asc) {
  _id,
  model,
  slug,
  name,
  tagline,
  sqDrive,
  torqueUnit,
  description,
  diagramImage,
  specialOptions,
  partNumberExample,
  partNumberBreakdown,
  specs,
  tubeNutSpecs,
  homepageSummary,
  orderIndex
}`;

export const productBySlugQuery = `*[_type == "product" && slug.current == $slug][0] {
  _id,
  model,
  slug,
  name,
  tagline,
  sqDrive,
  torqueUnit,
  description,
  diagramImage,
  specialOptions,
  partNumberExample,
  partNumberBreakdown,
  specs,
  tubeNutSpecs,
  homepageSummary,
  orderIndex
}`;

// Drive types
export const allDriveTypesQuery = `*[_type == "driveType"] | order(orderIndex asc) {
  _id,
  name,
  description,
  image,
  category,
  orderIndex
}`;

// Homepage singleton
export const homepageQuery = `*[_type == "homepage"][0] {
  heroHeading,
  heroSubheading,
  heroImage,
  heroCta1Label,
  heroCta1Href,
  heroCta2Label,
  heroCta2Href,
  problemCards,
  featuresImage,
  features,
  ctaHeading,
  ctaDescription
}`;

// About page singleton
export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  heroTagline,
  heroHeading,
  heroDescription,
  bestChoiceHeading,
  bestChoiceParagraphs,
  quickConnectHeading,
  quickConnectBody,
  testingHeading,
  testingBody,
  adaptabilityImage,
  adaptabilityTools,
  bSeriesHeading,
  bSeriesBody,
  contactBody
}`;

// Site settings singleton
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  companyName,
  tagline,
  address,
  phone,
  fax,
  website,
  certifications,
  footerDescription,
  seoTitle,
  seoDescription,
  socketDriveChoices
}`;
