import styled from "styled-components"
import { StyledTypography, Typography } from "../Text/Typography"
import { ChangeEvent, FormEvent, forwardRef, RefObject, useEffect, useRef } from "react"
import { IconButton } from "../IconButton/IconButton"
import { Icon } from "../Icon/Icon"
import { MdClear } from "react-icons/md"

const StyledInputDiv = styled("div")`
  position: relative;
  display: flex;
  align-items: end;

  height: 36px;
  width: max(200px, 100px);
  padding: 4px 16px;

  border-radius: 2px;

  background-color: ${({ theme }) => theme.color.menuFill};

  :hover {
    background-color: ${({ theme }) => theme.color.menuFillHover};
  }

  :focus-within {
    border-bottom: 1px solid ${({ theme }) => theme.color.focusOutline};
  }
`

const StyledLabelDiv = styled("div")`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  font-size: 12px;
  transition: top 0.3s ease;

  ${StyledTypography} {
    transition: font-size 0.3s;
    color: ${({ theme }) => theme.color.labelPrimary};
  }
`

export const StyledTextInput = styled("input")`
  font-size: 16px;
  padding: 0;

  width: 100%;
  box-sizing: border-box;
  border: none;
  background-color: transparent;

  // overflow test shows '...' at the end
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  :focus {
    outline: none;
  }

  // Label transition
  :focus + div,
  :not(:placeholder-shown) + div {
    top: 0;
    transition: top 0.3s;

    ${StyledTypography} {
      font-size: 12px;
      transition: font-size 0.3s ease-in;
    }
  }

  // clear input icon
  :placeholder-shown ~ button {
    display: none;
  }

  :not(:placeholder-shown) ~ button {
    display: flex;
  }
`

export type TextInputProps = {
  label: string
  value?: string
  defaultValue?: string
  autoComplete?: Boolean
  clearable?: Boolean
  onClick?: () => void
  onInputChange?: (event: FormEvent<HTMLInputElement>) => void
  onChange?: (event: ChangeEvent) => void
}

const clearValue = (inputRef: RefObject<HTMLInputElement>) => () => {
  if (inputRef.current?.value) {
    inputRef.current.value = ""
    inputRef.current.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

const updateValue = (value: string | undefined, inputRef: RefObject<HTMLInputElement>) => {
  if (inputRef.current && value) {
    inputRef.current.value = value
    inputRef.current.dispatchEvent(new Event("input", { bubbles: true }))
  }
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, defaultValue, autoComplete, onClick, onInputChange, onChange, value, clearable }: TextInputProps, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      updateValue(value, inputRef)
    }, [value])

    return (
      <StyledInputDiv
        onClick={() => {
          inputRef.current?.focus()
          if (onClick) onClick()
        }}
        onMouseDown={(event) => {
          event.preventDefault()
        }}
        ref={ref}
      >
        <StyledTextInput
          role={"textbox"}
          ref={inputRef}
          placeholder={" "}
          defaultValue={defaultValue}
          onInput={onInputChange}
          onChange={onChange}
          autoComplete={autoComplete ? "on" : "off"}
          aria-label={`${label}-input`}
        />
        <StyledLabelDiv>
          <Typography>{label}</Typography>
        </StyledLabelDiv>
        {clearable && (
          <IconButton onClick={clearValue(inputRef)}>
            <Icon icon={MdClear} />
          </IconButton>
        )}
      </StyledInputDiv>
    )
  },
)
