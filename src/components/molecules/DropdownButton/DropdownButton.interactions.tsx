import { ComponentMeta } from "@storybook/react"
import { DropdownButton } from "./DropdownButton"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"
import { userEvent, within } from "@storybook/testing-library"
import { expect } from "@storybook/jest"

export type PlayProps = { canvasElement: HTMLElement }

export default {
  title: "Molecules/Dropdown Button/Interactions",
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

export const OpensMenuWhenClicked = {
  args: {
    children: "BUTTON",
    menuItems: [
      <MenuItem onClick={() => undefined}>Item 1</MenuItem>,
      <MenuItem onClick={() => undefined}>Item 2</MenuItem>,
    ],
  },
  play: async ({ canvasElement }: PlayProps) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByText("BUTTON"))

    expect(canvas.getByText("Item 1")).toBeInTheDocument()
  },
}
