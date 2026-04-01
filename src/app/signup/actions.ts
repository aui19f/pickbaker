"use server";

import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server"; // 아까 보여주신 그 코드

export async function tempSignUp(prev: unknown, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = await createClient();
  console.log(email, password);
  // 1. Supabase Auth에 사용자 생성
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    return { success: false, message: authError.message };
  }
  console.log("authData", authData);
  return { success: true, message: "회원가입  완료!" };
}
