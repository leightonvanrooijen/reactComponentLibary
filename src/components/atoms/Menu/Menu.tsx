import styled from "styled-components"
import { forwardRef, ReactNode } from "react"
import { PopOver } from "../Popover/PopOver"

export type MenuProps = {
  isOpen: boolean
  top: number
  left: number
  width?: string
  strategy: "absolute" | "fixed"
  children: ReactNode
}

export const StyledMenu = styled("div")<Partial<MenuProps>>`
  width: ${({ width }) => width ?? "inherit"};
  padding: 6px 0;

  background-color: ${({ theme }) => theme.color.menuFill};

  box-sizing: border-box;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.lighting.menuShadow};
`

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ top, left, width, strategy, children, isOpen }: MenuProps, ref) => {
    return (
      <PopOver isOpen={isOpen} top={top ? top + 2 : 0} left={left ?? 0} width={width} strategy={strategy} ref={ref}>
        <StyledMenu>{children}</StyledMenu>
      </PopOver>
    )
  },
)
