"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { formGeometries, FormGeometry } from "@/types/forms";
import { NavItem } from "@/constants/navigation";

interface SubTabNavProps {
  items: NavItem[];
  sizing?: FormGeometry;
  className?: string;
}

export default function SubTabNav({
  items,
  sizing = "md",
  className,
}: SubTabNavProps) {
  const pathname = usePathname();

  return (
    <nav className={twMerge("w-full overflow-hidden", className)}>
      <ul className="flex ">
        {items.map((item) => {
          const isActive = pathname === item.path;

          const commonClass = twMerge(
            formGeometries[sizing],
            "inline-block transition-all duration-200 whitespace-nowrap outline-none rounded-none",
            isActive
              ? "border-b-2 border-b-point text-point font-bold"
              : "border-b border-b-slate-200 text-slate-300"
          );

          return (
            <li key={item.id} className="snap-center flex-none">
              <Link href={item.path} className={commonClass}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
