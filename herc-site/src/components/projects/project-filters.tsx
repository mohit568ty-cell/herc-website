import { Search, SlidersHorizontal, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  researchAreas,
  states,
  fundingAgencies,
  statuses,
} from "@/lib/projects-data";

export type Filters = {
  q: string;
  area: string;
  state: string;
  year: string;
  funder: string;
  status: string;
};

export const defaultFilters: Filters = {
  q: "",
  area: "all",
  state: "all",
  year: "all",
  funder: "all",
  status: "all",
};

const years = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2016"];

export function ProjectFilters({
  filters,
  onChange,
  count,
}: {
  filters: Filters;
  onChange: (next: Filters) => void;
  count: number;
}) {
  const set = <K extends keyof Filters>(k: K, v: Filters[K]) =>
    onChange({ ...filters, [k]: v });

  const hasActive =
    filters.q ||
    Object.entries(filters).some(([k, v]) => k !== "q" && v !== "all");

  return (
    <div className="glass-panel rounded-3xl p-4 shadow-elegant sm:p-6">
      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={filters.q}
            onChange={(e) => set("q", e.target.value)}
            placeholder="Search projects, locations, agencies…"
            className="h-12 rounded-full border-border bg-card/70 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus-visible:ring-emerald-glow"
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground md:justify-end">
          <SlidersHorizontal className="h-4 w-4" />
          <span className="tabular-nums">{count} projects</span>
          {hasActive && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => onChange(defaultFilters)}
              className="ml-2 h-8 rounded-full text-xs"
            >
              <X className="mr-1 h-3.5 w-3.5" /> Clear
            </Button>
          )}
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        <FilterSelect
          label="Research Area"
          value={filters.area}
          onValueChange={(v) => set("area", v)}
          options={researchAreas as unknown as string[]}
        />
        <FilterSelect
          label="State"
          value={filters.state}
          onValueChange={(v) => set("state", v)}
          options={states as unknown as string[]}
        />
        <FilterSelect
          label="Year"
          value={filters.year}
          onValueChange={(v) => set("year", v)}
          options={years}
        />
        <FilterSelect
          label="Funding Agency"
          value={filters.funder}
          onValueChange={(v) => set("funder", v)}
          options={fundingAgencies as unknown as string[]}
        />
        <FilterSelect
          label="Status"
          value={filters.status}
          onValueChange={(v) => set("status", v)}
          options={statuses as unknown as string[]}
        />
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onValueChange,
  options,
}: {
  label: string;
  value: string;
  onValueChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="h-11 rounded-full border-border bg-card/80 text-sm">
          <SelectValue placeholder={`All ${label}`} />
        </SelectTrigger>
        <SelectContent className="rounded-2xl">
          <SelectItem value="all">All {label}</SelectItem>
          {options.map((o) => (
            <SelectItem key={o} value={o}>
              {o}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}