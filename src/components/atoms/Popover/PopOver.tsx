import styled from "styled-components"
import React, { forwardRef, ReactNode } from "react"

export type PopOverProps = {
  isOpen: boolean
  top: number
  left: number
  width?: string
  strategy: "absolute" | "fixed"
  children?: ReactNode
}

export const StyledPopOver = styled("div")<Partial<PopOverProps>>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: ${({ strategy }) => (strategy ? strategy : "fixed")};
  width: ${({ width }) => width};

  box-sizing: border-box !important;

  left: ${({ left }) => left};
  top: ${({ top }) => top};
`

export const PopOver = forwardRef<HTMLDivElement, PopOverProps>(
  ({ top, left, width, strategy, children, isOpen }: PopOverProps, ref) => {
    return (
      // TODO unsure why I can't pass top and left to the styled component but style works
      <StyledPopOver ref={ref} isOpen={isOpen} width={width} style={{ top: top ?? 0, left: left ?? 0 }}>
        {children}
      </StyledPopOver>
    )
  },
)
