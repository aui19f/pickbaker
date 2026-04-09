"use client";

import { ReactNode } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { twMerge } from "tailwind-merge";
import { SortableItemWrapper } from "@/components/dnd/SortableItemWrapper";

interface BaseItem {
  id: string;
}

interface SortableListProps<T extends BaseItem> {
  value: T[];
  onChange: (value: T[]) => void;
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export default function SortableList<T extends BaseItem>({
  value = [],
  onChange,
  renderItem,
  className,
}: SortableListProps<T>) {
  // 클릭과 드래그를 구분하기 위한 센서 설정
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 250, tolerance: 5 },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = value.findIndex((item) => item.id === active.id);
      const newIndex = value.findIndex((item) => item.id === over.id);
      onChange(arrayMove(value, oldIndex, newIndex));
    }
  };

  const handleRemove = (id: string) => {
    if (value.length <= 1) return; // 최소 개수 보장 로직 (필요시 토스트 노출)
    onChange(value.filter((item) => item.id !== id));
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={value.map((v) => v.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className={twMerge("w-full", className)}>
          {value.map((item, index) => (
            <SortableItemWrapper
              key={item.id}
              id={item.id}
              onRemove={() => handleRemove(item.id)}
            >
              {renderItem(item, index)}
            </SortableItemWrapper>
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
