export interface SpecRow {
  socketSizes: string
  idlerGears: number[]
  sqDrive: string
  torqueFtLbs: number[]
  torqueNM: number[]
  dimA: number
  dimR: number
}

export interface SpecRowInchLbs {
  socketSizes: string
  idlerGears: number[]
  sqDrive: string
  torqueInLbs: number[]
  torqueNM: number[]
  dimA: number
  dimR: number
}

export interface TubeNutSpecRow {
  modelStyle: string
  diagramImage?: string
  socketSizes: string
  sqDrive: string
  maxTorqueFtLbs: number
  maxTorqueNM: number
  dimA: number
  dimR: number
  dimC: number
  dimD: number
}

export interface SpecRowSP {
  socketSizes: string
  idlerGears: number[]
  sqDrive: string
  torqueFtLbs: number[]
  torqueNM: number[]
  dimA: number
  dimR: number
}

export const specialFeaturedOptions = [
  {
    number: 1,
    text: '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
  },
  {
    number: 2,
    text: "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
  },
  {
    number: 3,
    text: "Width dimensions can be contoured or modified to suit difficult access applications.",
  },
  {
    number: 4,
    text: "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
  },
  {
    number: 5,
    text: "Standard 3/8 square female drive to spindle. Other size options on request.",
  },
  {
    number: 6,
    text: "Standard sockets for QCM wrench blades are shouldered 6 point hex unless otherwise specified.",
  },
]

export const socketDriveChoices = [
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
]

