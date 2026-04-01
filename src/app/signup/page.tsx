"use client";
import { tempSignUp } from "@/app/signup/actions";
import { useActionState } from "react";

export default function SignUp() {
  const [state, formAction] = useActionState(tempSignUp, null);
  return (
    <form action={formAction}>
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
