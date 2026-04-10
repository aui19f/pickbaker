import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // 💡 테스트를 위해 잠시 true로 두거나, 환경변수에 따라 조절
  // enabled: true,
  enabled: process.env.NODE_ENV === "production",

  tracesSampleRate: 0.1,

  // 💡 서버에서도 동일하게 무시할 에러 패턴 등록
  ignoreErrors: [
    /invalid password/i,
    /validation failed/i,
    /unauthorized/i,
    /유효성/i,
  ],

  beforeSend(event, hint) {
    const error = hint.originalException;
    const errorMessage = error instanceof Error ? error.message : String(error);

    // 서버 사이드 에러 메시지 확인용 로그
    console.log("🖥️ [Server Sentry Event]:", errorMessage);

    if (errorMessage.includes("유효성")) {
      console.log("🚫 [Server Sentry Filtered]: 유효성 에러 차단 완료");
      return null;
    }

    return event;
  },
});
