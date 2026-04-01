"use server";

import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server"; // 아까 보여주신 그 코드

export async function tempSignUp(formData: FormData) {
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
  // 2. Auth 생성 성공 시, 해당 유저의 ID를 가져와 Prisma로 프로필 생성
  if (authData.user) {
    try {
      await prisma.profiles.create({
        data: {
          id: authData.user.id, // Auth 유저 ID와 동일하게 설정 (FK 역할)
          email: email,
          nickname: "nicknameTest",
          role: "user",
        },
      });
      return { success: true, message: "회원가입 및 프로필 생성 완료!" };
    } catch (dbError) {
      console.error("DB 저장 에러:", dbError);
      return {
        success: false,
        message: "인증은 성공했으나 프로필 생성에 실패했습니다.",
      };
    }
  }

  return { success: false, message: "알 수 없는 에러 발생" };
}
