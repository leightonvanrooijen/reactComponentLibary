import { ComponentMeta } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { AutoComplete } from "./AutoComplete"
import { expect } from "@storybook/jest"

export type PlayProps = { canvasElement: HTMLElement }

export default {
  title: "Molecules/Auto Complete/Interactions",
  component: AutoComplete,
  args: {
    options: [
      { label: "Item 1", subLabel: "xyz", id: "xm" },
      { label: "Item 2", subLabel: "kzl", id: "xm" },
    ],
  },
} as ComponentMeta<typeof AutoComplete>

export const ShowsAMenuWhenClicked = {
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    const textField = canvas.getByRole("textbox")
    userEvent.click(textField)

    expect(canvas.getByText("Item 1")).toBeInTheDocument()
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
    expect(canvas.getByText("Item 2")).not.toBeInTheDocument()
  },
}
