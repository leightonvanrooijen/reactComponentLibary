import styled from "styled-components"
import { MouseEventHandler, ReactNode } from "react"

export const StyledIconButton = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.iconButtonText};
  background-color: ${({ theme }) => theme.color.iconButtonFill};

  width: 1.5rem;
  height: 1.5rem;

  border: none;
  border-radius: 50%;
  padding: 0;

  :hover {
    background-color: ${({ theme }) => `${theme.color.iconButtonText}10`};
  }
`

export type IconButtonProps = {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  color?: string
  dataTestId?: string
}

export const IconButton = ({ children, onClick, color, dataTestId }: IconButtonProps) => {
  return (
    <StyledIconButton
      color={color}
      onClick={(e) => {
        e.preventDefault()
        onClick && onClick(e)
      }}
      data-testid={dataTestId}
    >
      {children}
    </StyledIconButton>
  )
}
