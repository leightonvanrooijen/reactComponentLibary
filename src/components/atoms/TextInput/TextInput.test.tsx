import { TextInput } from "./TextInput"
import { fireEvent, render } from "@testing-library/react"
import { TestProvider } from "../../../common/testUtils/TestProvider"

const setUp = () => {
  return (
    <TestProvider withTheme>
      <TextInput label={"label"} />
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
})
