export const PROJECTS = [
  {
    id: 6,
    slug: "hadejija-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Hadejija Solar Project",
    description: "A gallery of installation photos from the Hadejija project.",
    heroDescription:
      "A 40kWp solar mini-grid project commissioned in December 2025 in Hadejiya, Jigawa State, Nigeria. This sustainable off-grid installation delivers reliable, continuous clean energy to empower local households, businesses, and essential community services while significantly reducing dependence on traditional fuel generators.",
    image: "/projects/Hadejija/IMG-20261014-WA0029.jpg",
    location: "Hadejija, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Hadejija, from the site and equipment through the completed work.",
    highlights: [
      "Project photos from the Hadejija installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261014-WA0029.jpg",
      "IMG-20261014-WA0030.jpg",
      "IMG-20261014-WA0037.jpg",
      "IMG-20261014-WA0041.jpg",
      "IMG-20261014-WA0059.jpg",
      "IMG-20261014-WA0107.jpg",
      "IMG-20261014-WA0110.jpg",
      "IMG-20261014-WA0111.jpg",
      "IMG-20261014-WA0112.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Hadejija/${filename}`,
      alt: `Hadejija solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 7,
    slug: "lagos-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Lagos Solar Project",
    description: "A gallery of installation photos from the Lagos project.",
    heroDescription:
      "A 256kWp commercial solar installation completed between March and April 2024 in Lagos, Nigeria. This high-capacity solar setup provides a dependable, eco-friendly energy solution designed to significantly lower operational electricity expenses, ensure uninterrupted workflow during grid instability, and reduce reliance on expensive diesel generators.",
    image: "/projects/Lagos/IMG-20261006-WA0000.jpg",
    location: "Lagos, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Lagos, from the site and equipment through the completed work.",
    highlights: [
      "Project photos from the Lagos installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261006-WA0000.jpg",
      "IMG-20261014-WA0035.jpg",
      "IMG-20261014-WA0036.jpg",
      "IMG-20261014-WA0037.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Lagos/${filename}`,
      alt: `Lagos solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 8,
    slug: "lokogoma-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Lokogoma Solar Project",
    description: "A gallery of installation photos from the Lokogoma project.",
    heroDescription:
      "A 12kWp residential solar setup completed on May 26th, utilizing a solar carport design to provide reliable clean energy while doubling as a covered parking structure.",
    image: "/projects/Lokogoma/IMG-20261006-WA0000.jpg",
    location: "Lokogoma, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Lokogoma, from the site and equipment through the completed work.",
    highlights: [
      "Project photos from the Lokogoma installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    testimonial: {
      quote:
        "Switching to solar was the best decision we’ve made for our home! Before working with the team, our monthly electricity bills were getting out of hand, and power outages were a constant frustration. From the initial consultation to the final installation, everything was seamless and professional. They helped us choose the right size system for our family's needs without pushing unnecessary upgrades. Now, our power is 100% reliable, and our energy bills have dropped dramatically. I only wish we had done this years ago!",
      attribution: "Sarah and Davis",
    },
    media: [
      "IMG-20261006-WA0000.jpg",
      "IMG-20261006-WA0001.jpg",
      "IMG-20261014-WA0038.jpg",
      "IMG-20261014-WA0040.jpg",
      "IMG-20261014-WA0041.jpg",
      "IMG-20261014-WA0053.jpg",
      "IMG-20261014-WA0055.jpg",
      "IMG-20261014-WA0057.jpg",
      "IMG-20261014-WA0059.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Lokogoma/${filename}`,
      alt: `Lokogoma solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 9,
    slug: "nanguru-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Nanguru Solar Project",
    description: "A gallery of installation photos from the Nanguru project.",
    heroDescription:
      "A power distribution infrastructure project completed in February 2026 at Nanguru, Taraba State, Nigeria. This initiative expanded local grid connectivity and enhanced power supply reliability, ensuring stable electricity access for households, public facilities, and small businesses across the community.",
    image: "/projects/Nanguru/IMG-20261014-WA0007.jpg",
    location: "Nanguru, Nigeria",
    overview:
      "Explore photos documenting the solar installation project in Nanguru, from the site and equipment through the completed work.",
    highlights: [
      "Project photos from the Nanguru installation",
      "Solar equipment and site details",
      "A real project delivered by JODU-TECH LTD",
    ],
    testimonial: {
      title: "Seamless installation and incredible results!",
      quote:
        "The crew was punctual, knowledgeable, and left everything spotless. Our solar system has been running flawlessly, and seeing our energy bill drop almost to zero feels amazing. Truly a top-tier company!",
      attribution: "Elena R.",
    },
    media: [
      "IMG-20261014-WA0007.jpg",
      "IMG-20261014-WA0010.jpg",
      "IMG-20261014-WA0011.jpg",
      "IMG-20261014-WA0012.jpg",
      "IMG-20261014-WA0013.jpg",
      "IMG-20261014-WA0017.jpg",
      "IMG-20261014-WA0018.jpg",
      "IMG-20261014-WA0019.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/Nanguru/${filename}`,
      alt: `Nanguru solar project, photo ${index + 1}`,
    })),
  },
  {
    id: 10,
    slug: "taraba-solar-project",
    category: "SOLAR INSTALLATION",
    title: "Taraba Solar Project",
    description:
      "A 1MWp solar mini-grid project dedicated to rural electrification across Taraba State, Nigeria. This large-scale off-grid installation delivers reliable, continuous clean energy to underserved communities boosting local economic growth, improving living standards, and powering households, schools, and healthcare facilities.",
    heroDescription:
      "A 1MWp solar mini-grid project dedicated to rural electrification across Taraba State, Nigeria. This large-scale off-grid installation delivers reliable, continuous clean energy to underserved communities boosting local economic growth, improving living standards, and powering households, schools, and healthcare facilities.",
    image: "/projects/taraba/IMG-20261015-WA0022.jpg",
    location: "Taraba State, Nigeria",
    overview:
      "A 1MWp solar mini-grid project delivering reliable off-grid electricity to underserved communities across Taraba State, powering homes, schools, and healthcare facilities.",
    highlights: [
      "1MWp solar mini-grid for rural electrification",
      "Clean, reliable power for households and essential community services",
      "Supporting economic growth and improved living standards",
      "A real project delivered by JODU-TECH LTD",
    ],
    media: [
      "IMG-20261015-WA0014.jpg",
      "IMG-20261015-WA0015.jpg",
      "IMG-20261015-WA0017.jpg",
      "IMG-20261015-WA0018.jpg",
      "IMG-20261015-WA0021.jpg",
      "IMG-20261015-WA0022.jpg",
      "IMG-20261015-WA0023.jpg",
      "IMG-20261015-WA0025.jpg",
      "IMG-20261015-WA0026.jpg",
      "IMG-20261015-WA0027.jpg",
      "IMG-20261015-WA0028.jpg",
      "IMG-20261015-WA0029.jpg",
      "IMG-20261015-WA0030.jpg",
      "IMG-20261015-WA0031.jpg",
      "IMG-20261015-WA0034.jpg",
    ].map((filename, index) => ({
      type: "image",
      src: `/projects/taraba/${filename}`,
      alt: `Taraba solar project, photo ${index + 1}`,
    })),
  },
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((project) => project.slug === slug);
}
