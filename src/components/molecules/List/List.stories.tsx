import { Meta, StoryObj } from "@storybook/react"
import { ListItem } from "../../atoms/ListItem/ListItem"
import { List } from "./List"

const meta: Meta<typeof List> = {
  title: "molecules/List",
  component: List,
}

export default meta
type Story = StoryObj<typeof List>

export const Default = {
  render: (args: any) => (
    <div style={{ height: "100%", display: "flex" }}>
      <List>
        <ListItem {...args}>Item 1</ListItem>
        <ListItem {...args}>Item 2</ListItem>
        <ListItem {...args}>Item 3</ListItem>
      </List>
    </div>
  ),
  args: {
    onClick: () => undefined,
    children: "Text",
  },
}

export const Loading = {
  render: (args: any) => (
    <div style={{ height: "100%", display: "flex" }}>
      <List loading>
        <ListItem {...args}>Item 1</ListItem>
      </List>
    </div>
  ),
  args: {
    onClick: () => undefined,
    children: "Text",
  },
}
