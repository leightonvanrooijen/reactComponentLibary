import { Meta, StoryObj } from "@storybook/react"
import { ListItem } from "./ListItem"

const meta: Meta<typeof ListItem> = {
  title: "atoms/List Item",
  component: ListItem,
  args: {
    onClick: () => undefined,
    size: "Small",
    children: "List Item",
  },
}

export default meta
type Story = StoryObj<typeof ListItem>

export const Small = {}
export const Medium = {
  args: {
    size: "Medium",
  },
}

export const WithSecondaryText = {
  args: {
    secondaryText: "Secondary Text",
  },
}
