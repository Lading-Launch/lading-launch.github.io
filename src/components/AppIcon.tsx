import { Package, Gift } from "lucide-react";

interface AppIconProps {
  app: "bundle-builder" | "scratch-and-win";
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
  const Icon = app === "bundle-builder" ? Package : Gift;
  const sizeClass = sizeClasses[size];
  const iconSize = iconSizes[size];
  const isLight = variant === "light";

  return (
    <div
      className={`
        flex items-center justify-center rounded-2xl border-2 border-brass
        p-4 shadow-[var(--shadow-maritime)]
        ${isLight ? "bg-primary-foreground/95" : "bg-background/80"}
        ${sizeClass} ${className}
      `}
      aria-hidden
    >
      <Icon
        className={`${iconSize} ${isLight ? "text-primary" : "text-brass"}`}
        strokeWidth={1.5}
      />
    </div>
  );
};

export default AppIcon;
