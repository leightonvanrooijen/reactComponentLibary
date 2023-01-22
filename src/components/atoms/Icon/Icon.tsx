import styled, { css } from "styled-components"
import { forwardRef } from "react"
import { IconType } from "react-icons"

export type IconSizes = "Small" | "Medium"

export type IconProps = {
  icon: IconType
  size?: IconSizes
  className?: string
}

export const getIconSizeCSS = (size: IconSizes) => {
  if (size === "Small") {
    return css`
      height: 0.875rem;
      width: 0.875rem;
    `
  }
  return css`
    height: 1rem;
    width: 1rem;
  `
}

export const StyledIconDiv = styled("div")<{ size: IconSizes }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => getIconSizeCSS(props.size)}
`

export const Icon = forwardRef<HTMLDivElement, IconProps>(({ icon, size = "Medium", className }, ref) => {
  const SvgIcon = icon
  return (
    <StyledIconDiv size={size} role={"graphics-symbol"} className={className} ref={ref}>
      <SvgIcon height={"fit-content"} width={"fit-content"} />
    </StyledIconDiv>
  )
})
