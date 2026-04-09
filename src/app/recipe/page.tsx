"use client";

import Button from "@/components/forms/Button/Button";
import FullScreenLoading from "@/components/loading/FullScreen";

import Alert from "@/components/modals/Alert";
import Confirm from "@/components/modals/Confirm";
import Toast from "@/components/modals/Toast";

import { useState } from "react";

export default function Home() {
  const [isModal, setIsModal] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isToast, setIsToast] = useState(false);
  return (
    <div>
      {/* <Button onClick={() => setIsModal(!isModal)}>TEST</Button>
      <Button onClick={() => setIsConfirm(!isConfirm)}>Confrim Test</Button> */}
      <Button onClick={() => setIsToast(!isModal)}>Toast TEST</Button>

      <Alert isOpen={isModal} onClose={() => setIsModal(false)}>
        <div className="text-center">
          <p>안녕하세요</p>
          <p>
            <span className="text-error">테스트</span>
            중입니다.
          </p>
        </div>
      </Alert>

      <Confirm
        isOpen={isConfirm}
        onClose={() => setIsConfirm(false)}
        onConfirm={() => setIsConfirm(false)}
      >
        <div className="text-center">
          <p>안녕하세요</p>
          <p>
            <span className="text-error">테스트</span>
            중입니다.
          </p>
        </div>
      </Confirm>

      {/* <Spinner /> */}
      {/* <FullScreenLoading /> */}
      <Toast
        isVisible={isToast}
        message="테스트입니다."
        duration={5000}
        onClose={() => setIsToast(false)}
      />
    </div>
  );
}
