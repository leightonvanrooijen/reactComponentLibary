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
  onClick: MouseEventHandler<HTMLButtonElement>
}

export const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <StyledIconButton color={"#FF0000"} onClick={onClick}>
      {children}
    </StyledIconButton>
  )
}
