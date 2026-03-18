import { Gift } from "lucide-react";
import dealsnapIcon from "@/assets/dealsnap-icon.webp";

interface AppIconProps {
  app: "dealsnap" | "scratch-and-win";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
  className?: string;
}

const sizeClasses = {
  sm: "h-16 w-16",
  md: "h-24 w-24",
  lg: "h-32 w-32",
};

const iconSizes = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-20 w-20",
};

const AppIcon = ({ app, size = "lg", variant = "default", className = "" }: AppIconProps) => {
  const sizeClass = sizeClasses[size];
  const iconSize = iconSizes[size];
  const isLight = variant === "light";

  return (
    <div
      className={`
        flex items-center justify-center rounded-[20px] border border-brass/40
        p-4 overflow-hidden
        ${isLight ? "bg-primary-foreground/95" : "bg-background/90"}
        ${sizeClass} ${className}
      `}
      aria-hidden
    >
      {app === "dealsnap" ? (
        <img
          src={dealsnapIcon}
          alt="DealSnap"
          className={`${iconSize} object-contain`}
        />
      ) : (
        <Gift
          className={`${iconSize} text-primary`}
          strokeWidth={1.5}
        />
      )}
    </div>
  );
};

export default AppIcon;
