import React from "react"
import styled from "styled-components"
import { DEFAULT_TYPOGRAPHY_VARIANT, TypographyVariants } from "../../../theme"

export type TypographyProps = {
  color?: string
  variant?: TypographyVariants
  children: string
  className?: string
}

export const StyledTypography = styled("p")<TypographyProps>`
  margin: 0;

  font-size: ${({ theme, color }) => color ?? theme.color.typographyPrimary};

  font-size: ${({ theme, variant }) => theme.typography[variant ?? DEFAULT_TYPOGRAPHY_VARIANT].fontSize};
  font-weight: ${({ theme, variant }) => theme.typography[variant ?? DEFAULT_TYPOGRAPHY_VARIANT].fontWeight};
  line-height: ${({ theme, variant }) => theme.typography[variant ?? DEFAULT_TYPOGRAPHY_VARIANT].lineHeight};
`

export const Typography: React.FC<TypographyProps> = ({ color, variant, children, className }: TypographyProps) => {
  return (
    <StyledTypography variant={variant} color={color} className={className}>
      {children}
    </StyledTypography>
  )
}
