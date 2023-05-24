import styled from "styled-components"
import React, { forwardRef, ReactNode } from "react"

export type PopOverProps = {
  isOpen: boolean
  width?: string
  strategy: "absolute" | "fixed"
  children?: ReactNode
}

export const StyledPopOver = styled("div")<Partial<PopOverProps>>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: ${({ strategy }) => (strategy ? strategy : "fixed")};
  z-index: 10;

  width: ${({ width }) => width};
`

export const PopOver = forwardRef<HTMLDivElement, PopOverProps>(
  ({ width, strategy, children, isOpen }: PopOverProps, ref) => {
    if (isOpen) {
      return (
        <StyledPopOver
          ref={ref}
          isOpen={isOpen}
          width={width}
          onMouseDown={(event) => {
            event.preventDefault()
          }}
        >
          {children}
        </StyledPopOver>
      )
    }
    return null
  },
)
