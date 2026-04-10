import { withSentryConfig } from "@sentry/nextjs";
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

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "suji",

  project: "woopro",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  webpack: {
    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,

    // Tree-shaking options for reducing bundle size
    treeshake: {
      // Automatically tree-shake Sentry logger statements to reduce bundle size
      removeDebugLogging: true,
    },
  },
});
