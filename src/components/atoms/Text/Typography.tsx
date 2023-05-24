import React from "react"
import styled from "styled-components"
import { DEFAULT_TYPOGRAPHY_VARIANT, TypographyVariants } from "../../../theme"

export type TypographyProps = {
  color?: "Error"
  variant?: TypographyVariants
  children: string | number
  className?: string
}

export const StyledTypography = styled("p")<TypographyProps>`
  color: ${({ theme, color }) => theme.color[`typography${color ?? "Primary"}`]};

  font-size: ${({ theme, variant }) => theme.typography[variant ?? DEFAULT_TYPOGRAPHY_VARIANT].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography[variant ?? DEFAULT_TYPOGRAPHY_VARIANT].fontWeight};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? DEFAULT_TYPOGRAPHY_VARIANT].lineHeight};
`

export const Typography: React.FC<TypographyProps> = ({ color, variant, className, children }: TypographyProps) => {
  return (
    <StyledTypography variant={variant} color={color} className={className}>
      {children}
    </StyledTypography>
  )
}
