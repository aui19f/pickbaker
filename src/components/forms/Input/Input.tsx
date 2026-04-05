"use client";

import { formGeometries, FormGeometry } from "@/types/forms";
import Image from "next/image";
import React, { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  sizing?: FormGeometry;
  icon?: ReactNode;
  ref?: React.Ref<HTMLInputElement>;
  className?: string;
  isError?: boolean;
}

// forwardRef 없이 일반 함수 컴포넌트로 정의
export default function Input({
  name,
  sizing = "md",
  icon,
  className,
  ref,
  isError = false,
  ...rest
}: InputProps) {
  const sizeStyle = formGeometries[sizing];

  return (
    <div className="relative w-full group">
      {icon && (
        <div className="absolute transition-colors -translate-y-1/2 left-3 top-1/2  group-focus-within:text-blue-500">
          <Image
            src={`/images/icons/${icon}.png`}
            alt={name}
            width={24}
            height={24}
          />
        </div>
      )}

      <input
        name={name}
        ref={ref}
        {...rest}
        className={twMerge(
          "transition-all ",
          sizeStyle,
          icon ? "pl-11" : "pl-3",
          isError && "border-error",
          className
        )}
      />
    </div>
  );
}
