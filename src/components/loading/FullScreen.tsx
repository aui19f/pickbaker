"use client";

import Image from "next/image";
import { m, MAnimatePresence } from "@/components/shared/Motion";

interface FullScreenProps {
  message?: string;
  type?: "default" | "baking"; // 서비스 컨셉에 따른 GIF 분기 가능
}

export default function FullScreen({
  message = "잠시만 기다려주세요...",
  type = "baking",
}: FullScreenProps) {
  return (
    <MAnimatePresence>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm"
      >
        <div className="relative size-32">
          <Image
            src={`/images/gif/loading_${type}.gif`}
            fill
            className="object-contain"
            alt="loading"
            unoptimized
          />
        </div>
        {message && (
          <p className="mt-4 text-slate-600 font-medium animate-pulse">
            {message}
          </p>
        )}
      </m.div>
    </MAnimatePresence>
  );
}
