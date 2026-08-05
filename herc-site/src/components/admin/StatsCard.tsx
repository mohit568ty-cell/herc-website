import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: ReactNode;
  link: string;
}

export function StatsCard({
  title,
  value,
  icon,
  link,
}: StatsCardProps) {
  return (
    <Link
      to={link}
      className="
        block
        rounded-xl
        border
        bg-background
        p-6
        shadow-sm
        transition
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-emerald-700">
            {value}
          </h2>
        </div>

        <div className="
          rounded-full
          bg-emerald-100
          p-4
          text-emerald-700
        ">
          {icon}
        </div>

      </div>
    </Link>
  );
}