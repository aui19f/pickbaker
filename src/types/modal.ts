export type ModalSize = "sm" | "md" | "lg" | "full";

export const MODAL_SIZE_MAP: Record<ModalSize, string> = {
  sm: "max-w-sm w-[90%]",
  md: "max-w-md w-[95%]",
  lg: "max-w-2xl w-[95%]",
  full: "max-w-full w-full h-full rounded-none",
};
