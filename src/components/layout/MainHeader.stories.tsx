import MainHeader from "@/components/layout/MainHeader";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainHeader> = {
  title: "Layout/MainHeader",
  component: MainHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MainHeader>;

// 1. 기본 로고형 (메인 페이지용)
export const MainWithLogo: Story = {
  args: {
    leftType: "logo",
    title: "PickBaker",
    showProfile: true,
  },
};

// 2. 상세 페이지형 (뒤로가기 포함)
export const DetailWithBack: Story = {
  args: {
    leftType: "back",
    title: "레시피 상세",
    showProfile: false,
  },
};

// 3. 타이틀만 있는 경우
export const TitleOnly: Story = {
  args: {
    title: "설정",
    leftType: "none",
    showProfile: false,
  },
};

// 4. 프로필 사진이 있는 경우
export const WithProfile: Story = {
  args: {
    leftType: "back",
    title: "마이페이지",
    showProfile: true,
    profileImageUrl: "https://picsum.photos/100/100", // 테스트용 이미지
  },
};
