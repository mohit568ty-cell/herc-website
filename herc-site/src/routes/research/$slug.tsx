/**
 * Research domain dataset for Himalayan Environmental Research & Consultancy (HERC).
 *
 * This file is the single source of truth for `src/routes/research/$slug.tsx`.
 * Every research page (biodiversity, forest ecology, climate change, GIS &
 * remote sensing, environmental impact assessment, wildlife conservation) is
 * rendered from one of the six entries in `researchData`. Add a new research
 * area by adding a new entry here — the route itself never needs to change.
 *
 * Image paths assume the existing gallery lives under `/images/research/`.
 * Adjust `IMG` below if the project's asset directory differs.
 */
 
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

const IMG = (file: string) => `/images/research/${file}`;
 
// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
 
export type ResearchSlug =
  | "biodiversity"
  | "forest-ecology"
  | "climate-change"
  | "gis-remote-sensing"
  | "environmental-impact-assessment"
  | "wildlife-conservation";
 
export const RESEARCH_SLUGS: ResearchSlug[] = [
  "biodiversity",
  "forest-ecology",
  "climate-change",
  "gis-remote-sensing",
  "environmental-impact-assessment",
  "wildlife-conservation",
];
 
/**
 * Icon identifiers map to `lucide-react` components in the route file via a
 * lookup table, so this data module stays framework-agnostic (no JSX/React
 * imports here — only content).
 */
export type IconName =
  | "leaf"
  | "microscope"
  | "map-pinned"
  | "users"
  | "clipboard-list"
  | "mountain"
  | "trees"
  | "sprout"
  | "layers"
  | "recycle"
  | "ruler"
  | "flame"
  | "snowflake"
  | "thermometer"
  | "waves"
  | "cloud-snow"
  | "gauge"
  | "satellite"
  | "scan"
  | "database"
  | "compass"
  | "file-check"
  | "shield-check"
  | "search"
  | "binoculars"
  | "paw-print"
  | "shield"
  | "camera"
  | "route"
  | "tent"
  | "book-open"
  | "landmark"
  | "handshake"
  | "scale"
  | "award";
 
export interface ResearchStat {
  id: string;
  value: string;
  label: string;
  detail: string;
}
 
export interface ExpertiseItem {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}
 
export interface MethodologyStep {
  id: string;
  order: number;
  title: string;
  description: string;
}
 
export type ProjectStatus = "Completed" | "Ongoing" | "Reporting Phase";
 
export interface ProjectItem {
  id: string;
  title: string;
  location: string;
  duration: string;
  objective: string;
  summary: string;
  status: ProjectStatus;
  image: string;
}
 
export interface CapabilityItem {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}
 
export interface GalleryImage {
  src: string;
  alt: string;
}
 
export interface WhyHercItem {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}
 
export interface SeoData {
  title: string;
  description: string;
  keywords: string[];
  canonicalPath: string;
  ogImage: string;
}
 
export interface ResearchDomainData {
  slug: ResearchSlug;
  shortTitle: string;
  title: string;
  badge: string;
  breadcrumbLabel: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  overview: string[];
  stats: ResearchStat[];
  expertise: ExpertiseItem[];
  methodology: MethodologyStep[];
  projects: ProjectItem[];
  capabilities: CapabilityItem[];
  gallery: GalleryImage[];
  whyHerc: WhyHercItem[];
  ctaHeading: string;
  ctaBody: string;
  seo: SeoData;
}
 
// ---------------------------------------------------------------------------
// Shared "Why HERC" content
// ---------------------------------------------------------------------------
// The organisational strengths behind HERC's work don't change by research
// area, but the framing sentence does — so each domain gets its own array
// rather than one hardcoded block reused verbatim across six pages.
 
function whyHercFor(domainNoun: string): WhyHercItem[] {
  return [
    {
      id: "integrity",
      icon: "scale",
      title: "Scientific Integrity",
      description: `Findings are reported as observed, including negative or inconclusive results. Our ${domainNoun} data is never adjusted to fit a predetermined conclusion.`,
    },
    {
      id: "institutional",
      icon: "landmark",
      title: "Institutional Experience",
      description:
        "Two decades of continuous fieldwork across the Kumaon and Garhwal Himalaya, with archived datasets going back to our earliest surveys.",
    },
    {
      id: "government",
      icon: "handshake",
      title: "Government Collaboration",
      description:
        "Regular consultancy assignments with state forest departments, biosphere reserve authorities and district administrations.",
    },
    {
      id: "field",
      icon: "mountain",
      title: "Field Expertise",
      description:
        "Our field teams are trained for multi-week assignments above 3,500 metres, in terrain and weather that rules out shortcuts in data collection.",
    },
    {
      id: "transparent",
      icon: "file-check",
      title: "Transparent Reporting",
      description:
        "Every report documents methodology, sampling limitations and confidence levels alongside the results, so findings can be independently reviewed.",
    },
    {
      id: "excellence",
      icon: "award",
      title: "Research Excellence",
      description:
        "Work reviewed and cited in state biodiversity action plans, forest working plans and environmental clearance documentation.",
    },
  ];
}
 
// ---------------------------------------------------------------------------
// Shared methodology template
// ---------------------------------------------------------------------------
// The six-stage research process is consistent across domains — this is a
// genuine sequence, which is why numbered steps are appropriate here — but
// the description of each stage is written specifically for the subject.
 
function buildMethodology(steps: [string, string, string, string, string, string]): MethodologyStep[] {
  const titles = [
    "Planning",
    "Literature Review",
    "Field Investigation",
    "Sampling & Documentation",
    "Analysis & Interpretation",
    "Scientific Reporting",
  ];
  return titles.map((title, index) => ({
    id: title.toLowerCase().replace(/\s+/g, "-"),
    order: index + 1,
    title,
    description: steps[index],
  }));
}
 
// ---------------------------------------------------------------------------
// 1. Biodiversity
// ---------------------------------------------------------------------------
 
