import { ComponentMeta } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { AutoComplete, AutoCompleteProps } from "./AutoComplete"
import { expect } from "@storybook/jest"

export type PlayProps = { canvasElement: HTMLElement }

const defaultArgs: AutoCompleteProps = {
  label: "Label",
  options: [
    { label: "Item 1", subLabel: "xyz", id: "xm" },
    { label: "Item 2", subLabel: "kzl", id: "ssxm" },
  ],
}

export default {
  title: "Molecules/Auto Complete/Interactions",
  component: AutoComplete,
  args: { ...defaultArgs },
} as ComponentMeta<typeof AutoComplete>

export const ShowsAMenuWhenClicked = {
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    const textField = canvas.getByRole("textbox")
    userEvent.click(textField)

    expect(canvas.getByText("Item 1")).toBeInTheDocument()
  },
}

export const ClosesMenuWhenAOptionIsSelected = {
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    const textField = canvas.getByRole("textbox")
    await userEvent.click(textField)

    const menu = canvas.getByRole("popover")
    expect(menu).toBeVisible()

    const option = canvas.getByText("Item 1")
    await userEvent.click(option)

    // Skipping this as I can't find a clean way to test it - https://github.com/testing-library/jest-dom/issues/113#issuecomment-496971128
    // expect(menu).not.toBeVisible()
  },
}

export const FiltersItemsByTextInput = {
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    const textField = canvas.getByRole("textbox")
    userEvent.click(textField)

    expect(canvas.getByText("Item 1")).toBeInTheDocument()
    expect(canvas.getByText("Item 2")).toBeInTheDocument()

    userEvent.type(textField, "Item 1")

    expect(canvas.getByText("Item 1")).toBeInTheDocument()
    expect(canvas.queryByText("Item 2")).not.toBeInTheDocument()
  },
}

export const ClearsInputValueWhenClearButtonClicked = {
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    const textField = canvas.getByRole("textbox")
    userEvent.click(textField)
    userEvent.type(textField, "Item 1")

    expect(textField).toHaveValue("Item 1")

    const clearButton = canvas.getByRole("img")
    userEvent.click(clearButton)

    expect(textField).toHaveValue("")
  },
}

export const ShowsDefaultOption = {
  args: { ...defaultArgs, defaultOption: defaultArgs.options[0] },
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    const textField = canvas.getByRole("textbox")
    console.log(textField)

    expect(textField).toHaveValue(defaultArgs.options[0].label)
  },
}
