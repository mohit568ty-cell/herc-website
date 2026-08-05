import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import type { Project } from "@/lib/projects-data";

export function IndiaMap({ projects: items }: { projects: Project[] }) {
  const [active, setActive] = useState<Project | null>(items[0] ?? null);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">

      {/* REAL MAP */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">

        <div className="flex items-center justify-between px-6 py-6">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Project Atlas
            </p>

            <p className="mt-1 font-display text-lg">
              India — Himalayan Belt
            </p>
          </div>
        </div>


        <div className="mx-4 mb-6 aspect-[4/3] overflow-hidden rounded-2xl">

          <MapContainer
            center={[30.5, 79.2]}
            zoom={7}
            scrollWheelZoom={true}
            className="h-full w-full"
          >

            <TileLayer
              attribution="© OpenStreetMap contributors"
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            {items.map((project) => (

              <Marker
                key={project.slug}
                position={[
                  project.coords.x,
                  project.coords.y,
                ]}
                eventHandlers={{
                  click: () => setActive(project),
                }}
              >

                <Popup>
                  <strong>
                    {project.title}
                  </strong>

                  <br />

                  {project.location}

                </Popup>

              </Marker>

            ))}


          </MapContainer>

        </div>


        <div className="flex justify-between px-6 pb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">

          <span>
            Interactive Map
          </span>

          <span>
            {items.length} sites
          </span>

        </div>

      </div>



      {/* PROJECT DETAIL CARD */}

      <AnimatePresence mode="wait">

        {active && (

          <motion.aside
            key={active.slug}
            initial={{
              opacity:0,
              y:16
            }}
            animate={{
              opacity:1,
              y:0
            }}
            exit={{
              opacity:0,
              y:-8
            }}
            transition={{
              duration:0.4
            }}

            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-elegant"
          >


            <div className="relative aspect-[16/10] overflow-hidden">

              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-forest-deep/70 to-transparent"/>


              <span className="absolute left-4 top-4 rounded-full bg-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-md">

                {active.researchArea}

              </span>


            </div>



            <div className="flex flex-1 flex-col p-6">


              <h3 className="font-display text-xl leading-snug">
                {active.title}
              </h3>



              <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">

                <MapPin className="h-3.5 w-3.5 text-forest"/>

                {active.location}

              </p>



              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">

                {active.summary}

              </p>



              <Link

                to="/projects/$slug"

                params={{
                  slug: active.slug
                }}

                className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-forest"

              >

                Open project

                <ArrowUpRight className="h-4 w-4"/>

              </Link>


            </div>


          </motion.aside>

        )}

      </AnimatePresence>


    </div>
  );
}