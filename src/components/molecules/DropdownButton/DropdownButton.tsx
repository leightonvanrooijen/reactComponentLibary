import React, { useState } from "react"
import { autoUpdate, size, useFloating } from "@floating-ui/react-dom"
import styled from "styled-components"
import { Button, ButtonSizes } from "../../atoms/Button/Button"
import { FaChevronDown } from "react-icons/all"
import { Menu } from "../../atoms/Menu/Menu"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"

type DropdownButtonProps = {
  children: string
  menuWith?: string
  size?: ButtonSizes
  // menuItems: HTMLUListElement
}

const StyledDiv = styled("div")`
  display: inline-block;
  position: relative;

  box-sizing: border-box;
`

const setChildToParentWidth = () =>
  size({
    apply({ rects, elements }) {
      Object.assign(elements.floating.style, {
        width: `${rects.reference.width}px`,
      })
    },
  })

export const DropdownButton = ({ size, menuWith, children }: DropdownButtonProps) => {
  const [open, setOpen] = useState(false)
  const { x, y, reference, floating, strategy } = useFloating<HTMLButtonElement>({
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [setChildToParentWidth()],
  })

  return (
    <StyledDiv>
      <Button
        rightIcon={FaChevronDown}
        ref={reference}
        onClick={() => {
          setOpen(!open)
        }}
        size={size}
      >
        {children}
      </Button>
      <Menu isOpen={open} top={y ? y + 2 : 0} left={x ?? 0} width={menuWith} strategy={strategy} ref={floating}>
        <MenuItem onClick={() => undefined}>Item 1</MenuItem>
        <MenuItem onClick={() => undefined}>Item 2</MenuItem>
      </Menu>
    </StyledDiv>
  )
}
