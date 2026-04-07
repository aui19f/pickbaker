import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function ModalHeader({
  title,
  icon,
  onClose,
}: {
  title: string;
  icon?: string;
  onClose?: () => void;
}) {
  return (
    <div className="flex items-center h-16 w-full border-b border-slate-400">
      <div className="size-16 p-3">
        {icon && (
          <Image
            src={`/images/icons/modal/alert.png`}
            width={24}
            height={24}
            alt="icon"
          />
        )}
      </div>
      <h3 className="text-xl flex-1 leading-tight text-center">{title}</h3>
      <div className="size-16">
        {onClose && (
          <button onClick={onClose} className="size-full p-3">
            <Image
              src="/images/icons/default/close.png"
              width={24}
              height={24}
              alt="close"
            />
          </button>
        )}
      </div>
    </div>
  );
}

// --- Body ---
export function ModalBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twMerge("p-6 leading-relaxed overflow-y-auto", className)}>
      {children}
    </div>
  );
}

// --- Footer ---
export function ModalFooter({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(className, "w-full h-16 flex items-center px-2 gap-2")}
    >
      {children}
    </div>
  );
}
