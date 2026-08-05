import fiberPlantImg from "../assets/gallery/ecology-quadrat-survey-plot-03.jpeg";
import mountainRiskImg from "../assets/gallery/rocky-trail-ascent-01.jpeg";
import agricultureImg from "../assets/gallery/ecology-quadrat-wildflowers-01.jpeg";
import dosDbt1Img from "../assets/gallery/ecology-quadrat-survey-plot-01.jpeg";
import indigenousImg from "../assets/gallery/field-team-discussion-meadow-01.jpeg";
import sdre1Img from "../assets/gallery/forest-trail-trekking-02.jpeg";
import dosDbtIbImg from "../assets/gallery/gps-device-elevation-reading-01.jpeg";
import sdre2Img from "../assets/gallery/team-rest-stop-trail-01.jpeg";
import isroImg from "../assets/gallery/satellite-map-monitoring-stations-01.jpeg";
import glacierStudyImg from "../assets/gallery/researcher-glacier-icecave-01.jpeg";
import waterManagementImg from "../assets/gallery/village-houses-mountainside-01.jpeg";
import glacierPhase2Img from "../assets/gallery/glacier-moraine-valley-01.jpeg";
import gangotriImg from "../assets/gallery/glacier-terminus-bhagirathi-origin-01.jpeg";
import nmhsImg from "../assets/gallery/nmhs-conference-session-newdelhi-01.jpeg";
export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type Project = {
  slug: string;
  title: string;
  image: string;
  gallery: string[];
  researchArea:
    | "Biodiversity"
    | "Forest Ecology"
    | "Climate Change"
    | "Hydrology"
    | "Wildlife Conservation"
    | "GIS & Remote Sensing"
    | "Community & Livelihoods";
  state: string;
  location: string;
  coords: { x: number; y: number };
  year: number;
  duration: string;
  fundingAgency: string;
  status: ProjectStatus;
  summary: string;
  overview: string;
  objectives: string[];
  methodology: string[];
  studyArea: string;
  team: { name: string; role: string }[];
  deliverables: string[];
  timeline: { label: string; date: string }[];
  downloads: { label: string; size: string }[];
  relatedServices: string[];
  wikipedia?: string;
};

