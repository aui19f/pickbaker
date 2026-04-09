"use client";

import { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ItemWrapperProps {
  id: string;
  children: ReactNode;
  onRemove: () => void;
}

/**
 * 💡 개별 아이템 래퍼: 드래그 핸들과 삭제 버튼 포함
 */
export function SortableItemWrapper({
  id,
  children,
  onRemove,
}: ItemWrapperProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Translate.toString(transform), // scale 왜곡 방지를 위해 Translate 사용 권장
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={twMerge(
        "flex items-center gap-2 p-3 ",
        isDragging ? "z-50 ring-2 ring-point opacity-80" : "z-1"
      )}
    >
      {/* 드래그 핸들: 오직 여기서만 드래그가 시작됨 */}
      <div
        {...attributes}
        {...listeners}
        className="shrink-0 cursor-grab active:cursor-grabbing p-1 hover:bg-slate-100 rounded transition-colors"
      >
        🎲
      </div>

      {/* 컨텐츠 영역: Input이나 p 태그가 들어옴 */}
      <div className="flex-1 min-w-0">{children}</div>

      <button
        type="button"
        onClick={onRemove}
        className="shrink-0 p-2 hover:bg-red-50 rounded-md transition-colors group"
      >
        🗑️
      </button>
    </li>
  );
}
