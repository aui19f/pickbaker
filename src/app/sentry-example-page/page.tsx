"use client";

import Button from "@/components/forms/Button/Button";

export default function SentryTestPage() {
  return (
    <div className="p-10 flex flex-col gap-4">
      <h1 className="text-xl font-bold">Sentry 필터링 테스트</h1>

      {/* 케이스 1: ignoreErrors에 의해 무시되어야 함 */}
      <Button
        onClick={() => {
          throw new Error("Invalid password! Please try again.");
        }}
      >
        1. 무시될 에러 (Password)
      </Button>

      {/* 케이스 2: beforeSend 로직에 의해 무시되어야 함 */}
      <Button
        onClick={() => {
          throw new Error("유효성 검사에 실패했습니다.2");
        }}
      >
        2. 무시될 에러 (유효성)
      </Button>

      {/* 케이스 3: Sentry에 실제로 찍혀야 함 */}
      <Button
        variant="primary"
        onClick={() => {
          // 존재하지 않는 함수 호출로 치명적 에러 유도
          const data: any = undefined;
          console.log(data.name);
        }}
      >
        3. 실제 전송될 핵심 에러
      </Button>
    </div>
  );
}
