import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  FileText,
  Compass,
  BookOpen,
  Handshake,
  TreePine,
  ScrollText,
  GraduationCap,
  Truck,
  ArrowUpRight,
  ShieldCheck,
  Microscope,
  MapPinned,
  BadgeCheck,
  Library,
  AlertTriangle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { FloatingContact } from "@/components/site/floating-contact";
import { BrandMark } from "@/components/site/brand-mark";
import { useResearchDomains } from "@/hooks/useResearchDomains";

import biodiversityImg from "@/assets/gallery/ecology-quadrat-survey-plot-02.jpeg";
import glacierImg from "@/assets/project-glacier.jpg";
import climateImg from "@/assets/hero-himalaya.jpg";
import ecologyImg from "@/assets/project-forest.jpg";


function ResearchRoute() {
  return null;
}


export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      {
        title: "Himalayan Research Domains & Expertise — HERC",
      },
      {
        name: "description",
        content:
          "Explore HERC's research domains and field expertise: Himalayan biodiversity, cryosphere, watersheds, climate change, and institutional project support.",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "/research",
      },
    ],
  }),

  component: ResearchIndex,
});


const fallbackImages = [
  biodiversityImg,
  ecologyImg,
  climateImg,
  glacierImg,
  biodiversityImg,
  biodiversityImg,
];


function getDomainImage(
  imageUrl: string | null | undefined,
  index: number
) {
  if (imageUrl) return imageUrl;

  return fallbackImages[index % fallbackImages.length];
}


type Expertise = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  note: string;
};


const expertise: Expertise[] = [
  {
    icon: Compass,
    title: "Field Investigation",
    note: "High-altitude glacier, biodiversity and environmental field surveys",
  },
  {
    icon: BookOpen,
    title: "Research Documentation",
    note: "Technical reports, publications and scientific documentation",
  },
  {
    icon: Handshake,
    title: "Project Coordination",
    note: "Government, institutional and multi-disciplinary projects",
  },
  {
    icon: TreePine,
    title: "Environmental Surveys",
    note: "Forest ecology, biodiversity and ecosystem assessments",
  },
  {
    icon: ScrollText,
    title: "Scientific Reporting",
    note: "Project reports, conference proceedings and documentation",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    note: "Supporting students, researchers and field teams",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    note: "Project deliverables, manuals and institutional records",
  },
  {
    icon: Truck,
    title: "Field Logistics",
    note: "Expeditions, high-altitude camps and equipment management",
  },
];


const methodology = [
  {
    title: "Planning",
    note: "Scoping, protocols, permissions",
  },
  {
    title: "Field Survey",
    note: "Transects, plots, sampling",
  },
  {
    title: "Scientific Documentation",
    note: "Field notes and evidence",
  },
  {
    title: "Data Compilation",
    note: "Cleaning, structuring, QA",
  },
  {
    title: "Technical Reporting",
    note: "Institutional-grade reports",
  },
  {
    title: "Project Support",
    note: "Follow-through and hand-off",
  },
];


type Featured = {
  name: string;
  duration: string;
  role: string;
  area: string;
  image: string;
  summary: string;
};


const featured: Featured[] = [
  {
    name: "ISRO-GBP Global Climate Change Studies in High Altitude Himalaya",
    duration: "Feb 2004 – Apr 2007",
    role: "Project Support & Research Documentation",
    area: "Climate Change & High Altitude Ecosystems",
    image: climateImg,
    summary:
      "Supported Himalayan climate research through field data compilation, project documentation and coordination support.",
  },
  {
    name: "Geodynamics and Hydrochemical Study of Gangotri Glacier",
    duration: "Nov 2013 – Feb 2016",
    role: "Field Data & Project Support",
    area: "Glaciology & Himalayan Water Systems",
    image: glacierImg,
    summary:
      "Contributed to glacier research activities through field data collection, compilation and scientific documentation.",
  },
  {
    name: "Glacier Studies of Kumaon Himalaya Project",
    duration: "May 2007 – Jan 2010",
    role: "Research Project Support",
    area: "Glacier Ecology & Mountain Environment",
    image: ecologyImg,
    summary:
      "Supported Himalayan glacier investigations through field surveys and scientific record management.",
  },
];


const whyWorkWithUs = [
  {
    icon: BadgeCheck,
    title: "Decades of Experience",
    note: "Long-standing Himalayan field practice.",
  },
  {
    icon: Library,
    title: "Institutional Knowledge",
    note: "Continuity across programmes and partners.",
  },
  {
    icon: Microscope,
    title: "Scientific Approach",
    note: "Protocol-driven, evidence-first fieldwork.",
  },
  {
    icon: MapPinned,
    title: "Field Expertise",
    note: "Remote, high-altitude and forested terrain.",
  },
  {
    icon: FileText,
    title: "Reliable Documentation",
    note: "Traceable records and clean deliverables.",
  },
  {
    icon: ShieldCheck,
    title: "Research Integrity",
    note: "Transparent methods and honest reporting.",
  },
];
function ResearchIndex() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />

        <Domains />

        <ProfessionalExpertise />

        <Methodology />

        <FeaturedExperience />

        <WhyWorkWithUs />

        <ConsultationCTA />
      </main>

      <FloatingContact />

      <SiteFooter />
    </>
  );
}


