import { MDiv } from "@/components/shared/Motion";

interface SpinnerProps {
  sizing?: "sm" | "md" | "lg";
  className?: string;
}

const SIZE_MAP = {
  sm: "size-5 border-2",
  md: "size-8 border-3",
  lg: "size-12 border-4",
};

export default function Spinner({
  sizing = "md",
  className = "",
}: SpinnerProps) {
  return (
    <MDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/20 backdrop-blur-[1px]"
    >
      <MDiv
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className={`rounded-full border-slate-200 border-t-point ${SIZE_MAP[sizing]} ${className}`}
      />
    </MDiv>
  );
}
