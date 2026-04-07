import type { Meta, StoryObj } from "@storybook/react";
import AlertModal from "./Alert";
import { useState } from "react";

const meta: Meta<typeof AlertModal> = {
  title: "Modals/Alert",
  component: AlertModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Alert: StoryObj<typeof AlertModal> = {
  args: {
    isOpen: true,
    children: "처리가 완료되었습니다.",
  },

  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);
    return (
      <>
        <div
          style={{
            width: "80vw",
            height: "20rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <button onClick={() => setIsOpen(true)}>알림 열기</button>
          <AlertModal
            {...args}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            {args.children}
          </AlertModal>
        </div>
      </>
    );
  },
};
