import styled, { css } from "styled-components"
import React, { MouseEventHandler } from "react"
import { IconType } from "react-icons"
import { Icon } from "../Icon/Icon"
import { Typography } from "../Text/Typography"
import { getFocusAccessibilityCss } from "../../../common/sharredCss/getFocusAccessibilityCss"
import { getTypographyVariant } from "../../utils/getTypographyVariant"

export type ButtonSizes = "Small" | "Medium"
export type ButtonVariants = "Primary" | "Text"

export type ButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  variant?: ButtonVariants
  size?: ButtonSizes
  leftIcon?: IconType
  rightIcon?: IconType
  children: string
  type?: "button" | "submit"
}

export const getButtonSizeCSS = (size: ButtonSizes) => {
  if (size === "Small") {
    return css`
      padding: 0.375rem 0.5rem;
      font-size: 0.75rem;
      height: 2.25rem;
    `
  }

  return css`
    padding: 0.375rem 1rem;
    font-size: ${(props) => props.theme.typography.bodyMedium};
    height: 2.5rem;
  `
}

export type StyledButton = {
  variant: ButtonVariants
  size: ButtonSizes
}

export const StyledButton = styled("button")<StyledButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.color[`button${props.variant}Fill`]};
  font: ${(props) => props.theme.color[`button${props.variant}Text`]};

  border: none;
  border-radius: 0.25rem;
  padding: 0.375rem 1rem;

  box-sizing: border-box;

  ${(props) => getButtonSizeCSS(props.size)}

  :hover {
    background-color: ${(props) => props.theme.color[`button${props.variant}Hover`]};
    cursor: pointer;
  }

  :disabled {
    background-color: ${(props) => props.theme.color.buttonDisabledFill};
    font: ${(props) => props.theme.color.buttonDisabledText};
    cursor: default;
    :hover {
      background-color: ${(props) => props.theme.color.buttonDisabledFill};
    }
  }

  :active {
    background-color: ${(props) => props.theme.color[`button${props.variant}Active`]};
  }

  ${({ theme }) => getFocusAccessibilityCss(theme)}
`

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { onClick, disabled = false, variant = "Primary", size = "Medium", leftIcon, rightIcon, children, type = "button" },
    ref,
  ) => {
    return (
      <StyledButton role={"button"} size={size} variant={variant} onClick={onClick} disabled={disabled} ref={ref}>
        <>
          {leftIcon && (
            <div style={{ marginRight: 6 }}>
              <Icon icon={leftIcon} />
            </div>
          )}
          <Typography variant={getTypographyVariant(size)}>{children}</Typography>
          {rightIcon && (
            <div style={{ marginLeft: 6 }}>
              <Icon icon={rightIcon} />
            </div>
          )}
        </>
      </StyledButton>
    )
  },
)
;``
