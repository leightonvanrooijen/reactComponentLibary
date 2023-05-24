import styled from "styled-components"
import { forwardRef, ReactNode } from "react"
import { PopOver } from "../../atoms/Popover/PopOver"

export type MenuProps = {
  isOpen: boolean
  width?: string
  height?: string
  strategy: "absolute" | "fixed"
  children: ReactNode
}

export const StyledMenu = styled("div")<Partial<MenuProps>>`
  width: ${({ width }) => width ?? "inherit"};
  max-height: ${({ height }) => height ?? "inherit"};
  padding: 6px 0;

  background-color: ${({ theme }) => theme.color.menuFill};

  box-sizing: border-box;
  border-radius: 0.25rem;
  box-shadow: ${({ theme }) => theme.lighting.menuShadow};

  overflow: auto;
`

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ strategy, children, isOpen, width, height }: MenuProps, ref) => {
    return (
      <PopOver isOpen={isOpen} strategy={strategy} width={width} ref={ref}>
        <StyledMenu role={"menu"} height={height}>
          {children}
        </StyledMenu>
      </PopOver>
    )
  },
)
