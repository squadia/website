import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#1F3A33] text-[#F6F3EC] hover:bg-[#16302A]",
        destructive: "bg-[#A63D2F] text-[#F6F3EC] hover:bg-[#8E3226]",
        outline: "border border-[#B08D57] text-[#8A6D3B] bg-transparent hover:bg-[#1F3A33]/10",
        secondary: "bg-[#FFFFFF] text-[#1C2B27] hover:bg-[#FFFFFF]",
        ghost: "hover:bg-[#FFFFFF] text-[#1C2B27] hover:text-[#1C2B27]",
        link: "text-[#8A6D3B] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
