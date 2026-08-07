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
  index: number,
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
    <section className="relative py-24">
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
          className="mt-6 max-w-4xl font-display text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          A lifetime of fieldwork across the Himalayan environment.
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Decades of on-ground contribution to Himalayan ecosystem research —
          biodiversity, cryosphere, watersheds and climate studies.
        </motion.p>


        <div className="mt-10 flex flex-wrap gap-3">

          <Button asChild className="rounded-full">
            <Link to="/contact">
              Request consultation
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>


          <Button
            asChild
            variant="ghost"
            className="rounded-full border border-border"
          >
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
      <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-glow">
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
    <section
      id="domains"
      className="py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHead
          eyebrow="Research Domains"
          title="Areas of expertise"
          description="Environmental research domains supported through Himalayan field experience."
        />


        {isLoading && (
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-64 animate-pulse rounded-3xl border border-border bg-card/60"
              />
            ))}
          </div>
        )}



        {isError && (
          <div className="mt-16 flex flex-col items-center gap-4 rounded-3xl border border-border bg-card/60 px-6 py-16 text-center backdrop-blur-sm">

            <AlertTriangle className="h-8 w-8 text-destructive" />

            <p className="text-sm text-muted-foreground">
              {error?.message || "Couldn't load research domains right now."}
            </p>


            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => refetch()}
            >
              Try again
            </Button>

          </div>
        )}



        {!isLoading &&
          !isError &&
          domains &&
          domains.length === 0 && (
            <div className="mt-16 rounded-3xl border border-border bg-card/60 px-6 py-16 text-center text-muted-foreground backdrop-blur-sm">
              No research domains available yet.
            </div>
          )}




        {!isLoading &&
          !isError &&
          domains &&
          domains.length > 0 && (

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {domains.map((domain, index) => (

              <motion.article
                key={domain.id}
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.03,
                }}
                className="
                  group relative flex flex-col justify-between
                  rounded-3xl
                  border border-border
                  bg-card/60
                  backdrop-blur-sm
                  p-7
                  shadow-elegant
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-emerald-glow/40
                  hover:shadow-lift
                "
              >


                <div>

                  <div className="
                    inline-flex h-11 w-11
                    items-center justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-secondary/70
                    text-forest
                  ">
                    <img
                      src={getDomainImage(domain.imageUrl, index)}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>



                  <h3 className="mt-5 font-display text-xl font-medium text-foreground">
                    {domain.title}
                  </h3>


                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {domain.description}
                  </p>

                </div>



                <div className="mt-6 border-t border-border pt-4">

                  <Link
                    to="/research/$slug"
                    params={{
                      slug: domain.slug,
                    }}
                    className="
                      inline-flex items-center gap-1
                      text-sm font-medium
                      text-forest
                      transition-colors
                      hover:text-emerald-glow
                    "
                  >
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                </div>


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

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">


        <SectionHead
          eyebrow="Capabilities"
          title="Professional expertise"
          description="Technical and operational capabilities supporting Himalayan research programmes."
        />



        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {expertise.map((item, index) => {

            const Icon = item.icon;


            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.03,
                }}
                className="
                  rounded-2xl
                  border border-border
                  bg-card/60
                  backdrop-blur-sm
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald-glow/40
                "
              >


                <Icon className="h-5 w-5 text-emerald-glow" />


                <h3 className="mt-4 font-display text-base font-medium">
                  {item.title}
                </h3>


                <p className="mt-1 text-sm text-muted-foreground">
                  {item.note}
                </p>


              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}





function Methodology() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">


        <SectionHead
          eyebrow="Methodology"
          title="Research workflow"
          description="A structured approach from planning to final technical delivery."
        />



        <ol className="
          relative
          mt-16
          space-y-5
          before:absolute
          before:left-5
          before:top-4
          before:h-[calc(100%-2rem)]
          before:w-px
          before:bg-border
        ">


          {methodology.map((step, index) => (

            <motion.li
              key={step.title}
              initial={{
                opacity: 0,
                x: -12,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="
                relative
                flex
                gap-5
                rounded-2xl
                border border-border
                bg-card/60
                backdrop-blur-sm
                p-5
                shadow-elegant
              "
            >

              <span className="
                grid
                h-10
                w-10
                shrink-0
                place-items-center
                rounded-full
                bg-forest
                text-sm
                text-primary-foreground
              ">
                {String(index + 1).padStart(2, "0")}
              </span>


              <div>

                <h3 className="font-display text-lg font-medium">
                  {step.title}
                </h3>


                <p className="mt-1 text-sm text-muted-foreground">
                  {step.note}
                </p>

              </div>


            </motion.li>

          ))}


        </ol>


      </div>

    </section>
  );
}
function FeaturedExperience() {
  return (
    <section className="py-20">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionHead
          eyebrow="Featured Projects"
          title="Research experience"
          description="Selected Himalayan environmental research initiatives supported through field activities and documentation."
        />


        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">


          {featured.map((project, index) => (

            <motion.article
              key={project.name}
              initial={{
                opacity: 0,
                y: 14,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-3xl
                border border-border
                bg-card/60
                backdrop-blur-sm
                shadow-elegant
                transition-all duration-500
                hover:-translate-y-1
                hover:border-emerald-glow/40
                hover:shadow-lift
              "
            >

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.name}
                  className="
                    h-56
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

              </div>



              <div className="flex flex-1 flex-col p-7">


                <p className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-emerald-glow
                ">
                  {project.area}
                </p>



                <h3 className="
                  mt-3
                  font-display
                  text-xl
                  font-medium
                  leading-snug
                ">
                  {project.name}
                </h3>



                <dl className="mt-5 space-y-2 text-sm">

                  <div className="flex justify-between gap-4">

                    <dt className="text-muted-foreground">
                      Duration
                    </dt>

                    <dd>
                      {project.duration}
                    </dd>

                  </div>


                  <div className="flex justify-between gap-4">

                    <dt className="text-muted-foreground">
                      Role
                    </dt>

                    <dd>
                      {project.role}
                    </dd>

                  </div>


                </dl>



                <p className="
                  mt-5
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                ">
                  {project.summary}
                </p>



                <div className="mt-auto pt-6">

                  <Button
                    asChild
                    variant="ghost"
                    className="rounded-full border border-border"
                  >

                    <Link to="/projects">

                      Explore experience

                      <ArrowUpRight className="ml-1 h-4 w-4"/>

                    </Link>

                  </Button>

                </div>


              </div>


            </motion.article>

          ))}


        </div>


      </div>

    </section>
  );
}





function WhyWorkWithUs() {

  return (
    <section className="py-20">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">


        <SectionHead
          eyebrow="Why HERC"
          title="Why work with us"
          description="Experience, scientific discipline and reliable field support for environmental research."
        />



        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


          {whyWorkWithUs.map((item, index) => {

            const Icon = item.icon;


            return (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="
                  rounded-3xl
                  border border-border
                  bg-card/60
                  backdrop-blur-sm
                  p-7
                  shadow-elegant
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-emerald-glow/40
                "
              >


                <div className="
                  inline-flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-forest/10
                  text-forest
                ">

                  <Icon className="h-5 w-5"/>

                </div>



                <h3 className="
                  mt-5
                  font-display
                  text-lg
                  font-medium
                ">
                  {item.title}
                </h3>



                <p className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-muted-foreground
                ">
                  {item.note}
                </p>


              </motion.div>

            );

          })}


        </div>


      </div>

    </section>
  );

}





function ConsultationCTA() {

  return (
    <section className="py-20">

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">


        <div className="
          relative
          overflow-hidden
          rounded-3xl
          bg-forest
          px-8
          py-12
          text-primary-foreground
          shadow-lift
          sm:px-12
        ">


          <div className="relative max-w-2xl">


            <p className="
              text-xs
              font-medium
              uppercase
              tracking-[0.24em]
              text-emerald-glow
            ">
              Consultation
            </p>



            <h2 className="
              mt-4
              font-display
              text-3xl
              font-medium
              leading-tight
              sm:text-5xl
            ">
              Need experienced environmental research support?
            </h2>



            <p className="
              mt-4
              text-base
              leading-relaxed
              text-primary-foreground/80
            ">
              Let's discuss your project — from field surveys to scientific documentation and reporting.
            </p>



            <div className="mt-8 flex flex-wrap gap-3">


              <Button
                asChild
                className="rounded-full"
              >

                <Link to="/contact">

                  Request consultation

                  <ArrowUpRight className="ml-1 h-4 w-4"/>

                </Link>

              </Button>



              <Button
                asChild
                variant="ghost"
                className="
                  rounded-full
                  border
                  border-primary-foreground/30
                "
              >

                <Link to="/contact">
                  Contact
                </Link>

              </Button>


            </div>


          </div>


        </div>


      </div>


    </section>
  );

}