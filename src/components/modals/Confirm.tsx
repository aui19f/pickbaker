"use client";

import ModalBase from "./ModalBase";
import { ModalBody, ModalFooter } from "./ModalParts";
import Button from "@/components/forms/Button/Button";

interface ConfirmProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

export default function Confirm({
  isOpen,
  onClose,
  onConfirm,
  children,
}: ConfirmProps) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} sizing="sm">
      <ModalBody className="text-center py-8">{children}</ModalBody>
      <ModalFooter className="gap-2 [&>button]:flex-1">
        <Button sizing="md" variant="primary-line" onClick={onClose}>
          취소
        </Button>
        <Button sizing="md" variant="primary" onClick={onConfirm}>
          확인
        </Button>
      </ModalFooter>
    </ModalBase>
  );
}
