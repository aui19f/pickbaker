import type { NextConfig } from "next";

const isApp = process.env.NEXT_PUBLIC_IS_APP === "true";

const nextConfig: NextConfig = {
  // 앱 빌드 시에만 정적 추출 모드 활성화
  output: isApp ? "export" : undefined,
  images: {
    // 앱 환경은 서버가 없으므로 이미지 최적화 기능을 비활성화함
    unoptimized: isApp,
  },
  // Capacitor의 경로 인식을 위해 슬래시 자동 추가
  trailingSlash: true,
};

export default nextConfig;
