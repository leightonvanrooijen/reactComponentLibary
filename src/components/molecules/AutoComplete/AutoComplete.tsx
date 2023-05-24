import { TextInput } from "../../atoms/TextInput/TextInput"
import React, { ChangeEvent, Dispatch, useEffect, useState } from "react"
import { Menu } from "../Menu/Menu"
import styled from "styled-components"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"
import { usePopOver } from "../../../common/popOver/usePopOver"
import { filterOptions } from "./utils/filterOptions"
import { mergeRefs } from "../../utils/mergeRefs"

export type Option = {
  label: string
  subLabel?: string
  id: string
}

export type AutoCompleteProps = {
  label: string
  name?: string
  options: Option[]
  defaultOption?: Option
  helperText?: string
  state?: "Error"
  onChange?: (
    event: React.SyntheticEvent<HTMLInputElement, { target: { value: Option | undefined; name: "good" } }>,
  ) => void
  required?: boolean
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
}

const StyledDiv = styled("div")`
  display: inline-block;
  position: relative;

  box-sizing: border-box;
`

export type OptionProps = { options: Option[]; setSelected: Dispatch<Option> }

export const MenuOptions = ({ options, setSelected }: OptionProps) => {
  const menuItems = options.map((option) => (
    <MenuItem onClick={() => setSelected(option)} id={option.id} key={option.id} secondaryText={option?.subLabel}>
      {option.label}
    </MenuItem>
  ))

  return <>{menuItems}</>
}

export const AutoComplete = React.forwardRef<HTMLInputElement, AutoCompleteProps>(
  ({ label, name, options, state, helperText, defaultOption, onChange, onBlur, required }, ref) => {
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(defaultOption ? [defaultOption] : [])
    const [selected, setSelected] = useState<Option | undefined>(defaultOption)
    const [inputValue, setInputValue] = useState<string | undefined>("")
    const { reference, floating, open, setOpen } = usePopOver<HTMLInputElement>()

    // fire the onChange event when the selected option changes
    useEffect(() => {
      setInputValue(selected?.label)
      onChange &&
        onChange({
          // @ts-ignore - need to sort the typing but not urgent
          target: { value: selected, name: "good" },
        })
    }, [onChange, selected])

    // update options array if the input changes
    useEffect(() => {
      setFilteredOptions(options)
    }, [options])

    return (
      <StyledDiv>
        <TextInput
          name={name}
          label={label}
          value={inputValue}
          required={required}
          onClick={() => setOpen(true)}
          ref={mergeRefs([reference, ref])}
          clearable
          helperText={helperText}
          state={state}
          onInputChange={(e) => {
            e.preventDefault()
            setFilteredOptions(filterOptions(options, e.currentTarget.value))

            // clear search if the user clicks away without selecting an option
            if (e.currentTarget.value !== selected?.label) {
              setOpen(true)
              setSelected(undefined)
            }
          }}
          onBlur={(e) => {
            // if the search is an exact match then select that one
            if (filteredOptions.length === 1 && filteredOptions[0].label === e.target.value) {
              setSelected(filteredOptions[0])
              return
            }
            // clear the input if the user clicks away without selecting an option
            if (e.target.value !== selected?.label) {
              setInputValue(selected?.label)
              e.target.value = selected?.label || ""
            }

            // ensure the options are reset
            setFilteredOptions(options)
          }}
        />
        <Menu isOpen={open} strategy={"absolute"} ref={floating} height={"400px"}>
          <MenuOptions
            options={filteredOptions}
            setSelected={(value) => {
              setSelected(value)
              setOpen(false)
            }}
          />
        </Menu>
      </StyledDiv>
    )
  },
)
