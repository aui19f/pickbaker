import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Loader/Spinner",
  component: Spinner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "스피너의 크기를 결정합니다. (기본 md)",
    },
    className: {
      control: "text",
      description: "추가적인 스타일 확장이 필요한 경우 사용합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

// 1. 기본형 (Medium)
export const Default: Story = {
  args: {
    sizing: "md",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "80vw", height: "12rem" }}>
        <Story />
      </div>
    ),
  ],
};

// 2. 작은 사이즈
export const Small: Story = {
  args: {
    sizing: "sm",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "80vw", height: "12rem" }}>
        <Story />
      </div>
    ),
  ],
};

// 3. 큰 사이즈
export const Large: Story = {
  args: {
    sizing: "lg",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "80vw", height: "12rem" }}>
        <Story />
      </div>
    ),
  ],
};

// 4. 배경 컨텐츠와 함께 보기 (실제 시뮬레이션)
export const OverContent: Story = {
  render: (args) => (
    <div className="relative w-full h-screen bg-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold text-slate-800">
          데이터를 처리 중입니다
        </h1>
        <p className="text-slate-500">
          배경에 블랙 20% 레이어가 깔리는지 확인해 보게나.
        </p>
        <button className="px-6 py-2 bg-point text-white rounded-lg">
          동작 버튼
        </button>
      </div>

      {/* 실제 스피너 호출 */}
      <Spinner {...args} />
    </div>
  ),
};