const IMG = {
  fiberPlant: fiberPlantImg,
  mountainRisk: mountainRiskImg,
  agriculture: agricultureImg,
  dosDbt: dosDbt1Img,
  indigenous: indigenousImg,
  sdre: sdre1Img,
  sdre2: sdre2Img,
  dosDbtIB: dosDbtIbImg,
  isro: isroImg,
  glacierStudy: glacierStudyImg,
  glacierPhase1: glacierStudyImg,
  glacierPhase2: glacierPhase2Img,
  gangotri: gangotriImg,
  waterManagement: waterManagementImg,
  water: waterManagementImg,
  nmhs: nmhsImg,
};
export const projects: Project[] = [
  {
    slug: "fiber-plant-project",
    title: "Fiber Plant Project",
    image: IMG.fiberPlant,
    gallery: [
      IMG.fiberPlant,
      IMG.agriculture,
      IMG.indigenous,
    ],
    researchArea: "Biodiversity",
    state: "Uttarakhand",
    location: "Kumaon Himalaya, Uttarakhand",
    coords: { x: 42, y: 23 },
    year: 1997,
    duration: "Jul 1997 – Jan 1998",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Fibre_crop",
    summary:
      "Field data collection and documentation support for Himalayan fibre plant resources.",
    overview:
      "Supported scientists in field surveys, specimen documentation and project record management for fibre plant diversity studies in the Indian Himalayan Region.",
    objectives: [
      "Collect field observations.",
      "Assist project documentation.",
      "Maintain field records.",
    ],
    methodology: [
      "Field surveys.",
      "Data compilation.",
      "Documentation support.",
    ],
    studyArea: "Kumaon Region, Uttarakhand",
    team: [
      { name: "Research Scientists", role: "Principal Investigators" },
      { name: "Project Assistant", role: "Field & Documentation Support" },
    ],
    deliverables: [
      "Field records",
      "Project documentation",
      "Survey reports",
    ],
    timeline: [
      { label: "Project Started", date: "1997" },
      { label: "Completed", date: "1998" },
    ],
    downloads: [
      { label: "Project Summary", size: "Internal" },
    ],
    relatedServices: [
      "Field Surveys",
      "Documentation",
    ],
  },

  {
    slug: "mountain-risk-engineering",
    title: "Mountain Risk Engineering (MRE)",
    image: IMG.mountainRisk,
    gallery: [
      IMG.mountainRisk,
      IMG.waterManagement,
      IMG.glacierPhase1,
    ],
    researchArea: "Hydrology",
    state: "Uttarakhand",
    location: "Central Himalaya",
    coords: { x: 41, y: 22 },
    year: 1998,
    duration: "Jan 1998 – Aug 1998",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Natural_hazard",
    summary:
      "Field investigation and documentation support for mountain risk studies.",
    overview:
      "Participated in field data collection, compilation and project documentation supporting mountain hazard research.",
    objectives: [
      "Collect field observations.",
      "Maintain project documentation.",
      "Assist researchers.",
    ],
    methodology: [
      "Site surveys.",
      "Data compilation.",
      "Documentation.",
    ],
    studyArea: "Indian Himalayan Region",
    team: [
      { name: "Research Team", role: "Scientists" },
      { name: "Project Assistant", role: "Documentation Support" },
    ],
    deliverables: [
      "Survey Records",
      "Technical Documentation",
    ],
    timeline: [
      { label: "Started", date: "1998" },
      { label: "Completed", date: "1998" },
    ],
    downloads: [
      { label: "Internal Report", size: "Internal" },
    ],
    relatedServices: [
      "Field Investigation",
      "Documentation",
    ],
  },

  {
    slug: "agriculture-diversity-project",
    title: "Agriculture Diversity Project",
    image: IMG.agriculture,
    gallery: [
      IMG.agriculture,
      IMG.indigenous,
      IMG.fiberPlant,
    ],
    researchArea: "Community & Livelihoods",
    state: "Uttarakhand",
    location: "Kumaon Himalaya",
    coords: { x: 43, y: 24 },
    year: 1998,
    duration: "Aug 1998 – May 1999",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Agrobiodiversity",
    summary:
      "Supported agricultural biodiversity surveys through fieldwork and documentation.",
    overview:
      "Worked on field surveys, compilation of research observations and maintenance of project records for agricultural diversity assessment.",
    objectives: [
      "Conduct field surveys.",
      "Compile research data.",
      "Maintain documentation.",
    ],
    methodology: [
      "Village surveys.",
      "Field observations.",
      "Data recording.",
    ],
    studyArea: "Kumaon Region",
    team: [
      { name: "Scientists", role: "Research Team" },
      { name: "Project Assistant", role: "Field Support" },
    ],
    deliverables: [
      "Survey Records",
      "Project Files",
    ],
    timeline: [
      { label: "Started", date: "1998" },
      { label: "Completed", date: "1999" },
    ],
    downloads: [
      { label: "Project Record", size: "Internal" },
    ],
    relatedServices: [
      "Field Surveys",
      "Research Documentation",
    ],
  },
  {
    slug: "dos-dbt-i-project",
    title: "DOS-DBT I Project",
    image: IMG.dosDbt,
    gallery: [IMG.dosDbt, IMG.dosDbtIB],
    researchArea: "Biodiversity",
    state: "Uttarakhand",
    location: "Indian Himalayan Region",
    coords: { x: 43, y: 23 },
    year: 1999,
    duration: "May 1999 – May 2000",
    fundingAgency: "DOS-DBT",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Biodiversity",
    summary:
      "Supported biodiversity research through field surveys, documentation and project record management.",
    overview:
      "Assisted scientists in field investigations, maintained research documentation and compiled environmental datasets for the DOS-DBT programme.",
    objectives: [
      "Support field investigations.",
      "Maintain project records.",
      "Compile environmental datasets.",
    ],
    methodology: [
      "Field surveys.",
      "Data entry.",
      "Project documentation.",
    ],
    studyArea: "Indian Himalayan Region",
    team: [
      { name: "Research Scientists", role: "Principal Investigators" },
      { name: "Project Assistant", role: "Documentation Support" },
    ],
    deliverables: [
      "Project documentation",
      "Field datasets",
      "Research records",
    ],
    timeline: [
      { label: "Project Start", date: "1999" },
      { label: "Project Completion", date: "2000" },
    ],
    downloads: [
      { label: "Internal Documentation", size: "Internal" },
    ],
    relatedServices: [
      "Environmental Documentation",
      "Research Support",
    ],
  },

  {
    slug: "indigenous-knowledge-system",
    title: "Indigenous Knowledge System",
    image: IMG.indigenous,
    gallery: [IMG.indigenous, IMG.fiberPlant, IMG.sdre2],
    researchArea: "Community & Livelihoods",
    state: "Uttarakhand",
    location: "Kumaon Himalaya",
    coords: { x: 42, y: 24 },
    year: 2000,
    duration: "May 2000 – Sep 2001",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Traditional_ecological_knowledge",
    summary:
      "Documentation of indigenous environmental knowledge through community-based field surveys.",
    overview:
      "Collected traditional ecological knowledge from Himalayan communities and maintained project documentation for institutional records.",
    objectives: [
      "Document indigenous knowledge.",
      "Support community surveys.",
      "Maintain project records.",
    ],
    methodology: [
      "Village interviews.",
      "Field documentation.",
      "Data compilation.",
    ],
    studyArea: "Kumaon Himalaya",
    team: [
      { name: "Scientists", role: "Research Team" },
      { name: "Project Assistant", role: "Field Documentation" },
    ],
    deliverables: [
      "Community records",
      "Project documentation",
      "Survey reports",
    ],
    timeline: [
      { label: "Started", date: "2000" },
      { label: "Completed", date: "2001" },
    ],
    downloads: [
      { label: "Documentation Summary", size: "Internal" },
    ],
    relatedServices: [
      "Community Surveys",
      "Knowledge Documentation",
    ],
  },

  {
    slug: "sdre-core-activity",
    title: "SDRE Core Activity",
    image: IMG.sdre,
    gallery: [IMG.sdre, IMG.sdre2],
    researchArea: "GIS & Remote Sensing",
    state: "Uttarakhand",
    location: "Indian Himalayan Region",
    coords: { x: 41, y: 22 },
    year: 2001,
    duration: "Oct 2001 – Feb 2004",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Remote_sensing",
    summary:
      "Research support, field surveys, data compilation and documentation under SDRE core activities.",
    overview:
      "Supported multiple environmental monitoring activities including field data collection, project coordination and documentation management.",
    objectives: [
      "Support environmental monitoring.",
      "Maintain project records.",
      "Assist research teams.",
    ],
    methodology: [
      "Field observations.",
      "Data compilation.",
      "Administrative support.",
    ],
    studyArea: "Indian Himalayan Region",
    team: [
      { name: "Institute Scientists", role: "Researchers" },
      { name: "Project Assistant", role: "Project Support" },
    ],
    deliverables: [
      "Research documentation",
      "Survey records",
      "Administrative files",
    ],
    timeline: [
      { label: "Phase I", date: "2001–2002" },
      { label: "Phase II", date: "2003–2004" },
    ],
    downloads: [
      { label: "Activity Report", size: "Internal" },
    ],
    relatedServices: [
      "Project Administration",
      "Environmental Monitoring",
    ],
  },
    {
    slug: "dos-dbt-ib-project",
    title: "DOS-DBT IB Project",
    image: IMG.dosDbtIB,
    gallery: [IMG.dosDbtIB, IMG.isro, IMG.glacierStudy],
    researchArea: "Climate Change",
    state: "Uttarakhand",
    location: "Indian Himalayan Region",
    coords: { x: 42, y: 22 },
    year: 2002,
    duration: "May 2002 – Jul 2003",
    fundingAgency: "DOS-DBT",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Climate_change",
    summary:
      "Field and laboratory data collection supporting Himalayan environmental research.",
    overview:
      "Supported researchers through field surveys, laboratory data compilation and documentation management for the DOS-DBT IB Project.",
    objectives: [
      "Collect field observations.",
      "Compile laboratory datasets.",
      "Maintain research documentation.",
    ],
    methodology: [
      "Field investigations.",
      "Laboratory support.",
      "Data management.",
    ],
    studyArea: "Indian Himalayan Region",
    team: [
      { name: "Institute Scientists", role: "Research Team" },
      { name: "Project Assistant", role: "Field & Lab Support" },
    ],
    deliverables: [
      "Research records",
      "Compiled datasets",
      "Technical documentation",
    ],
    timeline: [
      { label: "Started", date: "2002" },
      { label: "Completed", date: "2003" },
    ],
    downloads: [
      { label: "Internal Project Record", size: "Internal" },
    ],
    relatedServices: [
      "Research Documentation",
      "Laboratory Support",
    ],
  },

  {
    slug: "isro-gbp-climate-study",
    title: "ISRO-GBP: Global Climate Change Studies in High Altitude Himalaya",
    image: IMG.isro,
    gallery: [IMG.isro, IMG.glacierStudy, IMG.gangotri],
    researchArea: "Climate Change",
    state: "Uttarakhand",
    location: "High Altitude Himalaya",
    coords: { x: 43, y: 21 },
    year: 2004,
    duration: "Feb 2004 – Apr 2007",
    fundingAgency: "ISRO-GBP",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Climate_change_in_India",
    summary:
      "Supported climate change studies through field surveys, laboratory work and documentation.",
    overview:
      "Worked with scientists in collecting environmental observations, compiling field and laboratory data and maintaining project documentation for ISRO's Himalayan climate programme.",
    objectives: [
      "Support climate monitoring.",
      "Compile scientific datasets.",
      "Maintain project records.",
    ],
    methodology: [
      "Field sampling.",
      "Laboratory compilation.",
      "Technical documentation.",
    ],
    studyArea: "High Altitude Himalaya",
    team: [
      { name: "Project Scientists", role: "Research Team" },
      { name: "Project Assistant", role: "Documentation & Field Support" },
    ],
    deliverables: [
      "Climate datasets",
      "Project documentation",
      "Survey records",
    ],
    timeline: [
      { label: "Project Started", date: "2004" },
      { label: "Project Completed", date: "2007" },
    ],
    downloads: [
      { label: "Climate Study Record", size: "Internal" },
    ],
    relatedServices: [
      "Climate Monitoring",
      "Environmental Documentation",
    ],
  },

  {
    slug: "glacier-studies-kumaon-phase1",
    title: "Glacier Studies of Kumaon Himalaya",
    image: IMG.glacierStudy,
    gallery: [IMG.glacierStudy, IMG.glacierPhase2, IMG.water],
    researchArea: "Hydrology",
    state: "Uttarakhand",
    location: "Kumaon Himalaya",
    coords: { x: 42, y: 20 },
    year: 2007,
    duration: "May 2007 – Jan 2010",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Glacier",
    summary:
      "Field data collection and documentation for glacier monitoring across Kumaon Himalaya.",
    overview:
      "Participated in glacier field surveys, environmental observations, documentation and maintenance of institutional records supporting Himalayan glacier research.",
    objectives: [
      "Collect glacier field data.",
      "Support scientific documentation.",
      "Maintain research records.",
    ],
    methodology: [
      "Glacier surveys.",
      "Data compilation.",
      "Project documentation.",
    ],
    studyArea: "Kumaon Himalaya",
    team: [
      { name: "Glacier Research Team", role: "Scientists" },
      { name: "Project Assistant", role: "Field Support" },
    ],
    deliverables: [
      "Field observations",
      "Technical records",
      "Project reports",
    ],
    timeline: [
      { label: "Started", date: "2007" },
      { label: "Completed", date: "2010" },
    ],
    downloads: [
      { label: "Project Summary", size: "Internal" },
    ],
    relatedServices: [
      "Glacier Monitoring",
      "Field Documentation",
    ],
  },
    {
    slug: "participatory-water-management",
    title: "Participatory Water Management Plan for Mid-Altitude Himalayan Villages",
    image: IMG.waterManagement,
    gallery: [IMG.waterManagement, IMG.sdre, IMG.glacierPhase2],
    researchArea: "Hydrology",
    state: "Uttarakhand",
    location: "Mid-Altitude Himalayan Villages",
    coords: { x: 43, y: 23 },
    year: 2010,
    duration: "Feb 2010 – Aug 2011",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Water_resource_management",
    summary:
      "Supported participatory water resource planning through field investigations and documentation.",
    overview:
      "Assisted scientists in village-level surveys, water resource assessments, documentation and compilation of technical records for participatory water management planning.",
    objectives: [
      "Support village water resource surveys.",
      "Compile project datasets.",
      "Maintain project documentation.",
    ],
    methodology: [
      "Village surveys.",
      "Field observations.",
      "Documentation and reporting.",
    ],
    studyArea: "Mid-altitude Himalayan villages of Uttarakhand",
    team: [
      { name: "Research Scientists", role: "Principal Investigators" },
      { name: "Project Assistant", role: "Field & Documentation Support" },
    ],
    deliverables: [
      "Water resource database",
      "Technical documentation",
      "Survey reports",
    ],
    timeline: [
      { label: "Project Started", date: "2010" },
      { label: "Project Completed", date: "2011" },
    ],
    downloads: [
      { label: "Project Report", size: "Internal" },
    ],
    relatedServices: [
      "Water Resource Assessment",
      "Community Surveys",
    ],
  },

  {
    slug: "glacier-studies-kumaon-phase2",
    title: "Glacier Studies of Kumaon Himalaya – Phase II",
    image: IMG.glacierPhase2,
    gallery: [IMG.glacierPhase2, IMG.glacierStudy, IMG.gangotri],
    researchArea: "Climate Change",
    state: "Uttarakhand",
    location: "Kumaon Himalaya",
    coords: { x: 42, y: 21 },
    year: 2011,
    duration: "Aug 2011 – Nov 2013",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Glacier_mass_balance",
    summary:
      "Continuation of glacier monitoring through field surveys and documentation.",
    overview:
      "Participated in glacier monitoring, scientific documentation, reporting and maintenance of institutional records for Phase II glacier studies.",
    objectives: [
      "Continue glacier monitoring.",
      "Assist scientific documentation.",
      "Maintain project records.",
    ],
    methodology: [
      "Glacier field surveys.",
      "Data compilation.",
      "Technical reporting.",
    ],
    studyArea: "Kumaon Himalaya",
    team: [
      { name: "Glacier Research Team", role: "Scientists" },
      { name: "Project Assistant", role: "Project Support" },
    ],
    deliverables: [
      "Monitoring reports",
      "Field records",
      "Technical documentation",
    ],
    timeline: [
      { label: "Started", date: "2011" },
      { label: "Completed", date: "2013" },
    ],
    downloads: [
      { label: "Monitoring Report", size: "Internal" },
    ],
    relatedServices: [
      "Glacier Monitoring",
      "Climate Studies",
    ],
  },

  {
    slug: "gangotri-glacier-hydrochemical-study",
    title: "Geodynamics & Hydrochemical Study of Gangotri Glacier",
    image: IMG.gangotri,
    gallery: [IMG.gangotri, IMG.glacierStudy, IMG.waterManagement],
    researchArea: "Hydrology",
    state: "Uttarakhand",
    location: "Gangotri Glacier",
    coords: { x: 40, y: 20 },
    year: 2013,
    duration: "Nov 2013 – Feb 2016",
    fundingAgency: "GBPNIHE",
    status: "Completed",
    wikipedia: "https://en.wikipedia.org/wiki/Gangotri_Glacier",
    summary:
      "Field surveys, hydrochemical data collection and documentation for Gangotri Glacier research.",
    overview:
      "Supported glacier field expeditions, hydrochemical data collection, project documentation and compilation of institutional scientific records.",
    objectives: [
      "Collect glacier field observations.",
      "Compile hydrochemical datasets.",
      "Support project documentation.",
    ],
    methodology: [
      "Field sampling.",
      "Laboratory data compilation.",
      "Technical documentation.",
    ],
    studyArea: "Gangotri Glacier, Uttarakhand",
    team: [
      { name: "Project Scientists", role: "Research Team" },
      { name: "Project Assistant", role: "Field & Documentation Support" },
    ],
    deliverables: [
      "Hydrochemical database",
      "Technical records",
      "Project documentation",
    ],
    timeline: [
      { label: "Project Started", date: "2013" },
      { label: "Completed", date: "2016" },
    ],
    downloads: [
      { label: "Technical Report", size: "Internal" },
    ],
    relatedServices: [
      "Glacier Studies",
      "Hydrological Documentation",
    ],
  },
    {
    slug: "national-mission-himalayan-studies",
    title: "National Mission on Himalayan Studies (NMHS-PMU)",
    image: IMG.nmhs,
    gallery: [IMG.nmhs, IMG.sdre, IMG.glacierStudy, IMG.waterManagement],
    researchArea: "Community & Livelihoods",
    state: "Uttarakhand",
    location: "GB Pant National Institute of Himalayan Environment, Almora",
    coords: { x: 43, y: 22 },
    year: 2016,
    duration: "Feb 2016 – Present",
    fundingAgency: "National Mission on Himalayan Studies (NMHS)",
    status: "Ongoing",
    wikipedia: "https://en.wikipedia.org/wiki/Indian_Himalayan_Region",
    summary:
      "Providing project implementation, documentation, administrative coordination and institutional support for the National Mission on Himalayan Studies Programme Management Unit.",
    overview:
      "Supporting one of India's flagship Himalayan research programmes through project coordination, documentation management, meeting logistics, communication, institutional record keeping and administrative assistance across multiple environmental research projects.",
    objectives: [
      "Maintain project documentation and institutional records.",
      "Coordinate communication among scientists and stakeholders.",
      "Support meetings, logistics and official correspondence.",
      "Ensure systematic archival of project documents.",
    ],
    methodology: [
      "Project documentation management.",
      "Administrative coordination.",
      "Record maintenance and archival.",
      "Office communication support.",
    ],
    studyArea:
      "GB Pant National Institute of Himalayan Environment, Almora, Uttarakhand.",
    team: [
      {
        name: "Principal Investigators",
        role: "Scientific Leadership",
      },
      {
        name: "NMHS Programme Management Unit",
        role: "Project Coordination",
      },
      {
        name: "Project Assistant",
        role: "Documentation & Administrative Support",
      },
    ],
    deliverables: [
      "Project documentation",
      "Institutional records",
      "Meeting coordination",
      "Official correspondence",
      "Administrative reports",
    ],
    timeline: [
      { label: "Programme Started", date: "2016" },
      { label: "Documentation System", date: "2017" },
      { label: "Ongoing Support", date: "2018–Present" },
    ],
    downloads: [
      {
        label: "Project Documentation",
        size: "Internal",
      },
    ],
    relatedServices: [
      "Project Coordination",
      "Documentation Management",
      "Administrative Support",
      "Institutional Record Management",
    ],
  },
];

