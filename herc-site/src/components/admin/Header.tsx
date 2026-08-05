import { CalendarDays, Bell, UserCircle } from "lucide-react";

export function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("herc_user") || "null")
      : null;

  return (
    <header className="flex h-20 items-center justify-between border-b bg-background px-8">
      <div>
        <h1 className="text-2xl font-bold">
          HERC Admin Dashboard
        </h1>

        <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays size={16} />
          {today}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <button className="rounded-full p-2 transition hover:bg-muted">
          <Bell size={22} />
        </button>

        <div className="flex items-center gap-3">
          <UserCircle
            size={40}
            className="text-emerald-700"
          />

          <div>
            <p className="font-medium">
              {user?.email ?? "Admin"}
            </p>

            <p className="text-sm text-muted-foreground">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
