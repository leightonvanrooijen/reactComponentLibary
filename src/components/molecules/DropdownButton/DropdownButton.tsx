import React, { ReactNode, useState } from "react"
import { autoUpdate, useFloating } from "@floating-ui/react-dom"
import styled from "styled-components"
import { Button, ButtonSizes } from "../../atoms/Button/Button"
import { FaChevronDown } from "react-icons/all"
import { Menu } from "../../atoms/Menu/Menu"
import { setPopoverToParentWidth } from "../../../common/utils/popOver/setPopoverToParentWidth"

type DropdownButtonProps = {
  children: string
  menuWith?: string
  size?: ButtonSizes
  menuItems: ReactNode
}

const StyledDiv = styled("div")`
  display: inline-block;
  position: relative;

  box-sizing: border-box;
`

export const DropdownButton = ({ size, menuWith, menuItems, children }: DropdownButtonProps) => {
  const [open, setOpen] = useState(false)
  const { x, y, reference, floating, strategy } = useFloating<HTMLButtonElement>({
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [setPopoverToParentWidth()],
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
        <ul style={{ padding: 0, margin: 0 }}>{menuItems}</ul>
      </Menu>
    </StyledDiv>
  )
}
