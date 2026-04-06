import MainNavigation from "@/components/layout/MainNavigation";
import { NAV_ITEMS } from "@/constants/navigation";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainNavigation> = {
  title: "Layout/MainNavigation",
  component: MainNavigation,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    // Next.js 13+ App Router 환경 모킹
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/", // 기본 경로 설정
      },
    },
  },
  // 전역 스타일이나 레이아웃 유지를 위해 여백을 강제로 조절하는 데코레이터
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MainNavigation>;
export const Default: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
      },
    },
  },
  args: {
    items: NAV_ITEMS,
  },
};

// 레시피 활성화 상태
export const RecipeActive: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/recipe",
      },
    },
  },
  args: {
    items: NAV_ITEMS,
  },
};

// // 3. 모바일 뷰 (하단 바 확인)
// export const Mobile: Story = {
//   parameters: {
//     viewport: {
//       defaultViewport: "mobile",
//     },
//     nextjs: {
//       navigation: {
//         pathname: "/",
//       },
//     },
//   },
// };
