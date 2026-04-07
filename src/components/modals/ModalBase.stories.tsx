import type { Meta, StoryObj } from "@storybook/react";
import ModalBase from "./ModalBase";
import { useState } from "react";

const meta: Meta<typeof ModalBase> = {
  title: "Modals/ModalBase",
  component: ModalBase,
  parameters: {
    layout: "fullscreen",
  },
  // 기본적으로 모달이 열린 상태로 테스트하기 위한 설정
  argTypes: {
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    isBottom: {
      control: "select",
      options: [true, false],
      // control: "boolean",
    },
    // isOpen: true,
  },

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ModalBase>;

// 1. 기본 중앙 모달 (사이즈별 확인용)
export const BaseCenter: Story = {
  args: {
    sizing: "md",
    children: (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold mb-4">중앙 모달 베이스</h2>
        <p className="text-slate-500">
          이것은 모달의 순수한 껍데기 테스트입니다.
        </p>
      </div>
    ),
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <div className="p-10">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white p-2 rounded"
        >
          모달 열기
        </button>
        <ModalBase {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};

// 2. 바텀 시트 스타일 (isBottom 확인용)
export const BottomSheetStyle: Story = {
  args: {
    isBottom: true,
    children: (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">바텀 시트 베이스</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-12 bg-slate-100 rounded flex items-center px-4"
            >
              리스트 아이템 {i}
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

// 3. 초대형 컨텐츠 (스크롤 및 max-height 확인용)
export const LongContent: Story = {
  args: {
    sizing: "lg",
    children: (
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">스크롤 테스트</h2>
        <div className="space-y-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <p key={i}>매우 긴 컨텐츠 라인 {i + 1}...</p>
          ))}
        </div>
      </div>
    ),
  },
};