function Hero() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground"
        >
          <BrandMark
            size="xs"
            ringed={false}
            className="h-4 w-4 shadow-none"
          />

          Research Domains & Expertise
        </motion.span>


        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 max-w-4xl font-display text-4xl font-medium leading-tight tracking-tight sm:text-6xl lg:text-7xl"
        >
          A lifetime of fieldwork across the Himalayan environment.
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Decades of contribution to Himalayan ecosystem research —
          biodiversity, cryosphere, watersheds and climate studies.
        </motion.p>


        <div className="mt-10 flex flex-wrap gap-3">

          <Button asChild className="rounded-full">
            <Link to="/contact">
              Request consultation
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>


          <Button asChild variant="ghost" className="rounded-full border">
            <a href="#domains">
              Explore domains
            </a>
          </Button>

        </div>

      </div>
    </section>
  );
}



function SectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {

  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-emerald-glow">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-display text-3xl font-medium sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-muted-foreground">
          {description}
        </p>
      )}

    </div>
  );
}



function Domains() {

  const {
    data: domains,
    isLoading,
    isError,
    error,
    refetch,
  } = useResearchDomains();


  return (
    <section id="domains" className="py-20">

      <div className="mx-auto max-w-6xl px-4">

        <SectionHead
          eyebrow="Research Domains"
          title="Areas of expertise"
          description="Environmental research domains supported through Himalayan field experience."
        />


        {isLoading && (
          <p className="mt-10 text-muted-foreground">
            Loading domains...
          </p>
        )}


        {isError && (
          <div className="mt-10 rounded-3xl border p-8 text-center">

            <AlertTriangle className="mx-auto h-8 w-8" />

            <p className="mt-3 text-muted-foreground">
              {error?.message || "Unable to load domains"}
            </p>


            <Button
              onClick={() => refetch()}
              className="mt-5 rounded-full"
            >
              Try Again
            </Button>

          </div>
        )}



        {domains && domains.length > 0 && (

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {domains.map((domain, index) => (

              <motion.article
                key={domain.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="rounded-3xl border bg-card p-6"
              >

                <img
                  src={getDomainImage(domain.imageUrl,index)}
                  alt=""
                  className="h-12 w-12 rounded-xl object-cover"
                />


                <h3 className="mt-5 text-xl font-medium">
                  {domain.title}
                </h3>


                <p className="mt-2 text-sm text-muted-foreground">
                  {domain.description}
                </p>


                <Link
                  to="/research/$slug"
                  params={{
                    slug: domain.slug,
                  }}
                  className="mt-5 inline-flex items-center gap-1 text-sm"
                >
                  Learn more
                  <ArrowUpRight className="h-4 w-4"/>
                </Link>


              </motion.article>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}



function ProfessionalExpertise() {

  return (

    <section className="py-20">

      <div className="mx-auto max-w-6xl px-4">

        <SectionHead
          eyebrow="Capabilities"
          title="Professional expertise"
        />


        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item)=>{

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="rounded-2xl border p-6"
              >

                <Icon className="h-6 w-6"/>

                <h3 className="mt-4 font-medium">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {item.note}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );

}



function Methodology(){

return (

<section className="py-20">

<div className="mx-auto max-w-6xl px-4">

<SectionHead
eyebrow="Methodology"
title="Research workflow"
/>


<div className="mt-12 space-y-4">

{methodology.map((step,index)=>(

<div
key={step.title}
className="rounded-2xl border p-5"
>

<span className="text-sm text-muted-foreground">
0{index+1}
</span>


<h3 className="font-medium">
{step.title}
</h3>


<p className="text-sm text-muted-foreground">
{step.note}
</p>


</div>

))}

</div>

</div>

</section>

);

}



function FeaturedExperience(){

return (

<section className="py-20">

<div className="mx-auto max-w-6xl px-4">

<SectionHead
eyebrow="Projects"
title="Featured experience"
/>


<div className="mt-12 grid gap-6 lg:grid-cols-3">

{featured.map((item)=>(

<article
key={item.name}
className="overflow-hidden rounded-3xl border"
>

<img
src={item.image}
alt={item.name}
className="h-56 w-full object-cover"
/>


<div className="p-6">

<h3 className="font-medium">
{item.name}
</h3>


<p className="mt-3 text-sm text-muted-foreground">
{item.summary}
</p>

</div>

</article>

))}

</div>

</div>

</section>

);

}



function WhyWorkWithUs(){

return (

<section className="py-20">

<div className="mx-auto max-w-6xl px-4">


<SectionHead
eyebrow="Why HERC"
title="Why work with us"
/>


<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

{whyWorkWithUs.map((item)=>{

const Icon=item.icon;

return (

<div
key={item.title}
className="rounded-3xl border p-6"
>

<Icon className="h-6 w-6"/>


<h3 className="mt-4 font-medium">
{item.title}
</h3>


<p className="mt-2 text-sm text-muted-foreground">
{item.note}
</p>


</div>

);

})}

</div>

</div>

</section>

);

}



function ConsultationCTA(){

return (

<section className="py-20">

<div className="mx-auto max-w-6xl px-4">

<div className="rounded-3xl bg-forest p-10 text-primary-foreground">

<h2 className="text-3xl font-medium">
Need environmental research support?
</h2>


<p className="mt-4">
Let's discuss your project requirements.
</p>


<Button asChild className="mt-6 rounded-full">

<Link to="/contact">
Contact HERC
</Link>

</Button>


</div>

</div>

</section>

);

}