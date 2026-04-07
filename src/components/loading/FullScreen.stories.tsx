import type { Meta, StoryObj } from "@storybook/react";
import FullScreen from "./FullScreen";

const meta: Meta<typeof FullScreen> = {
  title: "Loader/FullScreen",
  component: FullScreen,
  parameters: {
    // 화면 전체를 덮는 컴포넌트이므로 캔버스 레이아웃을 풀스크린으로 설정하네.
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    message: {
      control: "text",
      description: "로딩 아이콘 하단에 표시될 메시지입니다.",
    },
    type: {
      control: "radio",
      options: ["default", "baking"],
      description:
        "로딩 애니메이션의 타입을 결정합니다. (baking은 크라상 캐릭터)",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "80vw", height: "12rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FullScreen>;

// 기본 베이킹 모드 (크라상 캐릭터)
export const BakingMode: Story = {
  args: {
    type: "baking",
    message: "맛있는 빵을 굽고 있어요...",
  },
};

// 기본 로딩 모드
export const DefaultMode: Story = {
  args: {
    type: "default",
    message: "잠시만 기다려주세요...",
  },
};

// 메시지 없는 버전
export const NoMessage: Story = {
  args: {
    type: "baking",
    message: "",
  },
};

// 실제 컨텐츠 위에 덮인 모습 시뮬레이션
export const OverContent: Story = {
  render: (args) => (
    <div className="relative w-full h-screen">
      {/* 배경에 깔릴 가짜 컨텐츠 */}
      <div className="p-10 space-y-6">
        <h1 className="text-3xl font-bold">레시피 목록</h1>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-40 bg-slate-100 rounded-xl p-4">
              <div className="w-1/2 h-6 bg-slate-200 rounded mb-2" />
              <div className="w-full h-20 bg-slate-50 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* 로딩 컴포넌트 */}
      <FullScreen {...args} />
    </div>
  ),
};
