export const formPalettes = {
  // 메인 포인트 컬러 (Deep Navy 계열)
  primary: "bg-point border-point text-white",
  "primary-line": "border border-point text-point",

  // 세컨더리 컬러 (Orange 계열)
  secondary: "bg-secondary border-secondary text-white",
  "secondary-line": "border border-secondary text-secondary",

  // 엑센트 컬러 (Light Green 계열)
  accent: "bg-accent border-accent text-white", // 글자색은 가독성을 위해 point 권장
  "accent-line": "border border-accent text-accent",

  // 공통 다크/비활성화 스타일
  dark: "bg-slate-600 border-slate-600 text-white",
  "dark-line": "border border-slate-600 text-slate-600",
  disabled:
    "bg-slate-200 border-slate-300 text-slate-400 cursor-not-allowed opacity-60",
} as const;

// 2. 공통 기하학적 수치(크기) 정의
export const formGeometries = {
  sm: "h-9 py-1 px-2 text-sm rounded-md", // h-auto보다는 구체적인 높이(h-9 등)가 정렬 시 유리합니다.
  md: "h-12 py-2 px-4 rounded-lg",
  lg: "h-14 py-3 px-6 text-lg font-bold rounded-xl",
} as const;

// 3. 타입 추출
export type FormPalette = keyof typeof formPalettes;
export type FormGeometry = keyof typeof formGeometries;
