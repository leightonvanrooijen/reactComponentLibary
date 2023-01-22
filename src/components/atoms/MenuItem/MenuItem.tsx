import styled from "styled-components"
import { Icon } from "../Icon/Icon"
import React, { MouseEventHandler } from "react"
import { IconType } from "react-icons"
import { ButtonSizes, ButtonVariants } from "../Button/Button"
import { Typography } from "../Text/Typography"

export type MenuItemProps = {
  id?: string
  onClick: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  leftIcon?: IconType
  rightIcon?: IconType
  children: string
}

export const StyledRightIcon = styled("div")`
  margin-left: auto;
`

export const StyledMenuItem = styled("button")`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  width: 100%;

  padding: 0.375rem 1rem;
  border: none;

  font: ${({ theme }) => theme.color.menuFontDefault}
  background-color: ${({ theme }) => theme.color.menuFill};

  :hover {
    background-color: ${({ theme }) => theme.color.menuFillHover};
    cursor: pointer;
  }

  :disabled {
    background-color: ${({ theme }) => theme.color.menuFillDisabled};
    cursor: default;
  }
`

export const MenuItem = ({
  id,
  onClick,
  disabled = false,
  variant = "Primary",
  size = "Medium",
  leftIcon,
  rightIcon,
  children,
}: MenuItemProps) => {
  return (
    <div role={"menuitem"}>
      <StyledMenuItem id={id ?? children} role={"button"} onClick={onClick} disabled={disabled}>
        {leftIcon && (
          <div style={{ marginRight: 6 }}>
            <Icon icon={leftIcon} />
          </div>
        )}
        <Typography>{children}</Typography>
        {rightIcon && (
          <StyledRightIcon>
            <Icon icon={rightIcon} />
          </StyledRightIcon>
        )}
      </StyledMenuItem>
    </div>
  )
}
