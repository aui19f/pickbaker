// sentry.client.config.ts
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // 1. 성능 모니터링 샘플링 (무료 버전은 10% 정도로 낮춤)
  tracesSampleRate: 0.1,

  // enabled 옵션으로 끄고 킬수있다
  // true면 활성, false면 비활성
  enabled: process.env.NODE_ENV === "production",

  // 2. 자잘한 에러 무시 (Regex 활용)
  ignoreErrors: [/invalid password/i, /validation failed/i, /unauthorized/i],

  // 3. 핵심 필터링 로직
  beforeSend(event, hint) {
    const error = hint.originalException;

    // 1. 원본 에러 객체에서 메시지 추출 시도
    const errorMessage = error instanceof Error ? error.message : String(error);

    // 2. Sentry가 가공한 이벤트 데이터에서 메시지 추출 시도
    const eventValue = event.exception?.values?.[0]?.value || "";
    console.log(
      "==========================\n",
      errorMessage,
      "\n======================="
    );
    // 💡 두 곳 중 어디라도 "유효성"이 포함되어 있다면 차단!
    if (errorMessage.includes("유효성") || eventValue.includes("유효성")) {
      console.log("🚫 [Sentry Filtered]: 유효성 관련 에러 전송 중단");
      return null;
    }

    return event;
  },

  debug: false,
});
