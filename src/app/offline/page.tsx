// src/components/domain/recipe/RecipeStepContainer.tsx
"use client";

import { useState } from "react";

import Input from "@/components/forms/Input/Input";
import Button from "@/components/forms/Button/Button";
import SortableList from "@/components/dnd/SortableList";
import Select from "@/components/forms/Select/Select";
export default function RecipeCreatePage() {
  const [steps, setStep] = useState([
    { id: `step-${new Date()}`, volume: 0, content: "" },
  ]);

  const handleUpdateStep = (id: string, newContent: string) => {
    setStep((prev) =>
      prev.map((s) => (s.id === id ? { ...s, content: newContent } : s))
    );
  };

  const handleAddStep = () => {
    setStep([...steps, { id: `step-${Date.now()}`, volume: 0, content: "" }]);
  };
  return (
    <main className="max-w-2xl mx-auto p-8">
      <Button
        type="button"
        variant="primary"
        sizing="sm"
        onClick={handleAddStep}
      >
        + 단계 추가
      </Button>
      <>
        <SortableList
          value={steps}
          onChange={setStep}
          renderItem={(item, index) => (
            <div className="flex">
              <Input
                name={`${item.id}_${index + 1}_type`}
                value={item.content}
                onChange={(e) => handleUpdateStep(item.id, e.target.value)}
                placeholder={`단계 ${index + 1} 설명을 입력하세요`}
              />
              <Input
                name={`${item.id}_${index + 1}_volume`}
                value={item.content}
                onChange={(e) => handleUpdateStep(item.id, e.target.value)}
                placeholder={`단계 ${index + 1} 용량을 입력하세요`}
              />
              <Select
                options={[
                  { id: "g", label: "g" },
                  { id: "ml", label: "ml" },
                ]}
                selected="g"
              />
            </div>
          )}
        />
      </>
    </main>
  );
}
