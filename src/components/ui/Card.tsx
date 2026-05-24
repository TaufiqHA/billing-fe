import * as React from "react"
import { cn } from "@/src/lib/utils"

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { glass?: boolean }>(
  ({ className, glass, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border text-text-primary shadow-sm",
        glass 
          ? "bg-glass-bg border-glass-border backdrop-blur-md" 
          : "bg-surface border-border-default hover:border-border-active hover:shadow-glow transition-all duration-200",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

export { Card }