export const researchAreas = [
  "Biodiversity",
  "Forest Ecology",
  "Climate Change",
  "Hydrology",
  "Wildlife Conservation",
  "GIS & Remote Sensing",
  "Community & Livelihoods",
] as const;

export const states = [
  "Uttarakhand",
] as const;

export const fundingAgencies = [
  "GB Pant National Institute of Himalayan Environment",
  "National Mission on Himalayan Studies (NMHS)",
  "ISRO-GBP",
  "DOS-DBT",
] as const;

export const statuses: ProjectStatus[] = [
  "Ongoing",
  "Completed",
  "Upcoming",
];

export const publicationsMock = [
  {
    title: "National Mission on Himalayan Studies Documentation",
    date: "2025",
    category: "Project Documentation",
    size: "Internal",
  },
  {
    title: "Geodynamics and Hydrochemical Study of Gangotri Glacier",
    date: "2016",
    category: "Technical Documentation",
    size: "Internal",
  },
  {
    title: "Glacier Studies of Kumaon Himalaya Phase II",
    date: "2013",
    category: "Project Documentation",
    size: "Internal",
  },
  {
    title: "Participatory Water Management Plan",
    date: "2011",
    category: "Project Documentation",
    size: "Internal",
  },
];

export const projectStats = {
  years: 29,
  fieldSurveys: 13,
  researchProjects: 13,
  collaborations: 30,
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function relatedProjects(
  slug: string,
  area: Project["researchArea"],
  limit = 3,
) {
  return projects
    .filter((p) => p.slug !== slug && p.researchArea === area)
    .concat(
      projects.filter(
        (p) => p.slug !== slug && p.researchArea !== area,
      ),
    )
    .slice(0, limit);
}