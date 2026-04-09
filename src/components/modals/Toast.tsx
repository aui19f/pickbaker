"use client";

import { useEffect } from "react";
import { MDiv, MAnimatePresence } from "@/components/shared/Motion";
import { twMerge } from "tailwind-merge";
import { formGeometries, FormGeometry } from "@/types/forms";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  isVisible: boolean;
  message: string;
  type?: ToastType;
  sizing?: FormGeometry;
  onClose: () => void; //부모의 상태를 변경할 콜백
  duration?: number; //유지 시간 (기본 3초)
}

const TYPE_MAP = {
  success: "bg-green-500 text-white",
  error: "bg-error text-white",
  info: "bg-secondary text-white",
};

export default function Toast({
  isVisible,
  message,
  type = "info",
  sizing = "lg",
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      //지정된 시간 뒤에 onClose 호출
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      //Cleanup: 토스트가 사라지거나 재렌더링될 때 이전 타이머 제거 (메모리 누수 방지)
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  return (
    <MAnimatePresence>
      {isVisible && (
        <MDiv
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }} // 사라질 때 살짝 내려가게 수정
          className={twMerge(
            TYPE_MAP[type],
            formGeometries[sizing],
            "fixed bottom-20 left-1/2 -translate-x-1/2 z-50  shadow-lg h-auto"
          )}
        >
          {message}
        </MDiv>
      )}
    </MAnimatePresence>
  );
}
