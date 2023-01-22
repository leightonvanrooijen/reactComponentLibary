import React, { ReactNode, useState } from "react"
import styled from "styled-components"
import { Button, ButtonSizes } from "../../atoms/Button/Button"
import { FaChevronDown } from "react-icons/fa"
import { Menu } from "../../atoms/Menu/Menu"
import { usePopOver } from "../../../common/popOver/usePopOver"

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
  const { reference, floating } = usePopOver<HTMLButtonElement>()

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
      <Menu isOpen={open} width={menuWith} strategy={"absolute"} ref={floating}>
        {menuItems}
      </Menu>
    </StyledDiv>
  )
}