const biodiversity: ResearchDomainData = {
  slug: "biodiversity",
  shortTitle: "Biodiversity",
  title: "Biodiversity & Ecosystem Studies",
  badge: "Ecological Research",
  breadcrumbLabel: "Biodiversity",
  subtitle:
    "Documenting species composition, vegetation structure and ecosystem resilience across the alpine and subalpine Himalaya.",
  heroImage: IMG("ecology-quadrat-survey-plot-01.jpeg"),
  heroImageAlt: "Research team recording a vegetation quadrat survey on a Himalayan alpine slope",
  overview: [
    "Our biodiversity programme is built around repeat quadrat sampling across altitudinal gradients — from temperate oak-conifer forest through subalpine birch and rhododendron belts into the alpine meadows above 3,500 metres. Fixed plots are re-surveyed on a multi-year cycle, which lets us separate genuine ecological change from the natural year-to-year variation that a single survey cannot distinguish.",
    "Species inventories are cross-checked against herbarium specimens and regional floras rather than field identification alone, particularly for genera such as Primula, Saxifraga and Potentilla where several Himalayan species are easily confused in the field. This slows data collection but produces species lists that hold up to later scrutiny.",
    "A recurring finding across our meadow plots has been the gradual upward creep of shrub cover into what were historically open alpine grasslands, most visible in areas with reduced grazing pressure. We treat this as a hypothesis under continued monitoring rather than a settled conclusion, since grazing history, snowmelt timing and warming are difficult to disentangle from four or five years of data.",
    "Results feed directly into management planning: forest divisions and biosphere reserve authorities use our vegetation maps and species accounts to define core and buffer zones, set grazing rotations, and identify sites that warrant protection from tourism infrastructure before development proposals are finalised rather than after.",
  ],
  stats: [
    { id: "years", value: "18+", label: "Years of Field Research", detail: "Continuous ecological monitoring across Kumaon and Garhwal since 2006." },
    { id: "plots", value: "240+", label: "Vegetation Plots Surveyed", detail: "Permanent and temporary quadrats spanning 1,800–4,600 metres elevation." },
    { id: "reports", value: "62", label: "Scientific Reports", detail: "Baseline and monitoring reports submitted to forest and reserve authorities." },
    { id: "taxa", value: "1,100+", label: "Plant Taxa Recorded", detail: "Species documented across alpine, subalpine and temperate zones." },
    { id: "partners", value: "14", label: "Research Partners", detail: "State forest departments, universities and conservation trusts." },
    { id: "landscapes", value: "9", label: "Study Landscapes", detail: "From the Valley of Flowers to Askot Wildlife Sanctuary." },
  ],
  expertise: [
    { id: "quadrat", icon: "ruler", title: "Vegetation Sampling & Quadrat Surveys", description: "Standardised plot-based sampling of species cover, frequency and abundance along elevation transects." },
    { id: "taxonomy", icon: "microscope", title: "Species Inventory & Identification", description: "Herbarium-verified plant identification, with particular attention to Himalayan endemics and range-restricted taxa." },
    { id: "habitat", icon: "map-pinned", title: "Habitat & Vegetation Mapping", description: "Field-verified vegetation type maps built from ground-truthed plots rather than imagery alone." },
    { id: "community", icon: "users", title: "Community-Based Assessment", description: "Structured interviews with herders and villagers to reconstruct land-use history behind observed vegetation change." },
    { id: "monitoring", icon: "clipboard-list", title: "Long-Term Monitoring Design", description: "Permanent plot networks designed to detect change over five- to ten-year cycles, not single-season snapshots." },
    { id: "advisory", icon: "leaf", title: "Conservation Advisory", description: "Translating ecological findings into zoning, grazing and visitor-management recommendations for reserve managers." },
  ],
  methodology: buildMethodology([
    "Defining survey objectives with the commissioning agency, selecting elevation bands and habitat types, and securing forest department permits for protected areas.",
    "Reviewing prior floristic surveys, herbarium records and any existing management plans for the landscape before a single plot is laid.",
    "Establishing quadrats along fixed transects, with GPS-tagged plot corners so the same ground can be relocated in future survey cycles.",
    "Recording species cover, height class and regeneration status per plot, alongside soil, slope and disturbance notes; specimens pressed for later verification.",
    "Cross-checking field identifications, computing diversity indices, and comparing plot data against prior survey cycles where available.",
    "Delivering a report with species accounts, plot-level data tables, vegetation maps and management recommendations suited to the commissioning body.",
  ]),
  projects: [
    { id: "vof-baseline", title: "Alpine Flora Baseline, Valley of Flowers", location: "Valley of Flowers", duration: "2019–2021", objective: "Establish a floristic baseline ahead of revised visitor-carrying-capacity limits.", summary: "Recorded 340 flowering plant species across 46 permanent plots, informing the park's first data-based visitor cap.", status: "Completed", image: IMG("ecology-quadrat-wildflowers-01.jpeg") },
    { id: "askot-monitoring", title: "Vegetation Monitoring, Askot Wildlife Sanctuary", location: "Askot", duration: "2021–Ongoing", objective: "Track meadow-to-shrub transition under a revised grazing rotation.", summary: "Third survey cycle currently underway across 28 plots along the sanctuary's eastern ridgeline.", status: "Ongoing", image: IMG("ecology-quadrat-survey-plot-02.jpeg") },
    { id: "nanda-devi-assessment", title: "Biosphere Reserve Vegetation Assessment", location: "Nanda Devi Biosphere", duration: "2017–2019", objective: "Update the reserve's vegetation type map for the revised management plan.", summary: "Ground-truthed vegetation classes across the buffer zone, correcting significant boundary errors in the prior 1998 map.", status: "Completed", image: IMG("alpine-shrub-vegetation-closeup-01.jpeg") },
    { id: "kumaon-meadow", title: "Meadow Ecology Study, Kumaon Uplands", location: "Kumaon", duration: "2022–2023", objective: "Assess bugyal (alpine meadow) condition against historical grazing intensity records.", summary: "Field data submitted to the forest division; report currently in final review with the district administration.", status: "Reporting Phase", image: IMG("ecology-quadrat-plot-boots-01.jpeg") },
    { id: "garhwal-ecotone", title: "Subalpine Forest–Meadow Ecotone Survey", location: "Garhwal", duration: "2020–2022", objective: "Determine treeline advance rates along three north-facing valleys.", summary: "Measured treeline position against 1970s forest department records, documenting modest upward shift at two of three sites.", status: "Completed", image: IMG("alpine-wildflowers-rock-closeup-01.jpeg") },
    { id: "pindari-colonisation", title: "Glacier-Margin Vegetation Colonisation Study", location: "Pindari", duration: "2023–Ongoing", objective: "Document early plant colonisation on terrain exposed by glacial retreat.", summary: "Establishing a chronosequence of plots on moraine surfaces of known deglaciation age.", status: "Ongoing", image: IMG("ecology-quadrat-glacier-backdrop-01.jpeg") },
  ],
  capabilities: [
    { id: "high-altitude", icon: "mountain", title: "High-Altitude Surveys", description: "Field teams equipped and trained for sustained work above 4,000 metres." },
    { id: "sampling", icon: "ruler", title: "Ecological Sampling", description: "Quadrat, transect and point-intercept methods matched to habitat and study objective." },
    { id: "documentation", icon: "book-open", title: "Scientific Documentation", description: "Herbarium-standard specimen records and photo-documented plot archives." },
    { id: "gis-mapping", icon: "map-pinned", title: "GIS Mapping", description: "Vegetation and habitat maps built from field-verified plot data." },
    { id: "monitoring-design", icon: "clipboard-list", title: "Monitoring Design", description: "Statistically defensible plot networks for multi-year change detection." },
    { id: "reporting", icon: "file-check", title: "Technical Reporting", description: "Reports formatted to the requirements of forest departments and funding agencies." },
  ],
  gallery: [
    { src: IMG("ecology-quadrat-survey-plot-03.jpeg"), alt: "Field botanist recording species cover within a marked quadrat" },
    { src: IMG("ecology-quadrat-closeup-01.jpeg"), alt: "Close view of alpine vegetation inside a survey quadrat frame" },
    { src: IMG("ecology-quadrat-wildflowers-01.jpeg"), alt: "Wildflower assemblage recorded during a Himalayan meadow survey" },
    { src: IMG("alpine-wildflowers-rock-closeup-01.jpeg"), alt: "Alpine wildflowers growing among exposed rock at high elevation" },
    { src: IMG("alpine-shrub-vegetation-closeup-01.jpeg"), alt: "Dwarf shrub vegetation typical of the subalpine-alpine ecotone" },
    { src: IMG("ecology-quadrat-glacier-backdrop-01.jpeg"), alt: "Vegetation quadrat survey conducted with a glacier in the background" },
    { src: IMG("ecology-quadrat-plot-boots-01.jpeg"), alt: "Researcher's boots beside a staked vegetation survey plot" },
    { src: IMG("ecology-quadrat-survey-plot-01.jpeg"), alt: "Team laying out a quadrat frame on an alpine slope" },
  ],
  whyHerc: whyHercFor("vegetation and species"),
  ctaHeading: "Planning a biodiversity survey or conservation assessment?",
  ctaBody:
    "Talk to our ecology team about baseline surveys, monitoring plot design, or vegetation mapping for a protected area, forest division or infrastructure project.",
  seo: {
    title: "Biodiversity & Ecosystem Studies | Himalayan Environmental Research & Consultancy",
    description:
      "HERC conducts quadrat-based vegetation surveys, species inventories and long-term ecological monitoring across the Kumaon and Garhwal Himalaya for forest departments and research institutions.",
    keywords: ["Himalayan biodiversity survey", "vegetation quadrat sampling", "alpine ecology Kumaon", "species inventory Garhwal", "conservation baseline study"],
    canonicalPath: "/research/biodiversity",
    ogImage: IMG("ecology-quadrat-survey-plot-01.jpeg"),
  },
};
 
// ---------------------------------------------------------------------------
// 2. Forest Ecology
// ---------------------------------------------------------------------------
 
