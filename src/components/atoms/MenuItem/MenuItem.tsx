import styled, { css } from "styled-components"
import { Icon } from "../Icon/Icon"
import React, { MouseEventHandler, ReactNode } from "react"
import { IconType } from "react-icons"
import { ButtonSizes, ButtonVariants } from "../Button/Button"
import { Typography } from "../Text/Typography"
import { getTypographyVariant } from "../../utils/getTypographyVariant"

export type MenuItemProps = {
  id?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  leftIcon?: IconType
  rightIcon?: IconType
  children: ReactNode
  secondaryText?: ReactNode
}

export const StyledRightIcon = styled("div")`
  margin-left: auto;
`

export const StyledMenuItem = styled("button")<{ size: ButtonSizes }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  border: none;

  width: 100%;

  font: ${({ theme }) => theme.color.menuFontDefault};
  background-color: ${({ theme }) => theme.color.menuFill};

  :hover {
    background-color: ${({ theme }) => theme.color.menuFillHover};
    cursor: pointer;
  }

  :disabled {
    background-color: ${({ theme }) => theme.color.menuFillDisabled};
    cursor: default;
  }

  ${({ size }) => {
    if (size === "Small") {
      return css`
        padding: 0.375rem 0.75rem;
      `
    }

    if (size === "Medium") {
      return css`
        padding: 0.5rem 0.75rem;
      `
    }
  }}
`

const wrapInTypographyIfText = (node: ReactNode, size: ButtonSizes) => {
  if (typeof node === "string") {
    return <Typography variant={getTypographyVariant(size)}>{node}</Typography>
  }
  return node
}

export const MenuItem = ({
  id,
  onClick,
  disabled = false,
  variant = "Primary",
  size = "Medium",
  leftIcon,
  rightIcon,
  children,
  secondaryText,
}: MenuItemProps) => {
  const PrimaryText = wrapInTypographyIfText(children, "Medium")
  const SecondaryText = wrapInTypographyIfText(secondaryText, "Small")

  return (
    <div role={"menuitem"}>
      <StyledMenuItem
        id={id}
        role={"button"}
        onClick={(e) => {
          onClick && onClick(e)
        }}
        disabled={disabled}
        size={size}
      >
        {leftIcon && (
          <div style={{ marginRight: 8 }}>
            <Icon icon={leftIcon} />
          </div>
        )}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "start",
            textAlign: "left",
            flexDirection: "column",
          }}
        >
          {PrimaryText}
          {SecondaryText}
        </div>
        {rightIcon && (
          <StyledRightIcon>
            <Icon icon={rightIcon} />
          </StyledRightIcon>
        )}
      </StyledMenuItem>
    </div>
  )
}
