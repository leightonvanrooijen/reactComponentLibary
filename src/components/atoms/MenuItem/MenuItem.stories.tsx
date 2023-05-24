import { Meta, StoryObj } from "@storybook/react"
import { MenuItem } from "./MenuItem"
import { FaClipboard, FaTractor } from "react-icons/fa"

const meta: Meta<typeof MenuItem> = {
  title: "atoms/Menu Item",
  component: MenuItem,
}

export default meta
type Story = StoryObj<typeof MenuItem>

export const Small = {
  args: {
    onClick: () => undefined,
    children: "Text",
    size: "Small",
  },
}

export const Medium = {
  args: {
    onClick: () => undefined,
    children: "Text",
    size: "Medium",
  },
}

export const WithSecondaryText = {
  args: {
    onClick: () => undefined,
    secondaryText: "Secondary Text",
    children: "Paste",
  },
}

export const WithLeftIcon = {
  args: {
    onClick: () => undefined,
    children: "Paste",
    leftIcon: FaClipboard,
  },
}

export const WithRightIcon = {
  args: {
    onClick: () => undefined,
    children: "Paste",
    rightIcon: FaClipboard,
  },
}

export const WithBothIcons = {
  args: {
    onClick: () => undefined,
    children: "Paste",
    leftIcon: FaClipboard,
    rightIcon: FaTractor,
  },
}

export const Disabled = {
  args: {
    onClick: () => undefined,
    disabled: true,
    children: "Paste",
    leftIcon: FaClipboard,
    rightIcon: FaTractor,
  },
}
