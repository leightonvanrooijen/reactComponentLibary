import styled, { css } from "styled-components"
import { FC } from "react"
import { IconType } from "react-icons"

export type IconSizes = "Small" | "Medium"

export type IconProps = {
  icon: IconType
  size?: IconSizes
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

export type StyledIconProps = Required<Omit<IconProps, "icon">>

export const StyledIconDiv = styled("div")<StyledIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => getIconSizeCSS(props.size)}
`

export const Icon: FC<IconProps> = ({ icon, size = "Medium" }) => {
  const SvgIcon = icon
  return (
    <StyledIconDiv size={size} role={"img"}>
      <SvgIcon height={"fit-content"} width={"fit-content"} />
    </StyledIconDiv>
  )
}
