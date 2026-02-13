// components/ConfirmButton.tsx
"use client";
import WavyText from "@/feature/global/components/wavy-text";
import React, { useState } from "react";

interface ConfirmButtonProps {
  isSubmitting?: boolean;
  isValid?: boolean;
}

function ConfirmButton({ isSubmitting = false, isValid = false }: ConfirmButtonProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  return (
    <button
      type="submit"
      className="pill w-30 py-2 flex justify-center rounded-3xl cursor-pointer hover:bg-white duration-[200ms]"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={isSubmitting || !isValid}
    >
      <WavyText>
        { isHovered ? "SEND" : "CONFIRM"}
      </WavyText>
    </button>
  );
}

export default React.memo(ConfirmButton);