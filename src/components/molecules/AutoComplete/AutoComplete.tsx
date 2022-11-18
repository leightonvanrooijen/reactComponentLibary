import { TextInput } from "../../atoms/TextInput/TextInput"
import React, { Dispatch, useEffect, useState } from "react"
import { Menu } from "../../atoms/Menu/Menu"
import styled from "styled-components"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"
import { usePopOver } from "../../../common/popOver/usePopOver"

export type Option = {
  label: string
  subLabel: string
  id: string
}

export type AutoCompleteProps = {
  label: string
  options: Option[]
  defaultOption?: Option
}

const StyledDiv = styled("div")`
  display: inline-block;
  position: relative;

  box-sizing: border-box;

  top: 200px;
  left: 300px;
`

export type OptionProps = { options: Option[]; setSelected: Dispatch<Option> }

export const filterOptions = (
  options: Option[],
  currentTarget: EventTarget & HTMLInputElement,
  setFilteredOptions: Dispatch<Option[]>,
) => {
  const matchingOptions = options.filter(({ label, subLabel }) => {
    return (
      label.toLowerCase().includes(currentTarget.value.toLowerCase()) ||
      subLabel?.toLowerCase().includes(currentTarget.value.toLowerCase())
    )
  })
  setFilteredOptions(matchingOptions)
}

export const MenuOptionsList = ({ options, setSelected }: OptionProps) => {
  const items = options.map((option) => (
    <MenuItem onClick={() => setSelected(option)} id={option.id} key={option.id}>
      {option.label}
    </MenuItem>
  ))
  return <ul style={{ padding: 0, margin: 0 }}>{items}</ul>
}

export const AutoComplete = ({ label, options, defaultOption }: AutoCompleteProps) => {
  const [filteredOptions, setFilteredOptions] = useState(options)
  const [selected, setSelected] = useState<Option | undefined>(defaultOption)
  const [inputValue, setInputValue] = useState<string | undefined>("")
  const { reference, floating, open, setOpen } = usePopOver<HTMLInputElement>()

  useEffect(() => {
    setOpen(false)
    setInputValue(selected?.label)
  }, [selected])

  return (
    <StyledDiv>
      <TextInput
        label={label}
        value={inputValue}
        onClick={() => setOpen(true)}
        ref={reference}
        clearable
        onInputChange={({ currentTarget }) => {
          filterOptions(options, currentTarget, setFilteredOptions)
          setSelected(undefined)
        }}
      />
      <Menu isOpen={open} strategy={"absolute"} ref={floating}>
        <MenuOptionsList options={filteredOptions} setSelected={setSelected} />
      </Menu>
    </StyledDiv>
  )
}
