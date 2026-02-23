#!/usr/bin/env node

/**
 * Seed script for Brimatco — uploads images & seeds all CMS documents.
 *
 * Usage:
 *   node scripts/seed.mjs
 *
 * Prerequisites:
 *   - SANITY_API_TOKEN env var set (write-capable token)
 *   - NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET env vars set
 *   - @sanity/client installed
 */

import { createClient } from "@sanity/client";
import { createReadStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, "..");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

/**
 * Upload a local image file to Sanity and return the asset document.
 * @param {string} filePath - Path to the image file (relative to project root)
 * @param {string} [filename] - Optional filename override
 * @returns {Promise<{_type: 'image', asset: {_type: 'reference', _ref: string}}>}
 */
async function uploadImage(filePath, filename) {
  const resolvedPath = path.resolve(PROJECT_ROOT, filePath);
  const name = filename || path.basename(filePath);
  console.log(`  Uploading image: ${name}...`);

  const asset = await client.assets.upload(
    "image",
    createReadStream(resolvedPath),
    { filename: name }
  );

  return {
    _type: "image",
    asset: {
      _type: "reference",
      _ref: asset._id,
    },
  };
}

/**
 * Build all documents with uploaded image references.
 */
async function buildDocuments() {
  console.log("Uploading images...\n");

  // ─── Homepage images ────────────────────────────────────────────────
  const heroImage = await uploadImage("public/images/hero-gear.jpg");
  const featuresImage = await uploadImage("public/images/manufacturing.jpg");
  const offsetWrenchImage = await uploadImage("public/images/offset-wrench.jpg");

  // ─── Product diagram images ─────────────────────────────────────────
  const qclDiagram = await uploadImage("public/catalogue/qcl-diagram.png");
  const qcmDiagram = await uploadImage("public/catalogue/qcm-diagram.png");
  const qchDiagram = await uploadImage("public/catalogue/qch-diagram.png");
  const qcehDiagram = await uploadImage("public/catalogue/qceh-diagram.png");
  const qcehSpDiagram = await uploadImage("public/catalogue/qceh-sp-diagram.png");

  // ─── Tube nut spec row diagram images ───────────────────────────────
  const qcehTwSpDiagram = await uploadImage("public/catalogue/qceh-tw-sp-diagram.png");
  const qchTwDiagram = await uploadImage("public/catalogue/qch-tw-diagram.png");
  const qclTwDiagram = await uploadImage("public/catalogue/qcl-tw-diagram.png");

  // ─── Misc / about images ───────────────────────────────────────────
  const blindDrivesDiagram = await uploadImage("public/catalogue/blind-drives-diagram.png");
  const adaptabilityImage = await uploadImage("public/catalogue/flexible-adaptability.png");

  // ─── Drive type images (internal) ──────────────────────────────────
  const intSquareThru = await uploadImage("public/catalogue/int-square-thru.png");
  const intThreaded = await uploadImage("public/catalogue/int-threaded.png");
  const intSpline = await uploadImage("public/catalogue/int-spline.png");
  const int12ptThru = await uploadImage("public/catalogue/int-12pt-thru.png");
  const intHexThru = await uploadImage("public/catalogue/int-hex-thru.png");
  const intShoulderedHex = await uploadImage("public/catalogue/int-shouldered-hex.png");

  // ─── Drive type images (external) ──────────────────────────────────
  const extSquareDrive = await uploadImage("public/catalogue/ext-square-drive.png");
  const extTorx = await uploadImage("public/catalogue/ext-torx.png");
  const extAllenHex = await uploadImage("public/catalogue/ext-allen-hex.png");
  const extDrilling = await uploadImage("public/catalogue/ext-drilling.png");

  console.log("\nAll images uploaded. Building documents...\n");

  // ═══════════════════════════════════════════════════════════════════
  //  PRODUCTS (6)
  // ═══════════════════════════════════════════════════════════════════

  const productQCL = {
    _id: "product-qcl",
    _type: "product",
    model: "QCL",
    slug: { _type: "slug", current: "qcl" },
    name: "Quick Connect Light Duty",
    tagline: "Torque range up to 140 inch lbs / 16 NM",
    sqDrive: "1/4",
    torqueUnit: "INCH/LBS",
    description:
      'The QCL series is designed for light-duty fastening applications where precision and speed matter. With a compact 1" profile and 1/4" square drive, these wrench blades are ideal for electronics assembly, instrument panels, and light airframe work.',
    diagramImage: qclDiagram,
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 1/4 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCL wrench blades are 12 point thru (fractional) and shouldered 6 point hex millimeter unless otherwise specified.",
    ],
    partNumberExample: "QCL - 5/16 - 3 'D'",
    partNumberBreakdown: [
      { _type: "partNumberSegment", _key: "pn-qcl-0", label: "Quick Connect Light Duty", value: "QCL" },
      { _type: "partNumberSegment", _key: "pn-qcl-1", label: "Socket Size", value: "5/16" },
      { _type: "partNumberSegment", _key: "pn-qcl-2", label: "Number Idler Gears", value: "3" },
      { _type: "partNumberSegment", _key: "pn-qcl-3", label: "1/4 Square Drive", value: "D" },
    ],
    specs: [
      {
        _type: "specRow",
        _key: "qcl-spec-0",
        socketSizes: "1/8 - 3/16 - 1/4\n4mm - 5mm - 6mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueValues: [70, 60, 50],
        torqueNM: [8, 7, 6],
        dimA: 0.622,
        dimR: 0.242,
      },
      {
        _type: "specRow",
        _key: "qcl-spec-1",
        socketSizes: "9/32 - 5/16\n7mm - 8mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueValues: [90, 80, 70],
        torqueNM: [10, 9, 8],
        dimA: 0.647,
        dimR: 0.268,
      },
      {
        _type: "specRow",
        _key: "qcl-spec-2",
        socketSizes: "11/32 - 3/8\n9mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueValues: [100, 90, 80],
        torqueNM: [11, 10, 9],
        dimA: 0.685,
        dimR: 0.307,
      },
      {
        _type: "specRow",
        _key: "qcl-spec-3",
        socketSizes: "7/16\n10mm - 11mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueValues: [120, 110, 100],
        torqueNM: [14, 12, 11],
        dimA: 0.734,
        dimR: 0.345,
      },
      {
        _type: "specRow",
        _key: "qcl-spec-4",
        socketSizes: "1/2\n12mm - 13mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueValues: [130, 120, 110],
        torqueNM: [15, 14, 12],
        dimA: 0.766,
        dimR: 0.385,
      },
      {
        _type: "specRow",
        _key: "qcl-spec-5",
        socketSizes: "9/16\n14mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueValues: [140, 130, 120],
        torqueNM: [16, 15, 14],
        dimA: 0.812,
        dimR: 0.427,
      },
    ],
    homepageSummary: {
      series: "QCL",
      duty: "Light Duty",
      torqueNm: "16",
      torqueImperial: "140 in-lbs",
      shortDescription:
        "Ideal for delicate avionics fasteners and precision electronics assembly where controlled, low-torque application is critical.",
      applications: ["Avionics", "Electronics", "Instrumentation"],
      housing: "Uni-Body",
      heatTreat: "Case Hardened",
      compatibility: "IR / AC / CP",
    },
    orderIndex: 0,
  };

  const productQCM = {
    _id: "product-qcm",
    _type: "product",
    model: "QCM",
    slug: { _type: "slug", current: "qcm" },
    name: "Quick Connect Medium Duty",
    tagline: "Torque range up to 19 ft lbs / 26 NM",
    sqDrive: "3/8",
    torqueUnit: "FOOT/LBS",
    description:
      'The QCM series delivers reliable medium-duty torque for general assembly operations. With a 1 1/4" profile and 3/8" square drive, the QCM handles a wide range of aerospace and automotive fastening tasks with ease.',
    diagramImage: qcmDiagram,
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 3/8 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCM wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: "QCM - 1/2 - 1 'D'",
    partNumberBreakdown: [
      { _type: "partNumberSegment", _key: "pn-qcm-0", label: "Quick Connect Medium Duty", value: "QCM" },
      { _type: "partNumberSegment", _key: "pn-qcm-1", label: "Socket Size", value: "1/2" },
      { _type: "partNumberSegment", _key: "pn-qcm-2", label: "Number Idler Gears", value: "1" },
      { _type: "partNumberSegment", _key: "pn-qcm-3", label: "3/8 Square Drive", value: "D" },
    ],
    specs: [
      {
        _type: "specRow",
        _key: "qcm-spec-0",
        socketSizes: "1/8 thru 5/16\n4mm thru 8mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [15, 14, 13],
        torqueNM: [20, 19, 18],
        dimA: 0.895,
        dimR: 0.307,
      },
      {
        _type: "specRow",
        _key: "qcm-spec-1",
        socketSizes: "11/32 thru 3/8\n9mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [16, 15, 14],
        torqueNM: [21, 20, 19],
        dimA: 0.928,
        dimR: 0.345,
      },
      {
        _type: "specRow",
        _key: "qcm-spec-2",
        socketSizes: "7/16\n10mm - 11mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [17, 16, 15],
        torqueNM: [23, 21, 20],
        dimA: 0.963,
        dimR: 0.363,
      },
      {
        _type: "specRow",
        _key: "qcm-spec-3",
        socketSizes: "1/2\n12mm - 13mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [18, 17, 16],
        torqueNM: [24, 23, 21],
        dimA: 1.013,
        dimR: 0.415,
      },
      {
        _type: "specRow",
        _key: "qcm-spec-4",
        socketSizes: "9/16 - 5/8\n14mm - 15mm - 16mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [18, 17, 16],
        torqueNM: [24, 23, 21],
        dimA: 1.054,
        dimR: 0.471,
      },
      {
        _type: "specRow",
        _key: "qcm-spec-5",
        socketSizes: "11/16\n17mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [19, 18, 17],
        torqueNM: [26, 24, 23],
        dimA: 1.09,
        dimR: 0.506,
      },
      {
        _type: "specRow",
        _key: "qcm-spec-6",
        socketSizes: "3/4\n18mm - 19mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [19, 18, 17],
        torqueNM: [26, 24, 23],
        dimA: 1.122,
        dimR: 0.54,
      },
    ],
    homepageSummary: {
      series: "QCM",
      duty: "Medium Duty",
      torqueNm: "26",
      torqueImperial: "19 ft-lbs",
      shortDescription:
        "The workhorse of airframe maintenance. Handles structural fasteners in confined wing and fuselage sections.",
      applications: ["Airframe", "Structural", "General Assembly"],
      housing: "Uni-Body",
      heatTreat: "Case Hardened",
      compatibility: "IR / AC / CP",
    },
    orderIndex: 1,
  };

  const productQCH = {
    _id: "product-qch",
    _type: "product",
    model: "QCH",
    slug: { _type: "slug", current: "qch" },
    name: "Quick Connect Heavy Duty",
    tagline: "Torque range up to 23 ft lbs / 31 NM",
    sqDrive: "3/8",
    torqueUnit: "FOOT/LBS",
    description:
      'The QCH series is built for heavy-duty fastening where higher torque is needed. With a robust construction and 3/8" square drive, it handles demanding assembly line applications in aerospace, automotive, and heavy industrial environments.',
    diagramImage: qchDiagram,
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 3/8 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCH wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: "QCH - 16mm - 3 'D'",
    partNumberBreakdown: [
      { _type: "partNumberSegment", _key: "pn-qch-0", label: "Quick Connect Heavy Duty", value: "QCH" },
      { _type: "partNumberSegment", _key: "pn-qch-1", label: "Socket Size", value: "16mm" },
      { _type: "partNumberSegment", _key: "pn-qch-2", label: "Number Idler Gears", value: "3" },
      { _type: "partNumberSegment", _key: "pn-qch-3", label: "3/8 Square Drive", value: "D" },
    ],
    specs: [
      {
        _type: "specRow",
        _key: "qch-spec-0",
        socketSizes: "1/8 thru 7/16\n4mm thru 11mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [20, 19, 18],
        torqueNM: [27, 26, 24],
        dimA: 0.985,
        dimR: 0.434,
      },
      {
        _type: "specRow",
        _key: "qch-spec-1",
        socketSizes: "1/2\n12mm - 13mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [21, 20, 19],
        torqueNM: [28, 27, 26],
        dimA: 1.017,
        dimR: 0.47,
      },
      {
        _type: "specRow",
        _key: "qch-spec-2",
        socketSizes: "9/16\n14mm - 15mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [22, 21, 20],
        torqueNM: [29, 28, 27],
        dimA: 1.1,
        dimR: 0.558,
      },
      {
        _type: "specRow",
        _key: "qch-spec-3",
        socketSizes: "5/8 - 11/16 - 3/4\n16mm thru 19mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [23, 22, 21],
        torqueNM: [31, 29, 28],
        dimA: 1.167,
        dimR: 0.595,
      },
    ],
    homepageSummary: {
      series: "QCH",
      duty: "Heavy Duty",
      torqueNm: "31",
      torqueImperial: "23 ft-lbs",
      shortDescription:
        "Built for high-cycle industrial applications demanding sustained torque output without fatigue failure.",
      applications: ["Industrial", "Automotive", "Heavy Assembly"],
      housing: "Uni-Body",
      heatTreat: "Case Hardened",
      compatibility: "IR / AC / CP",
    },
    orderIndex: 2,
  };

  const productQCEH = {
    _id: "product-qceh",
    _type: "product",
    model: "QCEH",
    slug: { _type: "slug", current: "qceh" },
    name: "Quick Connect Extra Heavy Duty",
    tagline: "Torque range up to 33 ft lbs / 45 NM",
    sqDrive: "3/8",
    torqueUnit: "FOOT/LBS",
    description:
      'The QCEH series provides extra heavy-duty torque capacity for the most demanding assembly applications. Featuring a 1 1/2" profile with 3/8" square drive, these wrench blades are the go-to choice when standard heavy-duty isn\'t enough.',
    diagramImage: qcehDiagram,
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 3/8 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCEH wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: "QCEH - 7/16 - 1 'D'",
    partNumberBreakdown: [
      { _type: "partNumberSegment", _key: "pn-qceh-0", label: "Quick Connect Extra Heavy Duty", value: "QCEH" },
      { _type: "partNumberSegment", _key: "pn-qceh-1", label: "Socket Size", value: "7/16" },
      { _type: "partNumberSegment", _key: "pn-qceh-2", label: "Number Idler Gears", value: "1" },
      { _type: "partNumberSegment", _key: "pn-qceh-3", label: "3/8 Square Drive", value: "D" },
    ],
    specs: [
      {
        _type: "specRow",
        _key: "qceh-spec-0",
        socketSizes: "1/8 thru 7/16\n4mm thru 11mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [29, 28, 27],
        torqueNM: [39, 38, 36],
        dimA: 0.985,
        dimR: 0.434,
      },
      {
        _type: "specRow",
        _key: "qceh-spec-1",
        socketSizes: "1/2\n12mm - 13mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [30, 29, 28],
        torqueNM: [41, 39, 38],
        dimA: 1.017,
        dimR: 0.47,
      },
      {
        _type: "specRow",
        _key: "qceh-spec-2",
        socketSizes: "9/16\n14mm - 15mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [31, 30, 29],
        torqueNM: [42, 41, 39],
        dimA: 1.1,
        dimR: 0.558,
      },
      {
        _type: "specRow",
        _key: "qceh-spec-3",
        socketSizes: "5/8 - 11/16 - 3/4\n16mm thru 19mm",
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueValues: [33, 32, 31],
        torqueNM: [45, 43, 42],
        dimA: 1.167,
        dimR: 0.595,
      },
    ],
    homepageSummary: {
      series: "QCEH",
      duty: "Extra Heavy",
      torqueNm: "45",
      torqueImperial: "33 ft-lbs",
      shortDescription:
        "Maximum torque density for large-diameter aerospace fasteners and critical structural joints.",
      applications: ["Aerospace Structural", "Defense", "Landing Gear"],
      housing: "Uni-Body",
      heatTreat: "Case Hardened",
      compatibility: "IR / AC / CP",
    },
    orderIndex: 3,
  };

  const productQCEHSP = {
    _id: "product-qceh-sp",
    _type: "product",
    model: "QCEH-SP",
    slug: { _type: "slug", current: "qceh-sp" },
    name: "Quick Connect Extra Heavy Duty Special",
    tagline: "Torque range up to 74 ft lbs / 100 NM",
    sqDrive: "1/2",
    torqueUnit: "FOOT/LBS",
    description:
      "The QCEH-SP is the most powerful wrench blade in the Brimatco Quick Connect line. With a 1/2\" square drive and torque capacity up to 74 ft lbs, this series is designed for high-torque structural fastening in aerospace and heavy industrial applications.",
    diagramImage: qcehSpDiagram,
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 1/2 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCEH-SP wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: "QCEH-SP - 17mm - 2",
    partNumberBreakdown: [
      { _type: "partNumberSegment", _key: "pn-qcehsp-0", label: "Quick Connect Extra Heavy Duty Special", value: "QCEH-SP" },
      { _type: "partNumberSegment", _key: "pn-qcehsp-1", label: "Socket Size", value: "17mm" },
      { _type: "partNumberSegment", _key: "pn-qcehsp-2", label: "Number Idler Gears", value: "2" },
    ],
    specs: [
      {
        _type: "specRow",
        _key: "qcehsp-spec-0",
        socketSizes: "1/8 thru 1/2\n4mm thru 13mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueValues: [63, 61, 60],
        torqueNM: [85, 83, 81],
        dimA: 1.1,
        dimR: 0.508,
      },
      {
        _type: "specRow",
        _key: "qcehsp-spec-1",
        socketSizes: "14mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueValues: [65, 63, 61],
        torqueNM: [88, 85, 83],
        dimA: 1.125,
        dimR: 0.533,
      },
      {
        _type: "specRow",
        _key: "qcehsp-spec-2",
        socketSizes: "9/16, 5/8\n15mm - 16mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueValues: [68, 66, 64],
        torqueNM: [92, 90, 87],
        dimA: 1.175,
        dimR: 0.584,
      },
      {
        _type: "specRow",
        _key: "qcehsp-spec-3",
        socketSizes: "11/16 - 3/4\n17mm - 18mm - 19mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueValues: [71, 69, 67],
        torqueNM: [96, 94, 91],
        dimA: 1.25,
        dimR: 0.663,
      },
      {
        _type: "specRow",
        _key: "qcehsp-spec-4",
        socketSizes: "13/16 - 7/8\n20mm - 21mm - 22mm",
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueValues: [74, 71, 69],
        torqueNM: [100, 96, 94],
        dimA: 1.3,
        dimR: 0.71,
      },
    ],
    homepageSummary: {
      series: "QCEH-SP",
      duty: "Special",
      torqueNm: "100",
      torqueImperial: "74 ft-lbs",
      shortDescription:
        "Custom-engineered for mission-critical applications exceeding standard duty classifications. Built to your exact specification.",
      applications: ["Custom", "Mission-Critical", "Specialized"],
      housing: "Uni-Body",
      heatTreat: "Case Hardened",
      compatibility: "IR / AC / CP",
    },
    orderIndex: 4,
  };

  const productQCTW = {
    _id: "product-qc-tw",
    _type: "product",
    model: "QC-TW",
    slug: { _type: "slug", current: "tube-nut" },
    name: "Quick Connect Tube Nut Wrench Blades",
    tagline: "For split socket in-line applications. Torque up to 61 ft lbs / 83 NM",
    sqDrive: "varies",
    torqueUnit: "FOOT/LBS",
    description:
      "Brimatco Tube Nut Wrench Blades are designed for split socket in-line applications such as brake lines, hydraulic fittings, and fuel system connections. Available in light, heavy, and extra heavy duty special configurations.",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Tube diameter as requested.",
      "Standard sockets for tube nut wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    specs: [],
    tubeNutSpecs: [
      {
        _type: "tubeNutSpecRow",
        _key: "tn-spec-0",
        modelStyle: "QCEH-TW - SP",
        diagramImage: qcehTwSpDiagram,
        socketSizes: "3/8 thru 3/4\n9mm thru 20mm",
        sqDrive: "1/2",
        maxTorqueFtLbs: 61,
        maxTorqueNM: 83,
        dimA: 2.9,
        dimR: 0.72,
        dimC: 0.937,
        dimD: 2.15,
      },
      {
        _type: "tubeNutSpecRow",
        _key: "tn-spec-1",
        modelStyle: "QCH-TW",
        diagramImage: qchTwDiagram,
        socketSizes: "5/16 thru 3/4\n8mm thru 19mm",
        sqDrive: "3/8",
        maxTorqueFtLbs: 22,
        maxTorqueNM: 29,
        dimA: 2.674,
        dimR: 0.605,
        dimC: 0.562,
        dimD: 1.86,
      },
      {
        _type: "tubeNutSpecRow",
        _key: "tn-spec-2",
        modelStyle: "QCL-TW",
        diagramImage: qclTwDiagram,
        socketSizes: "1/4 thru 9/16\n7mm thru 14mm",
        sqDrive: "1/4",
        maxTorqueFtLbs: 110,
        maxTorqueNM: 12,
        dimA: 1.718,
        dimR: 0.437,
        dimC: 0.5,
        dimD: 1.575,
      },
    ],
    homepageSummary: {
      series: "B578/B529",
      duty: "Tube Nut",
      torqueNm: "83",
      torqueImperial: "61 ft-lbs",
      shortDescription:
        "Purpose-built for fluid line connections in hydraulic and pneumatic systems. Eliminates tube damage from over-torque.",
      applications: ["Hydraulic Lines", "Pneumatic", "Fluid Systems"],
      housing: "Uni-Body",
      heatTreat: "Case Hardened",
      compatibility: "IR / AC / CP",
    },
    orderIndex: 5,
  };

  // ═══════════════════════════════════════════════════════════════════
  //  DRIVE TYPES (10)
  // ═══════════════════════════════════════════════════════════════════

  const driveTypes = [
    // Internal (6)
    {
      _id: "drive-int-square-thru",
      _type: "driveType",
      name: "Square Thru",
      description: "Standard square drive socket",
      image: intSquareThru,
      category: "internal",
      orderIndex: 0,
    },
    {
      _id: "drive-int-threaded",
      _type: "driveType",
      name: "Threaded Sockets",
      description: "For threaded fastener applications",
      image: intThreaded,
      category: "internal",
      orderIndex: 1,
    },
    {
      _id: "drive-int-spline",
      _type: "driveType",
      name: "Spline Sockets",
      description: "Spline drive for specialized fasteners",
      image: intSpline,
      category: "internal",
      orderIndex: 2,
    },
    {
      _id: "drive-int-12pt-thru",
      _type: "driveType",
      name: "12 pt. Thru",
      description: "12-point through socket",
      image: int12ptThru,
      category: "internal",
      orderIndex: 3,
    },
    {
      _id: "drive-int-hex-thru",
      _type: "driveType",
      name: "Hex Thru",
      description: "Surface drive / fast lead hex socket",
      image: intHexThru,
      category: "internal",
      orderIndex: 4,
    },
    {
      _id: "drive-int-shouldered-hex",
      _type: "driveType",
      name: "Shouldered Hex",
      description: "Shouldered hex for controlled depth",
      image: intShoulderedHex,
      category: "internal",
      orderIndex: 5,
    },
    // External (4)
    {
      _id: "drive-ext-square-drive",
      _type: "driveType",
      name: "Square Drive for Sockets",
      description: "Standard square drive output",
      image: extSquareDrive,
      category: "external",
      orderIndex: 6,
    },
    {
      _id: "drive-ext-torx",
      _type: "driveType",
      name: "Torx Bits/Etc.",
      description: "Torx and specialty bit drives",
      image: extTorx,
      category: "external",
      orderIndex: 7,
    },
    {
      _id: "drive-ext-allen-hex",
      _type: "driveType",
      name: "Allen/Hex Drives",
      description: "Allen key and hex drive outputs",
      image: extAllenHex,
      category: "external",
      orderIndex: 8,
    },
    {
      _id: "drive-ext-drilling",
      _type: "driveType",
      name: "Drilling/Reaming/Chamfer",
      description: "Rotary tool drive applications",
      image: extDrilling,
      category: "external",
      orderIndex: 9,
    },
  ];

  // ═══════════════════════════════════════════════════════════════════
  //  HOMEPAGE (1)
  // ═══════════════════════════════════════════════════════════════════

  const homepageDoc = {
    _id: "homepage",
    _type: "homepage",
    heroHeading: "Precision in\nTight Spaces",
    heroSubheading:
      "Custom-engineered gear-driven solutions for aerospace & automotive since 1973",
    heroImage,
    heroCta1Label: "Request a Custom Quote",
    heroCta1Href: "#custom-engineering",
    heroCta2Label: "View Products",
    heroCta2Href: "#products",
    problemCards: [
      {
        _type: "object",
        _key: "problem-0",
        icon: "Crosshair",
        title: "THE CLEARANCE PROBLEM",
        description:
          "Standard tools can't reach fasteners in confined aerospace assemblies. Our gear-driven offset design accesses spaces where straight-line tools fail.",
        stat: '0.5"',
        statLabel: "minimum clearance reach",
      },
      {
        _type: "object",
        _key: "problem-1",
        icon: "Shield",
        title: "THE DURABILITY GAP",
        description:
          "Cast housings crack under repeated high-torque cycles. Brimatco's uni-body design machines each housing from a single solid block \u2014 zero weld points, zero failure seams.",
        stat: "100%",
        statLabel: "uni-body machined",
      },
      {
        _type: "object",
        _key: "problem-2",
        icon: "Cog",
        title: "SEAMLESS INTEGRATION",
        description:
          "Universal compatibility with Ingersoll Rand, Atlas Copco, Chicago Pneumatic, and all major pneumatic platforms. Drop-in, zero-downtime deployment.",
        stat: "4+",
        statLabel: "platform compatibility",
      },
    ],
    featuresImage,
    features: [
      {
        _type: "object",
        _key: "feature-0",
        icon: "Wrench",
        title: "Uni-Body Design",
        description:
          "Every housing is precision-machined from a solid billet of hardened steel. No casting, no welding, no weak points. This is the foundation of Brimatco's legendary durability \u2014 a single, seamless structure engineered for decades of service.",
      },
      {
        _type: "object",
        _key: "feature-1",
        icon: "Archive",
        title: "The B-Series Archive",
        description:
          "Every custom tool Brimatco builds is assigned a unique B-Series part number and archived for life. Need an exact replacement 15 years from now? One call, one part number, delivered.",
      },
      {
        _type: "object",
        _key: "feature-2",
        icon: "Flame",
        title: "In-House Heat Treating",
        description:
          "Our metallurgists control the entire hardening process \u2014 carburizing, quenching, tempering \u2014 under one roof. No outsourced guesswork. Precise Rockwell hardness for every application.",
      },
    ],
    ctaHeading: "The Impossible Reach?\nWe Solve It.",
    ctaDescription:
      "Send us your blueprint, your clearance problem, your \u201Cimpossible\u201D fastener access challenge. Our engineers in Cheshire, CT will design a custom gear-driven solution with a unique B-Series part number \u2014 re-orderable for life.",
  };

  // ═══════════════════════════════════════════════════════════════════
  //  ABOUT PAGE (1)
  // ═══════════════════════════════════════════════════════════════════

  const aboutPageDoc = {
    _id: "aboutPage",
    _type: "aboutPage",
    heroTagline: "About Brimatco",
    heroHeading: "Brimatco Quality",
    heroDescription:
      "Production-grade gear-driven wrenches engineered and manufactured in Cheshire, Connecticut since 1973. Patent No. 4171651 & D255090.",
    bestChoiceHeading: "The Best Choice",
    bestChoiceParagraphs: [
      "There is substantial proof that gear drive is the most consistent, durable and precise method of torque delivery employed and is widely preferred over other methods. To insure the highest quality and product control, we design and manufacture all of our own components in-house.",
      "Our years of experience and metallurgical expertise allow us to select the best materials for any given application. Our design skills result in sophisticated yet uncomplicated components. As an example, all Brimatco tool housings utilize uni-body design.",
      "When you buy a Brimatco tool, you invest in a tool that lasts longer, performs better and is extraordinarily cost-efficient.",
    ],
    quickConnectHeading: "Quick - Connect",
    quickConnectBody:
      "Brimatco blades are compatible with virtually all air or electric tools. Our patented Quick-Connect feature allows you to carry out more operations per work station by greatly simplifying wrench changing.",
    testingHeading: "Testing & Service",
    testingBody:
      "All Brimatco wrenches are functionally tested after assembly. Our materials and design assure extended service life. We provide complete in-house service in the event that it is needed and can advise customers of up-grades or new models.",
    adaptabilityImage,
    adaptabilityTools: [
      "Angle Nutrunners",
      "Screwdrivers",
      "Stall Bar Nutrunners",
      "Fixtured Nutrunners",
      "Drills",
      "Pulse Tools",
    ],
    bSeriesHeading: '"B" Series Wrench Blades',
    bSeriesBody: [
      "Total custom designs tailored to your unique application requirements. Over the years, we have maintained a policy of expanding our product line as new markets occur and new wrenches are continually being introduced. We cannot catalog every variation so we hope you will accept our invitation to call with your particular specifications.",
      "Even if you don't see an appropriate tool illustrated in these pages, chances are good the solution to your problem already exists.",
    ],
    contactBody:
      "For questions on applications, deliveries, costs or technical data. We're often able to suggest solutions to problems that you may have thought you had to live with. We love challenges. The best way to find out how much help we can be is to just pick up the phone.",
  };

  // ═══════════════════════════════════════════════════════════════════
  //  SITE SETTINGS (1)
  // ═══════════════════════════════════════════════════════════════════

  const siteSettingsDoc = {
    _id: "siteSettings",
    _type: "siteSettings",
    companyName: "Brimatco Corporation",
    address: {
      line1: "P.O. Box 88",
      line2: "1486 Highland Avenue",
      city: "Cheshire",
      state: "CT",
      zip: "06410",
    },
    phone: ["(203) 272-0044", "272-1859", "272-1850"],
    fax: "(203) 272-2256",
    website: "www.brimatco.com",
    certifications: ["ISO 9001", "AS9100D", "ITAR"],
    footerDescription:
      "Precision gear-driven tooling solutions for aerospace, automotive, and industrial applications. Engineered in Cheshire, CT since 1973.",
    seoTitle: "Brimatco | Precision Gear-Driven Solutions Since 1973",
    seoDescription:
      "Custom-engineered gear-driven offset wrenches and precision tooling for aerospace and automotive applications. Uni-body machined housings, in-house heat treating, and lifetime B-Series part re-ordering.",
    socketDriveChoices: [
      "Fractional Hex",
      "Fractional 12 point",
      "Millimeter Hex",
      "Shouldered",
      "Thru",
      "Threaded",
      "Spline",
      "Allen Drives",
      "Square Drives",
      "Male Drives",
      "Hex Key",
      "Solid Core Magnetic",
    ],
  };

  // ═══════════════════════════════════════════════════════════════════
  //  COMBINE ALL DOCUMENTS
  // ═══════════════════════════════════════════════════════════════════

  return [
    // 6 products
    productQCL,
    productQCM,
    productQCH,
    productQCEH,
    productQCEHSP,
    productQCTW,
    // 10 drive types
    ...driveTypes,
    // 1 homepage
    homepageDoc,
    // 1 about page
    aboutPageDoc,
    // 1 site settings
    siteSettingsDoc,
  ];
}

/**
 * Seed all documents using a transaction for atomicity.
 */
async function seed() {
  console.log("Building documents (uploading images first)...\n");
  const documents = await buildDocuments();

  if (documents.length === 0) {
    console.log("No documents to seed. Add documents in buildDocuments().");
    return;
  }

  console.log(`\nSeeding ${documents.length} documents...`);
  const transaction = client.transaction();

  for (const doc of documents) {
    transaction.createOrReplace(doc);
  }

  const result = await transaction.commit();
  console.log(`Done. Transaction ID: ${result.transactionId}`);
  console.log(`Seeded ${documents.length} documents.`);
}

seed().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
