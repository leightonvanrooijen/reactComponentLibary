import { ComponentMeta, ComponentStory } from "@storybook/react"
import { MenuItem } from "./MenuItem"
import { FaClipboard, FaTractor } from "react-icons/fa"

export default {
  title: "atoms/Menu Item",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: () => undefined,
  children: "Text",
}

export const WithLeftIcon = Template.bind({})
WithLeftIcon.args = {
  onClick: () => undefined,
  children: "Paste",
  leftIcon: FaClipboard,
}

export const WithRightIcon = Template.bind({})
WithRightIcon.args = {
  onClick: () => undefined,
  children: "Paste",
  rightIcon: FaClipboard,
}

export const WithBothIcons = Template.bind({})
WithBothIcons.args = {
  onClick: () => undefined,
  children: "Paste",
  leftIcon: FaClipboard,
  rightIcon: FaTractor,
}

export const Disabled = Template.bind({})
Disabled.args = {
  onClick: () => undefined,
  disabled: true,
  children: "Paste",
  leftIcon: FaClipboard,
  rightIcon: FaTractor,
}
