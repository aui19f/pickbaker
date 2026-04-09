import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import { useState } from "react";
import Button from "@/components/forms/Button/Button"; // 기존 버튼 컴포넌트 활용

const meta: Meta<typeof Toast> = {
  title: "Modals/Toast",
  component: Toast,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info"],
      description: "토스트의 테마 색상을 결정합니다.",
    },
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
      description:
        "디자인 시스템(formGeometries)에 정의된 사이즈를 적용합니다.",
    },
    duration: {
      control: { type: "number", step: 1000 },
      description: "토스트가 유지되는 시간(ms)입니다.",
    },
  },
  decorators: [
    (Story) => (
      <div className="">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Interactive: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="p-4">
        <p className="text-slate-500 text-sm">
          아래 버튼을 누르면 설정된 Toast가 나타납니다.
        </p>
        <Button
          sizing="sm"
          variant="primary"
          onClick={() => setIsVisible(true)}
        >
          토스트 실행
        </Button>

        <Toast
          {...args}
          isVisible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      </div>
    );
  },
  args: {
    message: "작업이 성공적으로 완료되었습니다!",
    type: "success",
    sizing: "lg",
    duration: 3000,
  },
};

/**
 *모든 타입 한눈에 보기
 */
export const AllTypes: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <div className="relative h-16">
          <Toast
            isVisible
            message="성공 메시지입니다."
            type="success"
            onClose={() => {}}
          />
        </div>
        <div>
          <div className="relative h-16">
            <Toast isVisible message="1." type="error" onClose={() => {}} />
          </div>
        </div>
      </div>
    );
  },
};

/**
 *모든 사이즈 한눈에 보기
 */
export const AllSizes: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-24 items-center p-20">
        {/* 컴포넌트가 fixed이므로, 
          각각을 relative 박스로 감싸서 fixed의 기준점(viewport)을 
          스토리북 내의 특정 영역으로 제한하는 트릭
        */}
        <div className="relative h-20 w-full">
          <Toast
            isVisible
            message="Small Sizing Toast"
            sizing="sm"
            onClose={() => {}}
          />
        </div>

        <div className="relative h-20 w-full">
          <Toast
            isVisible
            message="Medium Sizing Toast"
            sizing="md"
            onClose={() => {}}
          />
        </div>

        <div className="relative h-20 w-full">
          <Toast
            isVisible
            message="Large Sizing Toast"
            sizing="lg"
            onClose={() => {}}
          />
        </div>
      </div>
    );
  },
};
