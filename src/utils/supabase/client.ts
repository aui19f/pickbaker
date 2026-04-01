import { createBrowserClient } from "@supabase/ssr";
export function createClient() {
  // 브라우저에서는 환경변수가 NEXT_PUBLIC_으로 시작해야 읽을 수 있음
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
