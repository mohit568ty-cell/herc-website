import {
  createFileRoute,
  redirect,
} from "@tanstack/react-router";

import {
  FolderKanban,
  FileText,
  Image,
  Leaf,
  Mail,
} from "lucide-react";

import { isAuthenticated } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";
import { useAdminStats } from "@/hooks/useAdminStats";

import { StatsCard } from "@/components/admin/StatsCard";

export const Route = createFileRoute("/admin/")({
  beforeLoad: () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/admin/login",
      });
    }
  },

  component: Dashboard,
});

function Dashboard() {
  const { user, logout } = useAuth();
  const { data, isLoading } = useAdminStats();

  return (
    <div className="min-h-screen bg-background">

      <header className="border-b bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6">

          <div>
            <h1 className="text-3xl font-bold">
              HERC Admin
            </h1>

            <p className="text-muted-foreground">
              Welcome, {user?.email}
            </p>
          </div>


          <button
            onClick={logout}
            className="
              rounded-lg
              bg-red-600
              px-5
              py-2
              text-white
              transition
              hover:bg-red-700
            "
          >
            Logout
          </button>

        </div>
      </header>


      <main className="mx-auto max-w-7xl p-6">

        <h2 className="mb-6 text-2xl font-semibold">
          Dashboard Overview
        </h2>


        <div
          className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >

          <StatsCard
            title="Projects"
            value={
              isLoading
                ? "..."
                : data?.projects ?? 0
            }
            icon={<FolderKanban size={28} />}
            link="/admin/projects"
          />


          <StatsCard
            title="Publications"
            value={
              isLoading
                ? "..."
                : data?.publications ?? 0
            }
            icon={<FileText size={28} />}
            link="/admin/publications"
          />


          <StatsCard
            title="Gallery"
            value={
              isLoading
                ? "..."
                : data?.galleryImages ?? 0
            }
            icon={<Image size={28} />}
            link="/admin/gallery"
          />


          <StatsCard
            title="Research Domains"
            value={
              isLoading
                ? "..."
                : data?.researchDomains ?? 0
            }
            icon={<Leaf size={28} />}
            link="/admin/research"
          />


          <StatsCard
            title="Contacts"
            value={
              isLoading
                ? "..."
                : data?.contactMessages ?? 0
            }
            icon={<Mail size={28} />}
            link="/admin/contacts"
          />

        </div>

      </main>

    </div>
  );
}