const forestEcology: ResearchDomainData = {
  slug: "forest-ecology",
  shortTitle: "Forest Ecology",
  title: "Forest Ecology",
  badge: "Forest Research",
  breadcrumbLabel: "Forest Ecology",
  subtitle:
    "Studying forest structure, regeneration and ecosystem services across the temperate and subalpine forests of the western Himalaya.",
  heroImage: IMG("forest-trail-trekking-01.jpeg"),
  heroImageAlt: "Forest trail through a Himalayan temperate forest during a field survey",
  overview: [
    "Himalayan forests here shift character quickly with elevation and aspect — chir pine on drier south-facing slopes gives way within a few hundred metres to oak-dominated stands, and further up to fir and birch. Our stand-structure surveys are organised around this variability rather than treating the forest as a single homogeneous unit, since management needs differ sharply between a chir pine stand recovering from fire and an old-growth oak forest with a closed canopy.",
    "Regeneration counts — seedlings, saplings and canopy trees recorded by size class within each plot — tell us whether a forest is replacing itself. In several oak forests near village boundaries, we have recorded healthy seedling densities but a marked gap in the sapling class, consistent with heavy fodder-lopping pressure suppressing young trees before they reach the canopy. This pattern shows up in the data well before it would be visible from the canopy alone.",
    "Carbon stock estimation follows standard allometric methods calibrated to Himalayan oak and conifer species, using diameter and height measurements from the same plots used for regeneration assessment, so the same fieldwork supports both carbon accounting and ecological monitoring without duplicated survey effort.",
    "Our forest ecology work is most often commissioned alongside working-plan revisions, joint forest management planning, and compensatory afforestation monitoring, where forest divisions need field evidence of stand condition rather than satellite-derived estimates alone.",
  ],
  stats: [
    { id: "years", value: "16+", label: "Years of Forest Research", detail: "Stand-structure and regeneration surveys since 2009." },
    { id: "plots", value: "310+", label: "Forest Plots Assessed", detail: "Across chir pine, oak, fir and mixed conifer stands." },
    { id: "reports", value: "48", label: "Working-Plan Contributions", detail: "Field data supplied for forest division working plan revisions." },
    { id: "carbon", value: "35,000 ha", label: "Area Under Carbon Assessment", detail: "Forest area covered across compensatory afforestation monitoring." },
    { id: "partners", value: "11", label: "Research Partners", detail: "Forest divisions, universities and carbon-monitoring agencies." },
    { id: "landscapes", value: "7", label: "Forest Landscapes", detail: "From Garhwal oak forests to Johar Valley conifer stands." },
  ],
  expertise: [
    { id: "structure", icon: "trees", title: "Forest Stand Structure Assessment", description: "Diameter, height and canopy cover measurements across representative plots by forest type." },
    { id: "regeneration", icon: "sprout", title: "Regeneration Studies", description: "Seedling and sapling census to evaluate whether a forest is replacing its canopy." },
    { id: "carbon", icon: "recycle", title: "Carbon Stock Estimation", description: "Allometric biomass and carbon calculations calibrated to Himalayan species." },
    { id: "services", icon: "leaf", title: "Ecosystem Services Assessment", description: "Evaluating water regulation, fodder and non-timber forest product value alongside timber." },
    { id: "layers", icon: "layers", title: "Forest Type Mapping", description: "Field-verified classification of forest types against canopy cover and species dominance." },
    { id: "advisory", icon: "clipboard-list", title: "Working Plan Support", description: "Field data and stand prescriptions for forest division working plan revisions." },
  ],
  methodology: buildMethodology([
    "Agreeing survey scope with the forest division, identifying compartments and forest types to be sampled, and scheduling around the monsoon window.",
    "Reviewing existing working plans, prior stock maps and compartment history to understand past silvicultural treatment.",
    "Laying rectangular or circular plots across selected compartments, stratified by forest type, slope and management history.",
    "Recording diameter, height, canopy cover, regeneration counts and disturbance signs — lopping, grazing, fire scars — per plot.",
    "Computing stand density, basal area, regeneration ratios and carbon stock per hectare, compared against working plan targets.",
    "Delivering compartment-wise findings and silvicultural recommendations formatted for forest working plan submission.",
  ]),
  projects: [
    { id: "garhwal-oak", title: "Oak Forest Regeneration Assessment", location: "Garhwal", duration: "2021–2022", objective: "Determine whether fodder-lopping pressure is suppressing oak regeneration near village boundaries.", summary: "Documented a sapling-class gap in 60% of surveyed compartments, informing revised lopping rotation guidelines.", status: "Completed", image: IMG("forest-trail-trekking-02.jpeg") },
    { id: "johar-conifer", title: "Mixed Conifer Stand Structure Survey", location: "Johar Valley", duration: "2022–Ongoing", objective: "Establish baseline stand structure ahead of a proposed selective harvest plan.", summary: "Plot establishment complete across 34 compartments; growth remeasurement scheduled for next field season.", status: "Ongoing", image: IMG("field-team-discussion-meadow-01.jpeg") },
    { id: "kumaon-carbon", title: "Compensatory Afforestation Carbon Monitoring", location: "Kumaon", duration: "2020–2023", objective: "Verify carbon sequestration performance of a compensatory afforestation site.", summary: "Three-year remeasurement showed survival and growth below plantation targets on south-facing blocks.", status: "Completed", image: IMG("alpine-valley-meadow-dusk-01.jpeg") },
    { id: "garhwal-nttp", title: "Non-Timber Forest Product Availability Study", location: "Garhwal", duration: "2023–Reporting", objective: "Assess sustainable harvest limits for key non-timber forest products used by nearby villages.", summary: "Field data collection complete; sustainable offtake recommendations under review with the forest division.", status: "Reporting Phase", image: IMG("field-researcher-portrait-meadow-01.jpeg") },
    { id: "pindari-fir", title: "Fir–Birch Forest Boundary Study", location: "Pindari", duration: "2019–2021", objective: "Map the upper elevational limit of closed-canopy fir forest against 1980s forest records.", summary: "Found limited change in the upper forest boundary despite treeline shift recorded in adjacent alpine plots.", status: "Completed", image: IMG("forest-trail-trekking-01.jpeg") },
    { id: "kedarnath-fire", title: "Post-Fire Chir Pine Recovery Monitoring", location: "Kedarnath Landscape", duration: "2022–Ongoing", objective: "Track natural regeneration in a chir pine forest following a 2021 ground fire.", summary: "Second-year monitoring shows encouraging seedling establishment on north-facing sections of the burn.", status: "Ongoing", image: IMG("field-team-discussion-meadow-01.jpeg") },
  ],
  capabilities: [
    { id: "high-altitude", icon: "mountain", title: "High-Altitude Surveys", description: "Stand assessments carried out from mid-elevation oak forest to subalpine fir stands." },
    { id: "structure", icon: "trees", title: "Stand Structure Sampling", description: "Standardised plot protocols for diameter, height and canopy measurements." },
    { id: "documentation", icon: "book-open", title: "Scientific Documentation", description: "Compartment-wise field records suitable for working plan submission." },
    { id: "gis-mapping", icon: "map-pinned", title: "GIS Mapping", description: "Forest type and stock maps built from field-verified compartment data." },
    { id: "carbon-analysis", icon: "recycle", title: "Carbon Analysis", description: "Biomass and carbon stock estimation using Himalayan species-specific allometry." },
    { id: "reporting", icon: "file-check", title: "Technical Reporting", description: "Reports structured to forest department working plan and audit requirements." },
  ],
  gallery: [
    { src: IMG("forest-trail-trekking-02.jpeg"), alt: "Field team walking a forest survey trail through mixed conifer stand" },
    { src: IMG("field-team-discussion-meadow-01.jpeg"), alt: "Research team discussing plot data at a forest-meadow boundary" },
    { src: IMG("field-researcher-portrait-meadow-01.jpeg"), alt: "Field researcher during a forest ecology assessment" },
    { src: IMG("alpine-valley-meadow-dusk-01.jpeg"), alt: "Forest-fringed alpine valley meadow at dusk" },
  ],
  whyHerc: whyHercFor("stand structure and regeneration"),
  ctaHeading: "Need a forest stand assessment or working plan input?",
  ctaBody:
    "Speak with our forestry team about regeneration surveys, carbon stock assessment, or field data for a working plan revision.",
  seo: {
    title: "Forest Ecology Research | Himalayan Environmental Research & Consultancy",
    description:
      "HERC assesses forest stand structure, regeneration and carbon stock across chir pine, oak and conifer forests of the western Himalaya, supporting working plans and afforestation monitoring.",
    keywords: ["Himalayan forest ecology", "forest regeneration survey", "carbon stock assessment", "working plan forest data", "oak forest Garhwal"],
    canonicalPath: "/research/forest-ecology",
    ogImage: IMG("forest-trail-trekking-01.jpeg"),
  },
};
 
