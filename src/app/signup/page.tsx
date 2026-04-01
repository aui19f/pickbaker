"use client";
import { tempSignUp } from "@/app/signup/actions";
import { sendGAEvent } from "@next/third-parties/google";
import { useActionState, useEffect } from "react";

export default function SignUp() {
  const [state, formAction] = useActionState(tempSignUp, null);
  useEffect(() => {
    // state가 존재하고, 회원가입이 성공(success: true)했을 때만 전송
    if (state?.success) {
      sendGAEvent("event", "sign_up", {
        method: "email",
      });
      console.log("GA4: 회원가입 이벤트 전송됨");
    }
  }, [state]); // state가 바뀔 때마다 실행

  return (
    <form action={formAction}>
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
