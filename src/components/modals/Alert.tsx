"use client";

import ModalBase from "./ModalBase";
import { ModalBody, ModalFooter } from "./ModalParts";
import Button from "@/components/forms/Button/Button";

interface AlertProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Alert({ isOpen, onClose, children }: AlertProps) {
  return (
    <ModalBase isOpen={isOpen} onClose={onClose} sizing="sm">
      <ModalBody>{children}</ModalBody>
      <ModalFooter className="[&>button]:flex-1">
        <Button
          sizing="md"
          className="px-4"
          variant="primary"
          onClick={onClose}
        >
          확인
        </Button>
      </ModalFooter>
    </ModalBase>
  );
}
