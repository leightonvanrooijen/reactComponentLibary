import { TextInput, TextInputProps } from "./TextInput"
import { fireEvent, render } from "@testing-library/react"
import { TestProvider } from "../../../common/testUtils/TestProvider"

const setUp = (overwrites?: Partial<TextInputProps>) => {
  const props = {
    label: "label",
    ...overwrites,
  }

  return (
    <TestProvider withTheme>
      <TextInput {...props} />
    </TestProvider>
  )
}

describe("TextInput", () => {
  it("displays text typed into the input", () => {
    const text = "hello"
    const { getByRole, getByDisplayValue } = render(setUp())

    const input = getByRole("textbox")
    fireEvent.click(input)
    fireEvent.change(input, { target: { value: text } })

    expect(getByDisplayValue(text)).toBeInTheDocument()
  })
  it("can accept a default value", () => {
    const text = "hello"
    const { getByDisplayValue } = render(setUp({ defaultValue: text }))

    expect(getByDisplayValue(text)).toBeInTheDocument()
  })
})