// ---------------------------------------------------------------------------
// 3. Climate Change
// ---------------------------------------------------------------------------
 
const climateChange: ResearchDomainData = {
  slug: "climate-change",
  shortTitle: "Climate Change",
  title: "Climate Change & Cryosphere Studies",
  badge: "Cryosphere & Climate",
  breadcrumbLabel: "Climate Change",
  subtitle:
    "Monitoring glacier retreat, snow cover and mountain hydrology to understand how the Himalayan cryosphere is changing.",
  heroImage: IMG("himalayan-sunrise-ridge-panorama-01.jpeg"),
  heroImageAlt: "Sunrise over a Himalayan ridge line above a glacier valley",
  overview: [
    "Glacier monitoring in this region has to work around limited historical data — many Himalayan glaciers have only been photographed or surveyed a handful of times before satellite imagery became available in the 1970s. Our terminus monitoring programme combines repeat ground photography from fixed survey points with GPS-located terminus positions, building a record that can eventually be compared against the satellite era with confidence.",
    "Moraine mapping along glacier forefields lets us reconstruct past extents that predate any photographic record. Trimline and moraine ridge positions, dated where possible using lichen growth or vegetation succession, give a rough chronology of retreat stretching back before systematic observation began — useful context for judging whether recent retreat rates are unusual or a continuation of a longer trend.",
    "Meltwater discharge measurements at glacier snouts and downstream gauging points feed into basin-scale hydrology work, since glacier and snowmelt contribution to river flow is not constant through the year — it matters most during the pre-monsoon low-flow period, when downstream water users are most dependent on it.",
    "We report retreat rates and hydrological findings with explicit uncertainty ranges rather than single figures, since terminus position measurement, discharge estimation and even satellite-derived snow cover all carry real measurement error that a single number obscures. Findings support state action plans on climate change and disaster management authorities assessing glacial lake outburst flood risk.",
  ],
  stats: [
    { id: "years", value: "14+", label: "Years of Cryosphere Monitoring", detail: "Continuous glacier terminus records since 2011." },
    { id: "glaciers", value: "22", label: "Glaciers Under Observation", detail: "Terminus and mass balance monitoring across Garhwal and Kumaon." },
    { id: "reports", value: "39", label: "Scientific Reports", detail: "Submitted to state climate action and disaster management authorities." },
    { id: "stations", value: "17", label: "Hydro-Met Monitoring Points", detail: "Automatic weather and discharge stations maintained in the field." },
    { id: "partners", value: "9", label: "Research Partners", detail: "State climate cells, hydrology institutes and disaster authorities." },
    { id: "landscapes", value: "5", label: "Glacier Basins Studied", detail: "Including the Bhagirathi headwater basin." },
  ],
  expertise: [
    { id: "terminus", icon: "snowflake", title: "Glacier Terminus Monitoring", description: "Repeat GPS survey and ground photography of glacier snout positions over multi-year cycles." },
    { id: "moraine", icon: "mountain", title: "Moraine & Past-Extent Mapping", description: "Reconstructing historical glacier extents from moraine ridges and trimline evidence." },
    { id: "hydrology", icon: "waves", title: "Glacial Hydrology", description: "Meltwater discharge measurement and basin-scale water balance assessment." },
    { id: "snow-cover", icon: "cloud-snow", title: "Snow Cover Analysis", description: "Seasonal snow cover extent tracked through field observation and satellite comparison." },
    { id: "climate-monitoring", icon: "thermometer", title: "Mountain Climate Monitoring", description: "Automatic weather station data on temperature, precipitation and humidity at altitude." },
    { id: "risk", icon: "flame", title: "Glacial Hazard Assessment", description: "Field assessment of glacial lakes and outburst flood risk indicators." },
  ],
  methodology: buildMethodology([
    "Selecting glacier basins and monitoring points in consultation with the commissioning climate or disaster management authority.",
    "Reviewing available satellite imagery, historical survey records and any published mass balance studies for the basin.",
    "Trekking to terminus and moraine survey points, often multi-day approaches, to install or revisit GPS-marked reference points.",
    "Recording terminus position, ground photography, discharge readings and weather station data at each visit.",
    "Comparing current measurements against prior survey cycles and available satellite records to estimate retreat and discharge trends.",
    "Reporting retreat rates, hydrological findings and hazard indicators with stated uncertainty ranges for the commissioning authority.",
  ]),
  projects: [
    { id: "bhagirathi-terminus", title: "Bhagirathi Headwater Glacier Terminus Study", location: "Gangotri", duration: "2015–Ongoing", objective: "Maintain a long-term terminus position record for the Bhagirathi headwater glacier.", summary: "Ninth consecutive annual survey completed; retreat rate over the record period remains within the range reported by prior studies.", status: "Ongoing", image: IMG("glacier-terminus-bhagirathi-origin-01.jpeg") },
    { id: "milam-moraine", title: "Milam Glacier Moraine Chronology", location: "Milam", duration: "2018–2020", objective: "Reconstruct historical glacier extent using moraine and trimline evidence.", summary: "Mapped four distinct moraine ridges, providing a rough retreat chronology extending well before the photographic record.", status: "Completed", image: IMG("glacier-moraine-valley-01.jpeg") },
    { id: "pindari-hydrology", title: "Pindari Glacier Meltwater Discharge Study", location: "Pindari", duration: "2021–2023", objective: "Quantify glacier meltwater contribution to pre-monsoon river flow.", summary: "Discharge gauging across two field seasons showed meltwater dominance during the April–June low-flow window.", status: "Completed", image: IMG("glacier-meltstream-channel-01.jpeg") },
    { id: "kedarnath-hazard", title: "Glacial Lake Hazard Assessment", location: "Kedarnath Landscape", duration: "2023–Reporting", objective: "Assess outburst flood risk indicators for glacial lakes in the upper catchment.", summary: "Field survey of lake extent and moraine dam condition complete; hazard ranking under review with disaster authorities.", status: "Reporting Phase", image: IMG("glacier-terminus-closeup-01.jpeg") },
    { id: "garhwal-snow", title: "Seasonal Snow Cover Monitoring", location: "Garhwal", duration: "2020–Ongoing", objective: "Ground-truth satellite-derived snow cover estimates for a headwater basin.", summary: "Field observation points now cover four elevation bands, refining the accuracy of satellite snow cover mapping for the basin.", status: "Ongoing", image: IMG("glacier-valley-panorama-01.jpeg") },
    { id: "nanda-devi-weather", title: "High-Altitude Weather Station Network", location: "Nanda Devi Biosphere", duration: "2016–2019", objective: "Install and maintain automatic weather stations above 4,000 metres.", summary: "Five-station network installed and handed over with a maintained temperature and precipitation record.", status: "Completed", image: IMG("glacier-moraine-valley-03.jpeg") },
  ],
  capabilities: [
    { id: "high-altitude", icon: "mountain", title: "High-Altitude Surveys", description: "Multi-day glacier approach treks with GPS terminus and moraine survey equipment." },
    { id: "climate-analysis", icon: "thermometer", title: "Climate Analysis", description: "Weather station data processing and long-term climate trend assessment." },
    { id: "documentation", icon: "camera", title: "Repeat Photography Archive", description: "Fixed-point photo record maintained across multiple survey cycles for visual comparison." },
    { id: "gis-mapping", icon: "map-pinned", title: "GIS Mapping", description: "Glacier extent, moraine and hazard maps built from field and satellite data." },
    { id: "hydrology", icon: "waves", title: "Discharge Measurement", description: "Field gauging of glacial meltstream and downstream river discharge." },
    { id: "reporting", icon: "file-check", title: "Technical Reporting", description: "Reports formatted for state climate action plans and disaster management use." },
  ],
  gallery: [
    { src: IMG("glacier-valley-panorama-01.jpeg"), alt: "Panoramic view of a Himalayan glacier valley" },
    { src: IMG("glacier-moraine-valley-02.jpeg"), alt: "Glacier moraine valley showing exposed rock and ice" },
    { src: IMG("glacier-moraine-valley-04.jpeg"), alt: "Wide view of a glacier moraine landscape" },
    { src: IMG("glacier-moraine-valley-05.jpeg"), alt: "Field survey point along a glacier moraine" },
    { src: IMG("glacier-terminus-closeup-02.jpeg"), alt: "Close view of a glacier terminus ice face" },
    { src: IMG("glacier-meltstream-channel-02.jpeg"), alt: "Glacial meltwater channel used for discharge measurement" },
    { src: IMG("himalayan-sunrise-ridge-panorama-01.jpeg"), alt: "Sunrise panorama over a high Himalayan ridge" },
    { src: IMG("glacier-moraine-valley-01.jpeg"), alt: "Researchers traversing a glacier moraine field" },
  ],
  whyHerc: whyHercFor("glacier and climate"),
  ctaHeading: "Need long-term glacier or climate monitoring data?",
  ctaBody:
    "Contact our cryosphere team about glacier terminus monitoring, hydrological assessment, or glacial hazard studies for your basin.",
  seo: {
    title: "Climate Change & Cryosphere Studies | Himalayan Environmental Research & Consultancy",
    description:
      "HERC monitors glacier retreat, snow cover, meltwater discharge and mountain climate across the Garhwal and Kumaon Himalaya, supporting state climate action and disaster management planning.",
    keywords: ["Himalayan glacier monitoring", "glacier retreat study", "Gangotri glacier research", "mountain hydrology", "glacial lake outburst flood risk"],
    canonicalPath: "/research/climate-change",
    ogImage: IMG("himalayan-sunrise-ridge-panorama-01.jpeg"),
  },
};
 
