import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const projects = [
    {
        title: "Fiber Plant Project",
        slug: "fiber-plant-project",
        description: "Field data collection and documentation support for Himalayan fibre plant resources.",
        imageUrl: "/assets/gallery/ecology-quadrat-survey-plot-03.jpeg",
        status: "Completed",
    },
    {
        title: "Mountain Risk Engineering (MRE)",
        slug: "mountain-risk-engineering",
        description: "Field investigation and documentation support for mountain risk studies.",
        imageUrl: "/assets/gallery/rocky-trail-ascent-01.jpeg",
        status: "Completed",
    },
    {
        title: "Agriculture Diversity Project",
        slug: "agriculture-diversity-project",
        description: "Supported agricultural biodiversity surveys through fieldwork and documentation.",
        imageUrl: "/assets/gallery/ecology-quadrat-wildflowers-01.jpeg",
        status: "Completed",
    },
    {
        title: "DOS-DBT I Project",
        slug: "dos-dbt-i-project",
        description: "Supported biodiversity research through field surveys, documentation and project record management.",
        imageUrl: "/assets/gallery/ecology-quadrat-survey-plot-01.jpeg",
        status: "Completed",
    },
    {
        title: "Indigenous Knowledge System",
        slug: "indigenous-knowledge-system",
        description: "Documentation of indigenous environmental knowledge through community-based field surveys.",
        imageUrl: "/assets/gallery/field-team-discussion-meadow-01.jpeg",
        status: "Completed",
    },
    {
        title: "SDRE Core Activity",
        slug: "sdre-core-activity",
        description: "Research support, field surveys, data compilation and documentation under SDRE core activities.",
        imageUrl: "/assets/gallery/forest-trail-trekking-02.jpeg",
        status: "Completed",
    },
    {
        title: "DOS-DBT IB Project",
        slug: "dos-dbt-ib-project",
        description: "Field and laboratory data collection supporting Himalayan environmental research.",
        imageUrl: "/assets/gallery/gps-device-elevation-reading-01.jpeg",
        status: "Completed",
    },
    {
        title: "ISRO-GBP: Global Climate Change Studies in High Altitude Himalaya",
        slug: "isro-gbp-climate-study",
        description: "Supported climate change studies through field surveys, laboratory work and documentation.",
        imageUrl: "/assets/gallery/satellite-map-monitoring-stations-01.jpeg",
        status: "Completed",
    },
    {
        title: "Glacier Studies of Kumaon Himalaya",
        slug: "glacier-studies-kumaon-phase1",
        description: "Field data collection and documentation for glacier monitoring across Kumaon Himalaya.",
        imageUrl: "/assets/gallery/researcher-glacier-icecave-01.jpeg",
        status: "Completed",
    },
    {
        title: "Participatory Water Management Plan for Mid-Altitude Himalayan Villages",
        slug: "participatory-water-management",
        description: "Supported participatory water resource planning through field investigations and documentation.",
        imageUrl: "/assets/gallery/village-houses-mountainside-01.jpeg",
        status: "Completed",
    },
    {
        title: "Glacier Studies of Kumaon Himalaya – Phase II",
        slug: "glacier-studies-kumaon-phase2",
        description: "Continuation of glacier monitoring through field surveys and documentation.",
        imageUrl: "/assets/gallery/glacier-moraine-valley-01.jpeg",
        status: "Completed",
    },
    {
        title: "Geodynamics & Hydrochemical Study of Gangotri Glacier",
        slug: "gangotri-glacier-hydrochemical-study",
        description: "Field surveys, hydrochemical data collection and documentation for Gangotri Glacier research.",
        imageUrl: "/assets/gallery/glacier-terminus-bhagirathi-origin-01.jpeg",
        status: "Completed",
    },
    {
        title: "National Mission on Himalayan Studies (NMHS-PMU)",
        slug: "national-mission-himalayan-studies",
        description: "Providing project implementation, documentation, administrative coordination and institutional support.",
        imageUrl: "/assets/gallery/nmhs-conference-session-newdelhi-01.jpeg",
        status: "Ongoing",
    },
];
async function main() {
    await prisma.project.deleteMany();
    await prisma.project.createMany({
        data: projects,
    });
    console.log("Projects seeded successfully");
}
main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=projects.js.map