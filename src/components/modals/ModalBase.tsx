"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ModalSize, MODAL_SIZE_MAP } from "@/types/modal";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  sizing?: ModalSize;
  isBottom?: boolean; // 바텀 시트 스타일 여부
}

export default function ModalBase({
  isOpen,
  onClose,
  children,
  sizing = "md",
  isBottom = false,
}: ModalBaseProps) {
  // 모달 오픈 시 스크롤 방지
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
          />

          <motion.div
            initial={isBottom ? { y: "100%" } : { opacity: 0, scale: 0.95 }}
            animate={isBottom ? { y: 0 } : { opacity: 1, scale: 1 }}
            exit={isBottom ? { y: "100%" } : { opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={twMerge(
              "relative bg-white shadow-2xl flex flex-col overflow-hidden",
              isBottom
                ? "mt-auto w-full rounded-t-lg max-h-[90vh]"
                : twMerge("rounded-lg", MODAL_SIZE_MAP[sizing])
            )}
          >
            {isBottom && (
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-3 mb-1" />
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
