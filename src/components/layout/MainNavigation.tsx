"use client";

import { NavItem } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export default function MainNavigation({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const isLoggedIn = false;

  // 로그인 상태는 추후 Context나 Store에서 처리

  return (
    <aside
      className={twMerge(
        "fixed z-50 bg-white border-slate-200 transition-all",
        "bottom-0 left-0 w-full h-16 border-t flex flex-row",
        "lg:top-0 lg:left-0 lg:h-screen lg:w-64 lg:border-t-0 lg:border-r lg:flex-col lg:p-4"
      )}
    >
      {/* 로고 영역 */}
      <div className="hidden lg:block text-2xl font-bold text-point mb-10 px-2 italic tracking-tight">
        PickBaker
      </div>

      {/* 통합 네비게이션 리스트 */}
      <nav className="flex flex-1 flex-row lg:flex-col justify-around lg:justify-start lg:gap-2">
        {items.map((item) => {
          const isActive =
            item.path === "/"
              ? pathname === "/"
              : pathname.startsWith(item.path);

          return (
            <Link
              key={item.id}
              href={item.path}
              className={twMerge(
                "flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-1 lg:gap-3 flex-1 lg:flex-none",
                "h-full lg:h-auto lg:px-4 lg:py-3 lg:rounded-lg transition-all font-medium outline-none",
                isActive ? "text-point " : "text-slate-400"
              )}
            >
              <Image
                src={`/images/icons/menus/${
                  isActive ? item.icon + "_active" : item.icon
                }.svg`}
                alt={item.label}
                width={20}
                height={20}
              />
              <span className="text-[10px] lg:text-base mt-1 lg:mt-0">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* 하단 액션 */}
      <div className="hidden lg:block mt-auto pt-4 border-t border-slate-100">
        <Link
          href={isLoggedIn ? "/logout" : "/login"}
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors font-medium outline-none"
        >
          <span className="text-xl">🚪</span>
          <span>{isLoggedIn ? "로그아웃" : "로그인"}</span>
        </Link>
      </div>
    </aside>
  );
}
