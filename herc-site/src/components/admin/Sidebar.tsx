import {
  LayoutDashboard,
  FolderKanban,
  BookOpen,
  Image,
  FlaskConical,
  Mail,
  LogOut,
} from "lucide-react";
import { Link, useRouterState } from "@tanstack/react-router";
import { logout } from "@/lib/auth";

const navItems = [
  {
    title: "Dashboard",
    to: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    to: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Publications",
    to: "/admin/publications",
    icon: BookOpen,
  },
  {
    title: "Gallery",
    to: "/admin/gallery",
    icon: Image,
  },
  {
    title: "Research",
    to: "/admin/research",
    icon: FlaskConical,
  },
  {
    title: "Contacts",
    to: "/admin/contacts",
    icon: Mail,
  },
] as const;

export function Sidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  function handleLogout() {
    logout();
    window.location.href = "/admin/login";
  }

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-background">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-emerald-700">
          HERC Admin
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          Management Panel
        </p>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.to;

          return (
            <Link
              key={item.title}
              to={item.to}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                active
                  ? "bg-emerald-600 text-white"
                  : "hover:bg-muted"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 text-white transition hover:bg-red-700"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}