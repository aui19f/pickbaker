import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css"; // 프로젝트의 글로벌 CSS 경로 확인 후 연결

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
    // 아이폰 뷰포트 미리보기 설정 추가
    viewport: {
      defaultViewport: "iphone14pro",
    },
  },
};

export default preview;
