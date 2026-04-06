import type { Meta, StoryObj } from "@storybook/react";
import SubTabNav from "./SubTabNav";
import { SUB_ITEMS } from "@/constants/navigation";

const meta: Meta<typeof SubTabNav> = {
  title: "Layout/SubTabNav",
  component: SubTabNav,
  parameters: {
    layout: "fullscreen",
    // Next.js Router 환경 모킹 (중요!)
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  // 잘 보이도록 패딩 추가
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SubTabNav>;

// 1. 홈 활성화 상태 (NAV_ITEMS의 '/'와 매칭)
export const HomeActive: Story = {
  args: {
    sizing: "lg",
    items: SUB_ITEMS,
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
};

// 2. 레시피 활성화 상태 (NAV_ITEMS의 '/recipes'와 매칭)
export const RecipeActive: Story = {
  args: {
    sizing: "lg",
    items: SUB_ITEMS,
  },
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/recipe",
      },
    },
  },
};

export const SmallSizingMd: Story = {
  args: {
    sizing: "md",
    items: SUB_ITEMS,
  },
};

// 4. 작은 사이즈 버전
export const SmallSizingSm: Story = {
  args: {
    sizing: "sm",
    items: SUB_ITEMS,
  },
};
