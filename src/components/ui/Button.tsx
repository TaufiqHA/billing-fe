import * as React from "react"
import { cn } from "@/src/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost"
  size?: "sm" | "md" | "lg"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-primary text-white hover:bg-primary-hover active:bg-primary-active border border-transparent shadow-sm": variant === "primary",
            "bg-elevated border border-border-default text-text-primary hover:bg-overlay": variant === "secondary",
            "bg-danger text-white hover:bg-red-700 border border-transparent shadow-sm": variant === "danger",
            "bg-transparent text-text-secondary hover:bg-overlay hover:text-text-primary": variant === "ghost",
            "h-7 px-3 text-xs": size === "sm",
            "h-8 px-4 text-sm": size === "md",
            "h-10 px-6 text-base": size === "lg",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
