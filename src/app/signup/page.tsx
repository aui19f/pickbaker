import { tempSignUp } from "@/app/signup/actions";

export default function SignUp() {
  return (
    <form action={tempSignUp}>
      <input name="email" type="text" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
