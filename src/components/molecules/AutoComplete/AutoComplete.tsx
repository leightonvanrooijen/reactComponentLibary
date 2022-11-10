import { TextInput } from "../../atoms/TextInput/TextInput"
import React, { useEffect, useState } from "react"
import { autoUpdate, useFloating } from "@floating-ui/react-dom"
import { Menu } from "../../atoms/Menu/Menu"
import styled from "styled-components"
import { setPopoverToParentWidth } from "../../../common/utils/popOver/setPopoverToParentWidth"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"

export type Option = {
  label: string
  subLabel: string
  id: string
}

export type AutoCompleteProps = {
  options: Option[]
}

const StyledDiv = styled("div")`
  display: inline-block;
  position: relative;

  box-sizing: border-box;
`

export type OptionProps = { options: Option[] }

export const MenuOptionsList = ({ options }: OptionProps) => {
  const items = options.map((option) => (
    <MenuItem onClick={() => undefined} id={option.id}>
      {option.label}
    </MenuItem>
  ))
  return <ul style={{ padding: 0, margin: 0 }}>{items}</ul>
}

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`)
  }
}

export type PopperRefs = {
  reference: React.MutableRefObject<HTMLDivElement | null>
  floating: React.MutableRefObject<HTMLElement | null>
}

export const AutoComplete = ({ options }: AutoCompleteProps) => {
  const [open, setOpen] = useState(false)
  const { x, y, reference, floating, strategy, refs } = useFloating<HTMLDivElement>({
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [setPopoverToParentWidth()],
  })

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      assertIsNode(event.target)
      if (shouldClosePopOver(refs, event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", closeMenu)

    return () => document.removeEventListener("mousedown", closeMenu)
  }, [refs])

  return (
    <StyledDiv>
      <TextInput
        label={"Label"}
        onClick={() => setOpen(true)}
        ref={reference}
        autoComplete
        onInputChange={(event) => {
          console.log(event.currentTarget.value)
        }}
      />
      <Menu isOpen={open} top={y ? y + 2 : 0} left={x ?? 0} width={"hi"} strategy={strategy} ref={floating}>
        <MenuOptionsList options={options} />
      </Menu>
    </StyledDiv>
  )
}

function shouldClosePopOver(refs: PopperRefs, target: Node) {
  return Boolean(!refs.reference?.current?.contains(target) && !refs.floating?.current?.contains(target))
}