// ---------------------------------------------------------------------------
// 4. GIS & Remote Sensing
// ---------------------------------------------------------------------------
 
const gisRemoteSensing: ResearchDomainData = {
  slug: "gis-remote-sensing",
  shortTitle: "GIS & Remote Sensing",
  title: "GIS & Remote Sensing",
  badge: "Spatial Analysis",
  breadcrumbLabel: "GIS & Remote Sensing",
  subtitle:
    "Combining satellite imagery, field-collected GPS data and spatial modelling to map and monitor Himalayan landscapes.",
  heroImage: IMG("satellite-map-monitoring-stations-01.jpeg"),
  heroImageAlt: "Satellite imagery map overlaid with field monitoring station locations",
  overview: [
    "Satellite imagery alone rarely resolves the detail needed for management decisions in complex mountain terrain — shadow from steep slopes, mixed pixels at forest-meadow boundaries, and seasonal snow cover all introduce classification error that looks precise on a map but is not. Our approach pairs remote sensing with field-collected GPS ground-truth points, so every land cover class in a final map has been checked against at least a sample of verified field locations.",
    "Digital elevation model analysis supports slope stability assessment, watershed delineation and viewshed studies for infrastructure siting. We work with both freely available DEMs and, where the terrain demands finer resolution, drone-derived elevation data for smaller project areas.",
    "Land cover classification for this region needs to account for the compressed elevation bands typical of Himalayan slopes — a single hillside can pass through five vegetation zones in under two kilometres of horizontal distance, which standard classification approaches calibrated to flatter terrain tend to blur together.",
    "Our GIS output is delivered as usable spatial data, not just static maps: georeferenced shapefiles, raster layers and metadata documenting classification accuracy, so partner agencies can build on the work in their own GIS systems rather than starting from a printed map.",
  ],
  stats: [
    { id: "years", value: "13+", label: "Years of GIS Practice", detail: "Spatial analysis and mapping work since 2012." },
    { id: "maps", value: "150+", label: "Maps & Spatial Layers Delivered", detail: "Land cover, hazard and infrastructure planning maps." },
    { id: "reports", value: "44", label: "Technical Reports", detail: "Spatial analysis reports for government and research partners." },
    { id: "gcps", value: "3,200+", label: "Ground Control Points Collected", detail: "Field GPS points used to verify satellite classification accuracy." },
    { id: "partners", value: "12", label: "Research Partners", detail: "Government departments, universities and infrastructure agencies." },
    { id: "landscapes", value: "10", label: "Watersheds Mapped", detail: "Across the Kumaon and Garhwal river basins." },
  ],
  expertise: [
    { id: "remote-sensing", icon: "satellite", title: "Satellite Image Analysis", description: "Multispectral and time-series analysis for land cover and change detection." },
    { id: "dem", icon: "layers", title: "DEM & Terrain Analysis", description: "Slope, aspect, watershed and viewshed analysis from digital elevation models." },
    { id: "land-cover", icon: "scan", title: "Land Cover Classification", description: "Field-verified classification calibrated to Himalayan elevation gradients." },
    { id: "spatial-modelling", icon: "database", title: "Spatial Modelling", description: "Suitability, hazard and habitat connectivity models built on field-verified layers." },
    { id: "field-gps", icon: "compass", title: "Field GPS Survey", description: "Ground control point collection for imagery calibration and accuracy assessment." },
    { id: "mapping", icon: "map-pinned", title: "Cartographic Output", description: "Publication-ready maps alongside georeferenced GIS-ready data layers." },
  ],
  methodology: buildMethodology([
    "Defining spatial questions and required accuracy with the commissioning agency, and identifying suitable imagery sources and resolution.",
    "Reviewing available satellite archives, prior land cover maps and elevation datasets for the study area.",
    "Collecting GPS ground control points across representative land cover classes to support imagery classification.",
    "Processing imagery, running classification algorithms, and documenting the field data used for calibration.",
    "Assessing classification accuracy against withheld ground-truth points and refining boundaries where error is high.",
    "Delivering final maps, GIS-ready spatial layers and a methodology report documenting accuracy and limitations.",
  ]),
  projects: [
    { id: "kumaon-landcover", title: "Kumaon Watershed Land Cover Mapping", location: "Kumaon", duration: "2021–2022", objective: "Produce a field-verified land cover map for watershed management planning.", summary: "Delivered a ten-class land cover map with 89% field-verified classification accuracy across the watershed.", status: "Completed", image: IMG("gps-survey-team-group-01.jpeg") },
    { id: "garhwal-slope", title: "Slope Stability Mapping for Road Realignment", location: "Garhwal", duration: "2022–Ongoing", objective: "Identify high slope-instability zones along a proposed road realignment corridor.", summary: "DEM-based slope and drainage analysis complete; field verification of flagged zones in progress.", status: "Ongoing", image: IMG("gps-device-elevation-reading-01.jpeg") },
    { id: "askot-connectivity", title: "Habitat Connectivity Modelling", location: "Askot", duration: "2020–2021", objective: "Model wildlife movement corridors between forest patches for conservation planning.", summary: "Least-cost path modelling identified two priority corridors now included in the sanctuary management plan.", status: "Completed", image: IMG("gps-survey-operator-valley-01.jpeg") },
    { id: "gangotri-monitoring", title: "Glacier Monitoring Station Network Mapping", location: "Gangotri", duration: "2023–Reporting", objective: "Map optimal locations for an expanded automatic weather and discharge monitoring network.", summary: "Site suitability analysis complete; field verification report in preparation for the client agency.", status: "Reporting Phase", image: IMG("satellite-map-monitoring-stations-01.jpeg") },
    { id: "pindari-dem", title: "High-Resolution DEM for Glacier Forefield", location: "Pindari", duration: "2021–2022", objective: "Generate a fine-resolution elevation model of the glacier forefield for volume change analysis.", summary: "Drone-derived DEM delivered at sub-metre resolution, later used as a baseline for glacier monitoring work.", status: "Completed", image: IMG("gps-device-glacier-pond-01.jpeg") },
    { id: "johar-basemap", title: "Johar Valley Infrastructure Basemap", location: "Johar Valley", duration: "2019–2020", objective: "Produce a verified basemap of settlements, trails and infrastructure for district planning.", summary: "Field-surveyed basemap delivered, correcting several outdated trail and settlement locations on existing maps.", status: "Completed", image: IMG("gps-survey-operator-valley-02.jpeg") },
  ],
  capabilities: [
    { id: "high-altitude", icon: "mountain", title: "High-Altitude Field Survey", description: "GPS ground-truthing carried out across remote and high-elevation terrain." },
    { id: "remote-sensing", icon: "satellite", title: "Remote Sensing", description: "Multispectral imagery analysis for land cover, change detection and monitoring." },
    { id: "gis-mapping", icon: "map-pinned", title: "GIS Mapping", description: "Field-verified spatial layers delivered in standard GIS-ready formats." },
    { id: "dem-analysis", icon: "layers", title: "DEM Analysis", description: "Terrain, slope and watershed analysis from elevation datasets." },
    { id: "documentation", icon: "database", title: "Spatial Data Management", description: "Structured, metadata-documented spatial datasets for long-term reuse." },
    { id: "field-gps", icon: "compass", title: "Field GPS Survey", description: "Ground control point collection for imagery calibration and accuracy checks." },
  ],
  gallery: [
    { src: IMG("gps-device-elevation-reading-02.jpeg"), alt: "GPS device recording an elevation reading in the field" },
    { src: IMG("gps-device-glacier-pond-01.jpeg"), alt: "Field GPS survey near a glacial pond" },
    { src: IMG("gps-survey-team-group-01.jpeg"), alt: "GIS field survey team preparing equipment" },
    { src: IMG("gps-survey-operator-valley-01.jpeg"), alt: "GPS survey operator recording data in a mountain valley" },
    { src: IMG("gps-survey-operator-valley-02.jpeg"), alt: "Field operator collecting ground control points" },
    { src: IMG("satellite-map-monitoring-stations-01.jpeg"), alt: "Satellite map showing monitoring station locations" },
  ],
  whyHerc: whyHercFor("spatial and mapping"),
  ctaHeading: "Need field-verified mapping or spatial analysis?",
  ctaBody:
    "Talk to our GIS team about land cover mapping, DEM analysis, or spatial modelling for planning, conservation or infrastructure projects.",
  seo: {
    title: "GIS & Remote Sensing | Himalayan Environmental Research & Consultancy",
    description:
      "HERC delivers field-verified GIS mapping, satellite image analysis and DEM-based terrain modelling across the Himalaya, combining remote sensing with ground-truthed GPS survey data.",
    keywords: ["Himalayan GIS mapping", "remote sensing Himalaya", "DEM terrain analysis", "land cover classification", "spatial modelling watershed"],
    canonicalPath: "/research/gis-remote-sensing",
    ogImage: IMG("satellite-map-monitoring-stations-01.jpeg"),
  },
};
 
