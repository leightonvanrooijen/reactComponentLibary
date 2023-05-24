import { render, waitFor } from "@testing-library/react"
import { AutoComplete, AutoCompleteProps } from "./AutoComplete"
import { userEvent } from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { MockProvider } from "../../../packages/test/MockProvider"

const options = [
  { label: "Item 1", subLabel: "xyz", id: "xm" },
  { label: "Item 2", subLabel: "kzl", id: "ssxm" },
]

const setUp = (props?: Partial<AutoCompleteProps>) => {
  return render(
    <MockProvider withTheme>
      <AutoComplete label="Label" options={options} {...props} />
    </MockProvider>,
  )
}

describe("AutoComplete", () => {
  it("displays the options in the menu", async () => {
    const { getByRole } = setUp()
    const textField = getByRole("textbox")

    await waitFor(() => userEvent.click(textField))

    expect(getByRole("menuitem", { name: "Item 1" })).toBeInTheDocument()
    expect(getByRole("menuitem", { name: "Item 2" })).toBeInTheDocument()
  })
  it("displays the selected option in the text field when on is selected", async () => {
    const { getByRole, getByText } = setUp()

    const textField = getByRole("textbox")

    await waitFor(() => {
      userEvent.click(textField)
      userEvent.click(getByText("Item 1"))
    })

    expect(textField).toHaveValue("Item 1")
  })
  it("filters the options by the text in the text field", async () => {
    const { getByRole, getByText, queryByText } = setUp()

    const textField = getByRole("textbox")

    await waitFor(() => {
      userEvent.click(textField)
      userEvent.type(textField, "Item 1")
    })

    expect(getByText("Item 1")).toBeInTheDocument()
    expect(queryByText("Item 2")).not.toBeInTheDocument()
  })
  it("clears the text field when the user clicks away without selecting an option", async () => {
    const { getByRole } = setUp()

    const textField = getByRole("textbox")

    await waitFor(() => {
      userEvent.click(textField)
      userEvent.type(textField, "It")
    })

    await waitFor(() => {
      userEvent.click(document.body)
    })

    expect(textField).toHaveValue("")
  })
  it("selects the option in the menu if it is an exact match", async () => {
    const { getByRole } = setUp()

    const textField = getByRole("textbox")

    await waitFor(() => {
      userEvent.click(textField)
      userEvent.type(textField, "Item 1")
    })

    expect(textField).toHaveValue("Item 1")
  })
})
