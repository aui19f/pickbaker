import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Forms/Input", // 스토리북 왼쪽 메뉴 구조
  component: Input,
  tags: ["autodocs"], // 자동으로 문서화 페이지 생성
  argTypes: {
    sizing: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// 기본 입력창
export const Default: Story = {
  args: {
    name: "email",
    placeholder: "이메일을 입력해주세요",
    sizing: "md",
  },
};

// 에러 상태 (red-600 적용 확인용)
export const Error: Story = {
  args: {
    name: "password",
    placeholder: "비밀번호를 입력하세요",
    isError: true,
    errMsg: "비밀번호는 8자 이상이어야 합니다.",
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
    value: "수정할 수 없는 값",
  },
};
