import React from "react";
import { cn } from "@/lib/utils";

interface CssResponsiveContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function CssResponsiveContainer({
  className,
  children,
}: CssResponsiveContainerProps) {
  return (
    <div
      className={cn(
        "container mx-auto px-4 sm:px-6 py-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export default CssResponsiveContainer;
