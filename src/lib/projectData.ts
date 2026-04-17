// /lib/data/projects.ts

export type ProjectCategory =
  | "Office & Residence";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  location: string;
  year: number;
  coverImage: string;
  images: string[];
};

export const projects: Project[] = [
  /*--------------- Office Projects ----------------*/
  {
    title: "Urban Company, Corporate Office",
    slug: "urban-company-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Plot-183 Udyog Vihar Phase-I, Gurugram",
    year: 2023,
    coverImage: "/images/projects/urban-comany-office.webp",
    images: [
      "/images/projects/urban-company-office-1.jpg",
      "/images/projects/urban-company-office-8.jpg",
      "/images/projects/urban-company-office-9.jpg",
      "/images/projects/urban-company-office-10.jpg",
      "/images/projects/urban-company-office-11.jpg",
      "/images/projects/urban-company-office-12.jpg",
      "/images/projects/urban-company-office-13.jpg",
      "/images/projects/urban-company-office-14.jpg",
      "/images/projects/urban-company-office-15.jpg",
      "/images/projects/urban-company-office-2.jpg",
      "/images/projects/urban-company-office-3.jpg",
      "/images/projects/urban-company-office-4.jpg",
      "/images/projects/urban-company-office-5.jpg",
      "/images/projects/urban-company-office-7.jpg",

    ],
  },
  {
    title: "Fab Hotel, Corporate Office",
    slug: "fab-hotel-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Plot 183, Udyoog Vihar, Gurugram",
    year: 2024,
    coverImage: "/images/projects/feb-hotel/1.webp",
    images: [
      "/images/projects/feb-hotel/1.webp",
      "/images/projects/feb-hotel/2.webp",
      "/images/projects/feb-hotel/3.webp",
      "/images/projects/feb-hotel/4.webp",
      "/images/projects/feb-hotel/5.webp",
      "/images/projects/feb-hotel/6.webp",
      "/images/projects/feb-hotel/7.webp",
      "/images/projects/feb-hotel/8.webp",
      "/images/projects/feb-hotel/9.webp",
      "/images/projects/feb-hotel/10.webp",
    ],
  },
  {
    title: "Medology Office",
    slug: "medology-office",
    category: "Office & Residence",
    description:
      "A smart technology hub designed to foster innovation, featuring state-of-the-art meeting rooms, ergonomic workstations, and expansive collaborative areas.",
    location: "Plot 183, Udyoog Vihar, Gurugram",
    year: 2024,
    coverImage: "/images/projects/medology/1.webp",
    images: [
      "/images/projects/medology/1.webp",
      "/images/projects/medology/2.webp",
    ],
  },
  {
    title: "Electrolux Office",
    slug: "electrolux-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Walled Block, Delhi Cantonment, Delhi",
    year: 2024,
    coverImage: "/images/projects/electrolux/1.webp",
    images: ["/images/projects/electrolux/1.webp"],
  },
  {
    title: "CIBT Corporate Office",
    slug: "cibt-corporate-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Gurugram",
    year: 2023,
    coverImage: "/images/projects/cibt-office.jpg",
    images: [
      "/images/projects/cibt-office.jpg",
      "/images/projects/cibt-office-1.jpg",
      "/images/projects/cibt-office-2.jpg",
      "/images/projects/cibt-office-3.jpg",
      "/images/projects/cibt-office-4.jpg",
      "/images/projects/cibt-office-5.jpg",
      "/images/projects/cibt-office-6.jpg",
      "/images/projects/cibt-office-7.jpg",
      "/images/projects/cibt-office-8.jpg",
      "/images/projects/cibt-office-9.jpg",
    ],
  },
  {
    title: "Hotel Red Velvet, Corporate Office",
    slug: "red-velvet-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Gurugram",
    year: 2023,
    coverImage: "/images/projects/red-velvet-office.jpg",
    images: [
      "/images/projects/red-velvet-office.jpg",
      "/images/projects/red-velvet-office-2.jpg",
      "/images/projects/red-velvet-office-3.jpg",
      "/images/projects/red-velvet-office-4.jpg",
    ],
  },
  {
    title: "Goldmine Office, Urbtech",
    slug: "urbtech-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Sector-138, Noida, Uttar Pradesh",
    year: 2023,
    coverImage: "/images/projects/urbtech-office.jpg",
    images: [
      "/images/projects/urbtech-office.jpg",
      "/images/projects/urbtech-office-2.jpg",
      "/images/projects/urbtech-office-3.jpg",
      "/images/projects/urbtech-office-4.jpg",
    ],
  },
  {
    title: "Zimbabwe Ambassador Home Office",
    slug: "defence-colony-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Defense Colony, New Delhi",
    year: 2023,
    coverImage: "/images/projects/defence-colony-office.jpg",
    images: [
      "/images/projects/defence-colony-office.jpg",
      "/images/projects/defence-colony-office-2.jpg",
      "/images/projects/defence-colony-office-3.jpg",
    ],
  },
  {
    title: "Go Work, Co-Working Offices",
    slug: "go-works-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Udyog Vihar Phase-I, Gurugram",
    year: 2023,
    coverImage: "/images/projects/GoWork-1.jpg",
    images: [
      "/images/projects/GoWork-1.jpg",
      "/images/projects/GoWork-2.jpg",
      "/images/projects/GoWork-3.jpg",
      "/images/projects/GoWork-4.jpg",
      "/images/projects/GoWork-5.jpg",
      "/images/projects/GoWork-10.jpg",
      "/images/projects/GoWork-11.jpg",
      "/images/projects/GoWork-12.jpg",
      "/images/projects/GoWork-13.jpg",
      "/images/projects/GoWork-14.jpg",
    ],
  },
  {
    title: "New Door, Real Estate Consultant Office",
    slug: "new-door-success-tower",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Success Tower, Sector-62, Noida",
    year: 2023,
    coverImage: "/images/projects/new-door-success-tower.jpg",
    images: [
      "/images/projects/new-door-success-tower.jpg",
      "/images/projects/new-door-success-tower-1.jpg",
      "/images/projects/new-door-success-tower-2.jpg",
      "/images/projects/new-door-success-tower-3.jpg",
      "/images/projects/new-door-success-tower-4.jpg",
      "/images/projects/new-door-success-tower-5.jpg",
      "/images/projects/new-door-success-tower-6.jpg",
      "/images/projects/new-door-success-tower-7.jpg",
    ],
  },
  {
    title: "Prabhattyam Solvex  Pvt Limited",
    slug: "prabhattyam-solvex-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Sector 135, Noida",
    year: 2023,
    coverImage: "/images/projects/sector-135-office.jpg",
    images: [
      "/images/projects/sector-135-office.jpg",
      "/images/projects/sector-135-office-1.jpg",
      "/images/projects/sector-135-office-2.jpg",
      "/images/projects/sector-135-office-3.jpg",
      "/images/projects/sector-135-office-4.jpg",
      "/images/projects/sector-135-office-5.jpg",
      "/images/projects/sector-135-office-6.jpg",
    ],
  },
  {
    title: "General Commandant Office",
    slug: "general-commandant-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "Delhi Cantonment, Delhi",
    year: 2023,
    coverImage: "/images/projects/office-for-general-commandant.jpg",
    images: [
      "/images/projects/office-for-general-commandant.jpg",
      "/images/projects/office-for-general-commandant-2.jpg",
      "/images/projects/office-for-general-commandant-3.jpg",
    ],
  },
  {
    title: "Perfect House",
    slug: "perfect-house-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "DLF Phase-II, Gurugram",
    year: 2023,
    coverImage: "/images/projects/the-perfect-house-office.jpg",
    images: [
      "/images/projects/the-perfect-house-office-1.jpg",
      "/images/projects/the-perfect-house-office-2.jpg",
      "/images/projects/the-perfect-house-office-3.jpg",
    ],
  },
  {
    title: "DM 23",
    slug: "dm-23-real-estate-office",
    category: "Office & Residence",
    description:
      "Modern office design balances comfort, flexibility, and function with breakout areas, collaboration zones, natural and adjustable lighting, and a welcoming reception to boost productivity and well-being.",
    location: "DLF Phase-III, Gurugram",
    year: 2023,
    coverImage: "/images/projects/real-estate-office.jpg",
    images: ["/images/projects/real-estate-office.jpg"],
  },
];
