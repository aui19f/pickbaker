import type { Meta, StoryObj } from "@storybook/react";
import ConfirmModal from "./Confirm";
import { useState } from "react";

const meta: Meta<typeof ConfirmModal> = {
  title: "Modals/Confirm",
  component: ConfirmModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Confirm: StoryObj<typeof ConfirmModal> = {
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
          <ConfirmModal
            {...args}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          >
            {args.children}
          </ConfirmModal>
        </div>
      </>
    );
  },
};