export const products = [
  {
    slug: "qcl",
    model: "QCL",
    name: "Quick Connect Light Duty",
    tagline: "Torque range up to 140 inch lbs / 16 NM",
    sqDrive: "1/4",
    torqueUnit: "INCH/LBS" as const,
    description:
      "The QCL series is designed for light-duty fastening applications where precision and speed matter. With a compact 1\" profile and 1/4\" square drive, these wrench blades are ideal for electronics assembly, instrument panels, and light airframe work.",
    diagramImage: "/catalogue/qcl-diagram.png",
    catalogImage: "/catalogue/qcl-page.jpg",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 1/4 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCL wrench blades are 12 point thru (fractional) and shouldered 6 point hex millimeter unless otherwise specified.",
    ],
    partNumberExample: 'QCL - 5/16 - 3 \'D\'',
    partNumberBreakdown: [
      { label: "Quick Connect Light Duty", value: "QCL" },
      { label: "Socket Size", value: "5/16" },
      { label: "Number Idler Gears", value: "3" },
      { label: "1/4 Square Drive", value: "D" },
    ],
    specs: [
      {
        socketSizes: '1/8 - 3/16 - 1/4\n4mm - 5mm - 6mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueInLbs: [70, 60, 50],
        torqueNM: [8, 7, 6],
        dimA: 0.622,
        dimR: 0.242,
      },
      {
        socketSizes: '9/32 - 5/16\n7mm - 8mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueInLbs: [90, 80, 70],
        torqueNM: [10, 9, 8],
        dimA: 0.647,
        dimR: 0.268,
      },
      {
        socketSizes: '11/32 - 3/8\n9mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueInLbs: [100, 90, 80],
        torqueNM: [11, 10, 9],
        dimA: 0.685,
        dimR: 0.307,
      },
      {
        socketSizes: '7/16\n10mm - 11mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueInLbs: [120, 110, 100],
        torqueNM: [14, 12, 11],
        dimA: 0.734,
        dimR: 0.345,
      },
      {
        socketSizes: '1/2\n12mm - 13mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueInLbs: [130, 120, 110],
        torqueNM: [15, 14, 12],
        dimA: 0.766,
        dimR: 0.385,
      },
      {
        socketSizes: '9/16\n14mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/4",
        torqueInLbs: [140, 130, 120],
        torqueNM: [16, 15, 14],
        dimA: 0.812,
        dimR: 0.427,
      },
    ] as SpecRowInchLbs[],
  },
  {
    slug: "qcm",
    model: "QCM",
    name: "Quick Connect Medium Duty",
    tagline: "Torque range up to 19 ft lbs / 26 NM",
    sqDrive: "3/8",
    torqueUnit: "FOOT/LBS" as const,
    description:
      "The QCM series delivers reliable medium-duty torque for general assembly operations. With a 1 1/4\" profile and 3/8\" square drive, the QCM handles a wide range of aerospace and automotive fastening tasks with ease.",
    diagramImage: "/catalogue/qcm-diagram.png",
    catalogImage: "/catalogue/qcm-page.jpg",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 3/8 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCM wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: 'QCM - 1/2 - 1 \'D\'',
    partNumberBreakdown: [
      { label: "Quick Connect Medium Duty", value: "QCM" },
      { label: "Socket Size", value: "1/2" },
      { label: "Number Idler Gears", value: "1" },
      { label: "3/8 Square Drive", value: "D" },
    ],
    specs: [
      {
        socketSizes: '1/8 thru 5/16\n4mm thru 8mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [15, 14, 13],
        torqueNM: [20, 19, 18],
        dimA: 0.895,
        dimR: 0.307,
      },
      {
        socketSizes: '11/32 thru 3/8\n9mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [16, 15, 14],
        torqueNM: [21, 20, 19],
        dimA: 0.928,
        dimR: 0.345,
      },
      {
        socketSizes: '7/16\n10mm - 11mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [17, 16, 15],
        torqueNM: [23, 21, 20],
        dimA: 0.963,
        dimR: 0.363,
      },
      {
        socketSizes: '1/2\n12mm - 13mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [18, 17, 16],
        torqueNM: [24, 23, 21],
        dimA: 1.013,
        dimR: 0.415,
      },
      {
        socketSizes: '9/16 - 5/8\n14mm - 15mm - 16mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [18, 17, 16],
        torqueNM: [24, 23, 21],
        dimA: 1.054,
        dimR: 0.471,
      },
      {
        socketSizes: '11/16\n17mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [19, 18, 17],
        torqueNM: [26, 24, 23],
        dimA: 1.090,
        dimR: 0.506,
      },
      {
        socketSizes: '3/4\n18mm - 19mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [19, 18, 17],
        torqueNM: [26, 24, 23],
        dimA: 1.122,
        dimR: 0.540,
      },
    ] as SpecRow[],
  },
  {
    slug: "qch",
    model: "QCH",
    name: "Quick Connect Heavy Duty",
    tagline: "Torque range up to 23 ft lbs / 31 NM",
    sqDrive: "3/8",
    torqueUnit: "FOOT/LBS" as const,
    description:
      "The QCH series is built for heavy-duty fastening where higher torque is needed. With a robust construction and 3/8\" square drive, it handles demanding assembly line applications in aerospace, automotive, and heavy industrial environments.",
    diagramImage: "/catalogue/qch-diagram.png",
    catalogImage: "/catalogue/qch-page.jpg",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 3/8 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCH wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: 'QCH - 16mm - 3 \'D\'',
    partNumberBreakdown: [
      { label: "Quick Connect Heavy Duty", value: "QCH" },
      { label: "Socket Size", value: "16mm" },
      { label: "Number Idler Gears", value: "3" },
      { label: "3/8 Square Drive", value: "D" },
    ],
    specs: [
      {
        socketSizes: '1/8 thru 7/16\n4mm thru 11mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [20, 19, 18],
        torqueNM: [27, 26, 24],
        dimA: 0.985,
        dimR: 0.434,
      },
      {
        socketSizes: '1/2\n12mm - 13mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [21, 20, 19],
        torqueNM: [28, 27, 26],
        dimA: 1.017,
        dimR: 0.470,
      },
      {
        socketSizes: '9/16\n14mm - 15mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [22, 21, 20],
        torqueNM: [29, 28, 27],
        dimA: 1.100,
        dimR: 0.558,
      },
      {
        socketSizes: '5/8 - 11/16 - 3/4\n16mm thru 19mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [23, 22, 21],
        torqueNM: [31, 29, 28],
        dimA: 1.167,
        dimR: 0.595,
      },
    ] as SpecRow[],
  },
  {
    slug: "qceh",
    model: "QCEH",
    name: "Quick Connect Extra Heavy Duty",
    tagline: "Torque range up to 33 ft lbs / 45 NM",
    sqDrive: "3/8",
    torqueUnit: "FOOT/LBS" as const,
    description:
      "The QCEH series provides extra heavy-duty torque capacity for the most demanding assembly applications. Featuring a 1 1/2\" profile with 3/8\" square drive, these wrench blades are the go-to choice when standard heavy-duty isn't enough.",
    diagramImage: "/catalogue/qceh-diagram.png",
    catalogImage: "/catalogue/qceh-page.jpg",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 3/8 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCEH wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: 'QCEH - 7/16 - 1 \'D\'',
    partNumberBreakdown: [
      { label: "Quick Connect Extra Heavy Duty", value: "QCEH" },
      { label: "Socket Size", value: "7/16" },
      { label: "Number Idler Gears", value: "1" },
      { label: "3/8 Square Drive", value: "D" },
    ],
    specs: [
      {
        socketSizes: '1/8 thru 7/16\n4mm thru 11mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [29, 28, 27],
        torqueNM: [39, 38, 36],
        dimA: 0.985,
        dimR: 0.434,
      },
      {
        socketSizes: '1/2\n12mm - 13mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [30, 29, 28],
        torqueNM: [41, 39, 38],
        dimA: 1.017,
        dimR: 0.470,
      },
      {
        socketSizes: '9/16\n14mm - 15mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [31, 30, 29],
        torqueNM: [42, 41, 39],
        dimA: 1.100,
        dimR: 0.558,
      },
      {
        socketSizes: '5/8 - 11/16 - 3/4\n16mm thru 19mm',
        idlerGears: [1, 2, 3],
        sqDrive: "3/8",
        torqueFtLbs: [33, 32, 31],
        torqueNM: [45, 43, 42],
        dimA: 1.167,
        dimR: 0.595,
      },
    ] as SpecRow[],
  },
  {
    slug: "qceh-sp",
    model: "QCEH-SP",
    name: "Quick Connect Extra Heavy Duty Special",
    tagline: "Torque range up to 74 ft lbs / 100 NM",
    sqDrive: "1/2",
    torqueUnit: "FOOT/LBS" as const,
    description:
      "The QCEH-SP is the most powerful wrench blade in the Brimatco Quick Connect line. With a 1/2\" square drive and torque capacity up to 74 ft lbs, this series is designed for high-torque structural fastening in aerospace and heavy industrial applications.",
    diagramImage: "/catalogue/qceh-sp-diagram.png",
    catalogImage: "/catalogue/qceh-sp-page.jpg",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Standard 1/2 square female drive to spindle. Other size options on request.",
      "Standard sockets for QCEH-SP wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: 'QCEH-SP - 17mm - 2',
    partNumberBreakdown: [
      { label: "Quick Connect Extra Heavy Duty Special", value: "QCEH-SP" },
      { label: "Socket Size", value: "17mm" },
      { label: "Number Idler Gears", value: "2" },
    ],
    specs: [
      {
        socketSizes: '1/8 thru 1/2\n4mm thru 13mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueFtLbs: [63, 61, 60],
        torqueNM: [85, 83, 81],
        dimA: 1.100,
        dimR: 0.508,
      },
      {
        socketSizes: '14mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueFtLbs: [65, 63, 61],
        torqueNM: [88, 85, 83],
        dimA: 1.125,
        dimR: 0.533,
      },
      {
        socketSizes: '9/16, 5/8\n15mm - 16mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueFtLbs: [68, 66, 64],
        torqueNM: [92, 90, 87],
        dimA: 1.175,
        dimR: 0.584,
      },
      {
        socketSizes: '11/16 - 3/4\n17mm - 18mm - 19mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueFtLbs: [71, 69, 67],
        torqueNM: [96, 94, 91],
        dimA: 1.250,
        dimR: 0.663,
      },
      {
        socketSizes: '13/16 - 7/8\n20mm - 21mm - 22mm',
        idlerGears: [1, 2, 3],
        sqDrive: "1/2",
        torqueFtLbs: [74, 71, 69],
        torqueNM: [100, 96, 94],
        dimA: 1.300,
        dimR: 0.710,
      },
    ] as SpecRow[],
  },
  {
    slug: "tube-nut",
    model: "QC-TW",
    name: "Quick Connect Tube Nut Wrench Blades",
    tagline: "For split socket in-line applications. Torque up to 61 ft lbs / 83 NM",
    sqDrive: "varies",
    torqueUnit: "FOOT/LBS" as const,
    description:
      "Brimatco Tube Nut Wrench Blades are designed for split socket in-line applications such as brake lines, hydraulic fittings, and fuel system connections. Available in light, heavy, and extra heavy duty special configurations.",
    catalogImage: "/catalogue/tube-nut-page.jpg",
    specialOptions: [
      '"A" dimension can be modified to any length to suit existing application (increasing or decreasing the number of idler gears).',
      "Thickness can be modified (slimmed down if necessary for clearance above fastener).",
      "Width dimensions can be contoured or modified to suit difficult access applications.",
      "Sockets can be manufactured to any length desired for recessed or difficult reach applications.",
      "Tube diameter as requested.",
      "Standard sockets for tube nut wrench blades are shouldered 6 point hex unless otherwise specified.",
    ],
    partNumberExample: null,
    partNumberBreakdown: [],
    tubeNutSpecs: [
      {
        modelStyle: "QCEH-TW - SP",
        diagramImage: "/catalogue/qceh-tw-sp-diagram.png",
        socketSizes: "3/8 thru 3/4\n9mm thru 20mm",
        sqDrive: "1/2",
        maxTorqueFtLbs: 61,
        maxTorqueNM: 83,
        dimA: 2.900,
        dimR: 0.720,
        dimC: 0.937,
        dimD: 2.150,
      },
      {
        modelStyle: "QCH-TW",
        diagramImage: "/catalogue/qch-tw-diagram.png",
        socketSizes: "5/16 thru 3/4\n8mm thru 19mm",
        sqDrive: "3/8",
        maxTorqueFtLbs: 22,
        maxTorqueNM: 29,
        dimA: 2.674,
        dimR: 0.605,
        dimC: 0.562,
        dimD: 1.860,
      },
      {
        modelStyle: "QCL-TW",
        diagramImage: "/catalogue/qcl-tw-diagram.png",
        socketSizes: "1/4 thru 9/16\n7mm thru 14mm",
        sqDrive: "1/4",
        maxTorqueFtLbs: 110,
        maxTorqueNM: 12,
        dimA: 1.718,
        dimR: 0.437,
        dimC: 0.500,
        dimD: 1.575,
      },
    ] as TubeNutSpecRow[],
    specs: [] as SpecRow[],
  },
]