// ---------------------------------------------------------------------------
// 5. Environmental Impact Assessment
// ---------------------------------------------------------------------------
 
const environmentalImpactAssessment: ResearchDomainData = {
  slug: "environmental-impact-assessment",
  shortTitle: "Environmental Impact Assessment",
  title: "Environmental Impact Assessment",
  badge: "Consultancy & Compliance",
  breadcrumbLabel: "Environmental Impact Assessment",
  subtitle:
    "Baseline surveys, monitoring and mitigation planning for infrastructure and development projects across the Himalayan region.",
  heroImage: IMG("gps-survey-team-valley-01.jpeg"),
  heroImageAlt: "Environmental survey team conducting baseline fieldwork in a mountain valley",
  overview: [
    "Baseline environmental studies for hill terrain need to cover ground that flatland EIA templates often miss — slope stability, spring and stream discharge, and construction-season access all shape both the impact profile of a project and how monitoring can practically be carried out. Our baseline surveys are scoped to the specific terrain and project type rather than applied from a generic checklist.",
    "Field seasons are planned around monsoon and winter access constraints particular to high-altitude sites, since a baseline survey conducted at the wrong time of year can miss entire components of the picture — a stream that appears dry in October and full in July, or a slope that looks stable until the monsoon.",
    "Compliance monitoring for projects under construction focuses on verifiable field indicators — muck disposal site condition, spring discharge at monitoring points, vegetation recovery on restored slopes — rather than relying solely on contractor self-reporting, since these are the elements regulators and affected communities can independently check.",
    "Mitigation planning is written to be implementable by site engineers and contractors, not just compliant on paper: measures are specified with enough operational detail — where, when, by whom — that they can actually be executed and verified during construction rather than filed away with the clearance documents.",
  ],
  stats: [
    { id: "years", value: "15+", label: "Years of EIA Consultancy", detail: "Baseline and monitoring studies since 2010." },
    { id: "projects", value: "70+", label: "Projects Assessed", detail: "Hydropower, road and infrastructure projects across the region." },
    { id: "reports", value: "58", label: "Compliance Reports Filed", detail: "Construction-phase environmental monitoring reports." },
    { id: "surveys", value: "310+", label: "Baseline Field Surveys", detail: "Covering flora, fauna, hydrology and socio-economic baselines." },
    { id: "partners", value: "16", label: "Client & Regulatory Partners", detail: "Developers, regulatory authorities and district administrations." },
    { id: "landscapes", value: "8", label: "River Basins Covered", detail: "Baseline and monitoring work across major Himalayan basins." },
  ],
  expertise: [
    { id: "baseline", icon: "clipboard-list", title: "Baseline Environmental Surveys", description: "Flora, fauna, hydrology and socio-economic baselines scoped to project terrain." },
    { id: "monitoring", icon: "gauge", title: "Construction-Phase Monitoring", description: "Field verification of environmental compliance during construction." },
    { id: "mitigation", icon: "shield-check", title: "Mitigation Planning", description: "Operationally specific mitigation measures written for site implementation." },
    { id: "compliance", icon: "file-check", title: "Regulatory Compliance Reporting", description: "Reports structured to environmental clearance and consent conditions." },
    { id: "hydrology", icon: "waves", title: "Water Resource Assessment", description: "Spring, stream and groundwater discharge monitoring around project sites." },
    { id: "advisory", icon: "search", title: "Environmental Due Diligence", description: "Independent field review of environmental performance for lenders and developers." },
  ],
  methodology: buildMethodology([
    "Scoping baseline requirements against the project's terms of reference and applicable regulatory clearance conditions.",
    "Reviewing project design documents, prior environmental studies and regional baseline data for the project area.",
    "Conducting seasonal baseline field surveys covering flora, fauna, hydrology, air and socio-economic parameters as scoped.",
    "Recording field data at fixed monitoring points, with photo documentation to support later compliance verification.",
    "Analysing baseline data against applicable standards and identifying likely impact pathways specific to the project.",
    "Delivering baseline reports, impact assessment and mitigation plans structured for regulatory submission and site use.",
  ]),
  projects: [
    { id: "gangotri-hydropower", title: "Baseline EIA for a Run-of-River Hydropower Project", location: "Gangotri", duration: "2020–2021", objective: "Establish flora, fauna and hydrological baselines ahead of environmental clearance application.", summary: "Delivered a full baseline report supporting the project's environmental clearance submission.", status: "Completed", image: IMG("gps-survey-team-valley-02.jpeg") },
    { id: "kumaon-road", title: "Construction-Phase Monitoring, Hill Road Widening", location: "Kumaon", duration: "2022–Ongoing", objective: "Monitor muck disposal, slope stability and spring discharge during road widening works.", summary: "Quarterly monitoring ongoing; two muck disposal sites flagged and corrected following field review.", status: "Ongoing", image: IMG("gps-survey-team-valley-03.jpeg") },
    { id: "garhwal-transmission", title: "Baseline Survey for a Transmission Line Corridor", location: "Garhwal", duration: "2019–2020", objective: "Assess forest and wildlife baseline along a proposed high-voltage transmission corridor.", summary: "Baseline findings led to a revised alignment avoiding a sensitive forest patch identified during the survey.", status: "Completed", image: IMG("gps-survey-team-valley-04.jpeg") },
    { id: "kedarnath-tourism", title: "Environmental Baseline for Tourism Infrastructure", location: "Kedarnath Landscape", duration: "2023–Reporting", objective: "Assess environmental carrying capacity for proposed visitor infrastructure upgrades.", summary: "Field baseline complete; carrying capacity recommendations under review with the project authority.", status: "Reporting Phase", image: IMG("gps-survey-team-clouds-01.jpeg") },
    { id: "askot-mining", title: "Environmental Due Diligence for a Quarry Site", location: "Askot", duration: "2021–2022", objective: "Independent field review of environmental compliance at an operational quarry site.", summary: "Due diligence identified gaps in dust and runoff management, addressed in a revised compliance plan.", status: "Completed", image: IMG("gps-survey-team-moraine-01.jpeg") },
    { id: "milam-hydro", title: "Water Resource Baseline for a Micro-Hydro Scheme", location: "Milam", duration: "2020–2021", objective: "Assess stream discharge and downstream water use ahead of a micro-hydro proposal.", summary: "Seasonal discharge monitoring informed the scheme's minimum environmental flow recommendation.", status: "Completed", image: IMG("gps-survey-team-moraine-02.jpeg") },
  ],
  capabilities: [
    { id: "high-altitude", icon: "mountain", title: "High-Altitude Surveys", description: "Baseline and monitoring surveys carried out across steep and remote terrain." },
    { id: "baseline", icon: "clipboard-list", title: "Baseline Documentation", description: "Structured flora, fauna, hydrology and socio-economic baseline data collection." },
    { id: "monitoring", icon: "gauge", title: "Compliance Monitoring", description: "Field verification of construction-phase environmental performance." },
    { id: "gis-mapping", icon: "map-pinned", title: "GIS Mapping", description: "Project footprint, sensitive zone and monitoring point mapping." },
    { id: "hydrology", icon: "waves", title: "Water Resource Assessment", description: "Spring and stream discharge monitoring for water-dependent projects." },
    { id: "reporting", icon: "file-check", title: "Regulatory Reporting", description: "Reports structured for environmental clearance and consent compliance." },
  ],
  gallery: [
    { src: IMG("gps-survey-team-clouds-02.jpeg"), alt: "Environmental survey team working under low cloud cover" },
    { src: IMG("gps-survey-team-moraine-01.jpeg"), alt: "Field team conducting a baseline survey on a glacial moraine" },
    { src: IMG("gps-survey-team-moraine-02.jpeg"), alt: "Environmental monitoring survey along a moraine slope" },
    { src: IMG("gps-survey-notetaking-01.jpeg"), alt: "Field researcher recording baseline survey observations" },
    { src: IMG("gps-survey-notetaking-02.jpeg"), alt: "Environmental consultant documenting field monitoring data" },
    { src: IMG("gps-survey-pole-fieldwork-01.jpeg"), alt: "Survey pole used during baseline environmental fieldwork" },
    { src: IMG("glacial-moraine-survey-marker-01.jpeg"), alt: "Survey marker placed for ongoing environmental monitoring" },
    { src: IMG("gps-survey-team-valley-01.jpeg"), alt: "Environmental survey team in a mountain valley" },
  ],
  whyHerc: whyHercFor("baseline and compliance"),
  ctaHeading: "Need a baseline study or compliance monitoring partner?",
  ctaBody:
    "Speak with our EIA consultancy team about baseline surveys, construction-phase monitoring, or mitigation planning for your project.",
  seo: {
    title: "Environmental Impact Assessment | Himalayan Environmental Research & Consultancy",
    description:
      "HERC provides baseline environmental surveys, construction-phase monitoring and mitigation planning for infrastructure and development projects across the Himalayan region.",
    keywords: ["Himalayan EIA consultancy", "environmental baseline survey", "construction phase monitoring", "environmental clearance India", "mitigation plan hydropower"],
    canonicalPath: "/research/environmental-impact-assessment",
    ogImage: IMG("gps-survey-team-valley-01.jpeg"),
  },
};
 
