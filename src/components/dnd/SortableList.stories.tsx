import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SortableList from "./SortableList";
import Button from "@/components/forms/Button/Button";
import Input from "@/components/forms/Input/Input";
import Select from "@/components/forms/Select/Select";

const meta: Meta<typeof SortableList> = {
  title: "Shared/SortableList",
  component: SortableList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

// 💡 실제 Page.tsx의 로직을 그대로 가져온 '재현용' 스토리일세.
export const RecipeStepsExample: StoryObj = {
  render: () => {
    // 1. 내부 상태 관리 (Page.tsx와 동일)
    const [steps, setSteps] = useState([
      { id: "step-1", volume: 100, content: "밀가루 반죽" },
      { id: "step-2", volume: 50, content: "소금 추가" },
    ]);

    const handleUpdate = (
      id: string,
      field: string,
      value: string | number
    ) => {
      setSteps((prev) =>
        prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
      );
    };

    const handleAdd = () => {
      setSteps([
        ...steps,
        { id: `step-${Date.now()}`, volume: 0, content: "" },
      ]);
    };

    return (
      <div className="w-[600px] p-6 bg-slate-50 rounded-xl border border-slate-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-700">레시피 단계 테스트</h3>
          <Button sizing="sm" onClick={handleAdd}>
            + 단계 추가
          </Button>
        </div>

        <SortableList
          value={steps}
          onChange={setSteps}
          renderItem={(item, index) => (
            <div className="flex gap-2 items-center w-full">
              {/* 내용 입력 */}
              <div className="flex-[3]">
                <Input
                  name={`content${index}`}
                  value={item.content}
                  onChange={(e) =>
                    handleUpdate(item.id, "content", e.target.value)
                  }
                  placeholder="설명"
                />
              </div>
              {/* 용량 입력 */}
              <div className="flex-1">
                <Input
                  name={`volume${index}`}
                  type="number"
                  value={item.volume}
                  onChange={(e) =>
                    handleUpdate(item.id, "volume", e.target.value)
                  }
                  placeholder="용량"
                />
              </div>
              {/* 단위 선택 */}
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

        {/* 디버깅용 상태 확인 데이터 */}
        <pre className="mt-6 p-3 bg-slate-800 text-green-400 text-[10px] rounded overflow-auto">
          {JSON.stringify(steps, null, 2)}
        </pre>
      </div>
    );
  },
};
