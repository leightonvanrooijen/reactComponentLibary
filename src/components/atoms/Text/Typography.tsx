import React from "react"
import styled from "styled-components"
import { DEFAULT_TYPOGRAPHY_VARIANT, TypographyVariants } from "../../../theme"

export type TypographyProps = {
  children: string
  variant?: TypographyVariants
}

export const StyledTypography = styled("p")<TypographyProps>`
  margin: 0;

  font-size: ${(props) => props.theme.typography[props.variant ?? DEFAULT_TYPOGRAPHY_VARIANT].fontSize};
  font-weight: ${(props) => props.theme.typography[props.variant ?? DEFAULT_TYPOGRAPHY_VARIANT].fontWeight};
  line-height: ${(props) => props.theme.typography[props.variant ?? DEFAULT_TYPOGRAPHY_VARIANT].lineHeight};
`

export const Typography: React.FC<TypographyProps> = (props: TypographyProps) => {
  return <StyledTypography variant={props.variant}>{props.children}</StyledTypography>
}
