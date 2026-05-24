import * as React from "react"
import { cn } from "@/src/lib/utils"
// Ensure you have lucide-react in your project
import { AlertTriangle } from "lucide-react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 w-full text-left">
        {label && <label className="text-xs font-medium text-text-secondary">{label}</label>}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-border-default bg-surface px-3 py-1 text-sm text-text-primary transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-1 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-danger focus-visible:border-danger focus-visible:ring-danger text-danger",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-xs text-danger flex items-center gap-1 mt-1">
            <AlertTriangle className="w-3 h-3" />
            {error}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