// ---------------------------------------------------------------------------
// 6. Wildlife Conservation
// ---------------------------------------------------------------------------
 
const wildlifeConservation: ResearchDomainData = {
  slug: "wildlife-conservation",
  shortTitle: "Wildlife Conservation",
  title: "Wildlife Conservation",
  badge: "Species & Habitat Research",
  breadcrumbLabel: "Wildlife Conservation",
  subtitle:
    "Habitat assessment, species monitoring and conservation planning for Himalayan wildlife, from snow leopard to high-altitude galliformes.",
  heroImage: IMG("field-team-moraine-walk-01.jpeg"),
  heroImageAlt: "Field team walking along a glacial moraine during a wildlife habitat survey",
  overview: [
    "Wildlife monitoring at these elevations depends heavily on indirect evidence — scat, tracks, scrape marks and camera-trap detections — since direct sightings of species like snow leopard or Himalayan musk deer are rare even for experienced field teams. Our survey design leans on sign-based occupancy methods rather than sightings alone, which produces more statistically defensible habitat-use estimates across large, difficult-to-access landscapes.",
    "Camera trap grids are placed using a mix of habitat knowledge and prior sign surveys rather than a uniform grid across the landscape, since even spacing wastes trap-nights in areas with low detection probability. Grid placement is revised each season based on what the previous deployment found.",
    "Habitat corridor assessment connects protected areas that are otherwise ecologically isolated by valleys under heavy human use. We map corridors using both field sign of animal movement and terrain analysis, then flag specific pinch points — a single grazing camp or a stretch of road — where a corridor could be lost entirely.",
    "Conservation recommendations arising from this work are written with an awareness that most Himalayan protected areas share their boundaries with villages dependent on the same forest and pasture resources; workable conservation planning has to account for this rather than treat human use as external to the landscape.",
  ],
  stats: [
    { id: "years", value: "17+", label: "Years of Wildlife Research", detail: "Species and habitat monitoring since 2007." },
    { id: "cameratraps", value: "180+", label: "Camera Trap Stations Deployed", detail: "Across multiple protected areas and community forests." },
    { id: "reports", value: "51", label: "Scientific Reports", detail: "Species status and habitat assessment reports for reserve managers." },
    { id: "species", value: "38", label: "Mammal Species Recorded", detail: "Including snow leopard, Himalayan tahr and musk deer." },
    { id: "partners", value: "13", label: "Research Partners", detail: "Wildlife divisions, conservation trusts and research institutes." },
    { id: "landscapes", value: "8", label: "Landscapes Surveyed", detail: "From Nanda Devi Biosphere to Askot Wildlife Sanctuary." },
  ],
  expertise: [
    { id: "habitat", icon: "mountain", title: "Habitat Assessment", description: "Field evaluation of habitat quality, prey base and disturbance for key species." },
    { id: "cameratrap", icon: "camera", title: "Camera Trap Surveys", description: "Grid-based camera deployment for occupancy and activity pattern estimation." },
    { id: "corridors", icon: "route", title: "Wildlife Corridor Mapping", description: "Identifying and prioritising movement corridors between fragmented habitat patches." },
    { id: "monitoring", icon: "binoculars", title: "Species Monitoring", description: "Sign-based and direct-observation monitoring of Himalayan mammal and bird species." },
    { id: "conservation-planning", icon: "shield", title: "Conservation Planning", description: "Translating field findings into zoning, corridor protection and community engagement plans." },
    { id: "human-wildlife", icon: "users", title: "Human-Wildlife Interface Studies", description: "Assessing livestock depredation and resource-use conflict around protected areas." },
  ],
  methodology: buildMethodology([
    "Defining survey objectives and target species with the reserve or research partner, and securing necessary wildlife permits.",
    "Reviewing prior species records, camera trap data and habitat assessments available for the landscape.",
    "Conducting sign surveys and camera trap deployment across the study area, often requiring multi-week field camps.",
    "Recording sign locations, camera trap images and habitat variables at each survey point.",
    "Analysing detection data for occupancy, activity patterns and habitat association with recorded environmental variables.",
    "Delivering species status reports and conservation recommendations to the commissioning reserve or agency.",
  ]),
  projects: [
    { id: "nanda-devi-snowleopard", title: "Snow Leopard Occupancy Survey", location: "Nanda Devi Biosphere", duration: "2019–2021", objective: "Estimate snow leopard occupancy and prey base across the biosphere reserve's core zone.", summary: "Camera trap and sign survey data produced the reserve's first occupancy estimate for snow leopard.", status: "Completed", image: IMG("researcher-glacier-icecave-01.jpeg") },
    { id: "askot-corridor", title: "Wildlife Corridor Assessment", location: "Askot", duration: "2021–2022", objective: "Identify and prioritise movement corridors linking Askot Wildlife Sanctuary to adjacent forest.", summary: "Mapped two priority corridors, one currently threatened by an expanding grazing camp footprint.", status: "Completed", image: IMG("team-member-glacier-edge-01.jpeg") },
    { id: "kumaon-galliform", title: "High-Altitude Galliformes Monitoring", location: "Kumaon", duration: "2022–Ongoing", objective: "Monitor western tragopan and monal populations across subalpine forest transects.", summary: "Third field season of call-count and sign surveys currently underway across six transects.", status: "Ongoing", image: IMG("researcher-glacier-icecave-02.jpeg") },
    { id: "pindari-musk-deer", title: "Himalayan Musk Deer Habitat Study", location: "Pindari", duration: "2020–2021", objective: "Assess habitat quality and poaching pressure indicators for musk deer populations.", summary: "Field survey findings supported an expanded anti-poaching patrol schedule in identified high-use areas.", status: "Completed", image: IMG("researcher-glacier-icecave-03.jpeg") },
    { id: "kedarnath-hwc", title: "Human-Wildlife Conflict Assessment", location: "Kedarnath Landscape", duration: "2023–Reporting", objective: "Document livestock depredation patterns and community perceptions around the landscape's core zone.", summary: "Household survey and depredation record analysis complete; mitigation recommendations in preparation.", status: "Reporting Phase", image: IMG("field-team-moraine-walk-01.jpeg") },
    { id: "johar-tahr", title: "Himalayan Tahr Population Survey", location: "Johar Valley", duration: "2018–2019", objective: "Estimate Himalayan tahr population and distribution across the valley's alpine cliffs.", summary: "Direct-count survey across 14 vantage points produced a population estimate used in the sanctuary's management review.", status: "Completed", image: IMG("rock-sample-examination-01.jpeg") },
  ],
  capabilities: [
    { id: "high-altitude", icon: "mountain", title: "High-Altitude Surveys", description: "Wildlife field surveys conducted across remote alpine and subalpine terrain." },
    { id: "cameratrap", icon: "camera", title: "Camera Trap Deployment", description: "Grid-based deployment and retrieval across large, difficult-access landscapes." },
    { id: "monitoring", icon: "binoculars", title: "Species Monitoring", description: "Sign-based and direct-observation survey methods for key Himalayan species." },
    { id: "gis-mapping", icon: "map-pinned", title: "GIS Mapping", description: "Habitat, corridor and species distribution mapping from field survey data." },
    { id: "documentation", icon: "book-open", title: "Scientific Documentation", description: "Detailed field records suitable for peer-reviewed and institutional reporting." },
    { id: "conservation-planning", icon: "shield", title: "Conservation Planning", description: "Species status findings translated into actionable management recommendations." },
  ],
  gallery: [
    { src: IMG("team-member-glacier-edge-01.jpeg"), alt: "Field researcher at a glacier edge during a wildlife habitat survey" },
    { src: IMG("researcher-glacier-icecave-01.jpeg"), alt: "Researcher documenting habitat features near a glacier ice cave" },
    { src: IMG("researcher-glacier-icecave-02.jpeg"), alt: "Field survey work near a glacier ice formation" },
    { src: IMG("researcher-glacier-icecave-03.jpeg"), alt: "Wildlife researcher recording field notes near a glacier" },
    { src: IMG("rock-sample-examination-01.jpeg"), alt: "Field team examining a rock sample during a habitat survey" },
    { src: IMG("field-team-moraine-walk-01.jpeg"), alt: "Field team traversing a moraine during a wildlife survey" },
  ],
  whyHerc: whyHercFor("species and habitat"),
  ctaHeading: "Planning a wildlife survey or conservation plan?",
  ctaBody:
    "Talk to our wildlife team about camera trap surveys, corridor assessment, or species status studies for your landscape.",
  seo: {
    title: "Wildlife Conservation Research | Himalayan Environmental Research & Consultancy",
    description:
      "HERC conducts camera trap surveys, habitat assessment and corridor mapping for Himalayan wildlife including snow leopard, musk deer and high-altitude galliformes.",
    keywords: ["Himalayan wildlife survey", "snow leopard occupancy study", "wildlife corridor mapping", "camera trap survey India", "human wildlife conflict Himalaya"],
    canonicalPath: "/research/wildlife-conservation",
    ogImage: IMG("field-team-moraine-walk-01.jpeg"),
  },
};
 
