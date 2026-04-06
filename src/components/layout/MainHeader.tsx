"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface MainHeaderProps {
  title?: string;
  leftType?: "back" | "logo" | "none";
  showProfile?: boolean;
  profileImageUrl?: string;
  className?: string;
}

export default function MainHeader({
  title,
  leftType = "none",
  showProfile = false,
  profileImageUrl,
  className,
}: MainHeaderProps) {
  const router = useRouter();

  return (
    <header
      className={twMerge(
        "sticky top-0 z-40 w-full h-16 bg-white border-b border-slate-100 flex items-center px-4 justify-between",
        className
      )}
    >
      {/* 1. 왼쪽 영역 (64px 정합성 유지) */}
      <div className="flex items-center justify-start w-12 h-12">
        {leftType === "back" && (
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-slate-50 rounded-full transition-colors"
            aria-label="뒤로가기"
          >
            <Image
              src="/images/icons/default/arrow_left.png"
              alt="Back"
              width={24}
              height={24}
            />
          </button>
        )}
        {leftType === "logo" && (
          <Link href="/" className="text-xl font-bold text-point italic">
            PB
          </Link>
        )}
      </div>

      {/* 2. 가운데 영역 (타이틀) */}
      <div className="flex-1 text-center">
        {title && (
          <h1 className="text-lg font-bold text-slate-800 truncate px-2">
            {title}
          </h1>
        )}
      </div>

      {/* 3. 오른쪽 영역 (프로필) */}
      <div className="flex items-center justify-end w-12 h-12 ">
        {showProfile && (
          <Link
            href="/profile"
            className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-200"
          >
            <Image
              src={profileImageUrl || "/images/icons/default/profile.png"}
              alt="Profile"
              fill
              className="object-cover"
            />
          </Link>
        )}
      </div>
    </header>
  );
}