export const internalDrives = [
  { name: "Square Thru", description: "Standard square drive socket", image: "/catalogue/int-square-thru.png" },
  { name: "Threaded Sockets", description: "For threaded fastener applications", image: "/catalogue/int-threaded.png" },
  { name: "Spline Sockets", description: "Spline drive for specialized fasteners", image: "/catalogue/int-spline.png" },
  { name: "12 pt. Thru", description: "12-point through socket", image: "/catalogue/int-12pt-thru.png" },
  { name: "Hex Thru", description: "Surface drive / fast lead hex socket", image: "/catalogue/int-hex-thru.png" },
  { name: "Shouldered Hex", description: "Shouldered hex for controlled depth", image: "/catalogue/int-shouldered-hex.png" },
]

export const externalDrives = [
  { name: "Square Drive for Sockets", description: "Standard square drive output", image: "/catalogue/ext-square-drive.png" },
  { name: "Torx Bits/Etc.", description: "Torx and specialty bit drives", image: "/catalogue/ext-torx.png" },
  { name: "Allen/Hex Drives", description: "Allen key and hex drive outputs", image: "/catalogue/ext-allen-hex.png" },
  { name: "Drilling/Reaming/Chamfer", description: "Rotary tool drive applications", image: "/catalogue/ext-drilling.png" },
]
