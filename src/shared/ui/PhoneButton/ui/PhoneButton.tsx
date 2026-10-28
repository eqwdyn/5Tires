import { SITE } from "@shared/config";
import { PhoneIcon } from "@shared/ui/PhoneIcon";
import cl from "./PhoneButton.module.css";

export interface PhoneButtonProps {
  variant?: "transparrent" | "filled";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PhoneButton({
  variant = "filled",
  size = "md",
  className = "",
}: PhoneButtonProps) {
  return (
    <a
      href={`tel:${SITE.phone.replace(/\D/g, "")}`}
      className={
        variant === "filled"
          ? `${cl.filled} ${className}`
          : `${cl.transparrent} ${className}`
      }
    >
      <PhoneIcon color="#fff" size={size === "lg" ? 20 : 16} />
      {SITE.phone}
    </a>
  );
}
