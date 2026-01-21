import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva(
  "transition-colors",
  {
    variants: {
      size: {
        hero: "text-[3rem] md:text-[6rem] leading-[1.05] tracking-[-0.02em] tracking-tight",
        headline: "text-[2.5rem] md:text-[3.5rem] leading-[1.1] tracking-[-0.01em]",
        subhead: "text-[1.5rem] md:text-[2rem] leading-[1.2]",
        intro: "text-[1.3125rem] md:text-[1.5rem] leading-relaxed",
        body: "text-[1.0625rem] md:text-[1.1875rem] leading-relaxed",
        content: "text-md",
        caption: "text-sm",
        xs: "text-xs"
      },
      variant: {
        default: "text-neutral-900",
        dark: "text-neutral-100",
        accent: "text-brand-red",
        muted: "text-neutral-500",
      },
      weight: {
        default: "font-normal",
        semibold: "font-semibold",
      },
    },
    defaultVariants: {
      size: "body",
      variant: "default",
      weight: "default",
    },
  }
)

export interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  asChild?: boolean
}

function Text({
  className,
  size,
  variant,
  weight,
  asChild = false,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="text"
      data-size={size}
      data-variant={variant}
      data-weight={weight}
      className={cn(textVariants({ size, variant, weight, className }))}
      {...props}
    />
  )
}

export { Text, textVariants }
