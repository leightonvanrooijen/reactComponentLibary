import { TextInput } from "../../atoms/TextInput/TextInput"
import React, { Dispatch, useEffect, useState } from "react"
import { Menu } from "../../atoms/Menu/Menu"
import styled from "styled-components"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"
import { usePopOver } from "../../../common/popOver/usePopOver"
import { filterOptions } from "./utils/filterOptions"

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
`

export type OptionProps = { options: Option[]; setSelected: Dispatch<Option> }

export const MenuOptions = ({ options, setSelected }: OptionProps) => {
  const menuItems = options.map((option) => (
    <MenuItem onClick={() => setSelected(option)} id={option.id} key={option.id}>
      {option.label}
    </MenuItem>
  ))

  return <>{menuItems}</>
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
          setFilteredOptions(filterOptions(options, currentTarget.value))
          setSelected(undefined)
        }}
      />
      <Menu isOpen={open} strategy={"absolute"} ref={floating}>
        <MenuOptions options={filteredOptions} setSelected={setSelected} />
      </Menu>
    </StyledDiv>
  )
}