// ---------------------------------------------------------------------------
// Master export
// ---------------------------------------------------------------------------
 
export const researchData: Record<ResearchSlug, ResearchDomainData> = {
  biodiversity,
  "forest-ecology": forestEcology,
  "climate-change": climateChange,
  "gis-remote-sensing": gisRemoteSensing,
  "environmental-impact-assessment": environmentalImpactAssessment,
  "wildlife-conservation": wildlifeConservation,
};
 
export function isResearchSlug(value: string): value is ResearchSlug {
  return (RESEARCH_SLUGS as string[]).includes(value);
}
 
export function getResearchDomain(slug: string): ResearchDomainData | undefined {
  return isResearchSlug(slug) ? researchData[slug] : undefined;
}
 
export function getRelatedDomains(current: ResearchSlug): ResearchDomainData[] {
  return RESEARCH_SLUGS.filter((slug) => slug !== current).map((slug) => researchData[slug]);
}

export const Route = createFileRoute("/research/$slug")({
  loader: ({ params }) => {
    const domain = getResearchDomain(params.slug);
    if (!domain) throw notFound();
    return { domain };
  },
  head: ({ loaderData }) => {
    const domain = loaderData?.domain;
    const title = domain ? `${domain.title} — HERC Research` : "Research — HERC";
    const description = domain?.overview?.[0] ?? "HERC research domain details.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
      ],
    };
  },
  notFoundComponent: NotFound,
  component: ResearchDomainRoute,
});

function ResearchDomainRoute() {
  const { domain } = Route.useLoaderData() as { domain: ResearchDomainData };

  return (
    <main className="min-h-dvh bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/research"
          className="inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-emerald-glow"
        >
          <ArrowLeft className="h-4 w-4" /> Back to research
        </Link>

        <section className="relative mt-8 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <img
            src={domain.heroImage}
            alt={domain.heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-background" />
          <div className="relative z-10 p-8 md:p-14">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-emerald-300">
  Research domain
</p>

<h1 className="mt-3 font-display text-4xl font-medium text-white sm:text-5xl">
  {domain.title}
</h1>
</div>
</section>

<div className="mt-10 space-y-6">
  <div className="grid gap-6 md:grid-cols-2">
    {domain.overview.map((paragraph) => (
      <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground">
        {paragraph}
      </p>
    ))}
  </div>
</div>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <div className="min-h-dvh bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl text-foreground">Research domain not found</h1>
        <p className="mt-4 text-muted-foreground">
          The research area you are looking for is not available.
        </p>
        <Link
          to="/research"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest hover:text-emerald-glow"
        >
          <ArrowLeft className="h-4 w-4" /> Back to research
        </Link>
      </div>
    </div>
  );
}
