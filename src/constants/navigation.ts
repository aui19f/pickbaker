export interface NavItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "홈", icon: "home", path: "/" },
  { id: "recipe", label: "레시피", icon: "recipe", path: "/recipe" },
  { id: "edit", label: "글쓰기", icon: "edit", path: "/edit" },
  { id: "offline", label: "접수관리", icon: "offline", path: "/offline" },
  { id: "mypage", label: "프로필", icon: "mypage", path: "/mypage" },
] as const;

export const SUB_ITEMS: NavItem[] = [
  { id: "home", label: "홈", icon: "home", path: "/" },
  { id: "recipe", label: "레시피", icon: "recipe", path: "/recipe" },
  { id: "edit", label: "글쓰기", icon: "edit", path: "/edit" },
  { id: "offline", label: "접수관리", icon: "offline", path: "/offline" },
  { id: "mypage", label: "프로필", icon: "mypage", path: "/mypage" },
] as const;
