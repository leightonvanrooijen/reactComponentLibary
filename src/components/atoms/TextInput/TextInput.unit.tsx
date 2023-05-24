import { TextInput, TextInputProps } from "./TextInput"
import { fireEvent, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MockProvider } from "../../../packages/test/MockProvider"

const setUp = (overwrites?: Partial<TextInputProps>) => {
  const props = {
    label: "label",
    ...overwrites,
  }

  return (
    <MockProvider withTheme>
      <TextInput {...props} />
    </MockProvider>
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
  it("displays helper text if it is set", () => {
    const helperText = "helper text"
    const { getByText } = render(setUp({ helperText }))

    expect(getByText(helperText)).toBeInTheDocument()
  })
  it("displays a * on the end on the label if the field is required", () => {
    const { getByText } = render(setUp({ required: true, label: "Label" }))

    expect(getByText("Label*")).toBeInTheDocument()
  })
  it("calls onInputChange each time the input is changed", async () => {
    const onInputChange = jest.fn()
    const { getByRole } = render(setUp({ onInputChange }))

    const input = getByRole("textbox")

    await waitFor(() => userEvent.type(input, "hello"))

    expect(onInputChange).toHaveBeenCalledTimes(5)
  })
  it("calls onChange each time the input is changed", async () => {
    const onChange = jest.fn()
    const { getByRole } = render(setUp({ onChange }))

    const input = getByRole("textbox")

    await waitFor(() => userEvent.type(input, "hello"))

    expect(onChange).toHaveBeenCalledTimes(5)
  })
  it("clears the input if the clear button is clicked", async () => {
    const { getByRole, getByTestId } = render(setUp({ clearable: true }))

    const input = getByRole("textbox")
    await waitFor(() => userEvent.type(input, "hello"))

    expect(input).toHaveValue("hello")

    await waitFor(() => userEvent.click(getByTestId("clear-button")))

    expect(input).toHaveValue("")
  })
})
