import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css"; // 프로젝트의 글로벌 CSS 경로 확인 후 연결

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    // 아이폰 뷰포트 미리보기 설정 추가
    viewport: {
      defaultViewport: "iphone14",
    },
  },
};

export default preview;
