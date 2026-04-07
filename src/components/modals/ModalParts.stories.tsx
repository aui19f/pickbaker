import type { Meta, StoryObj } from "@storybook/react";
import ModalBase from "./ModalBase";
import { ModalHeader, ModalBody, ModalFooter } from "./ModalParts";
import { useState } from "react";
import Button from "@/components/forms/Button/Button"; // 이전에 만든 버튼 활용

const meta: Meta<typeof ModalBase> = {
  title: "Modals/Composition",
  component: ModalBase,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const FullComposition: StoryObj<typeof ModalBase> = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => setIsOpen(false);

    return (
      <div className="p-10">
        <Button onClick={() => setIsOpen(true)}>모달 열기</Button>

        <ModalBase {...args} isOpen={isOpen} onClose={handleClose}>
          {/* 1. Header 영역 */}
          <ModalHeader title="레시피 삭제" icon="alert" onClose={handleClose} />

          {/* 2. Body 영역 */}
          <ModalBody>
            <p className="text-slate-600 text-center">
              정말로 이 레시피를 삭제하시겠습니까?
              <br />
              삭제된 데이터는 <strong>복구할 수 없습니다.</strong>
            </p>
          </ModalBody>

          {/* 3. Footer 영역 */}
          <ModalFooter>
            <Button
              variant="primary-line"
              className="flex-1"
              onClick={handleClose}
            >
              취소
            </Button>
            <Button
              variant="primary"
              className="flex-1"
              onClick={() => alert("삭제됨")}
            >
              삭제하기
            </Button>
          </ModalFooter>
        </ModalBase>
      </div>
    );
  },
};

export const BottomSheetComposition: StoryObj<typeof ModalBase> = {
  args: {
    isBottom: true,
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <ModalBase {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader title="카테고리 선택" onClose={() => setIsOpen(false)} />
        <ModalBody className="p-0">
          <ul className="divide-y divide-slate-100">
            {["식빵", "케이크", "쿠키"].map((item) => (
              <li key={item} className="p-4 hover:bg-slate-50 cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </ModalBody>
      </ModalBase>
    );
  },
};
