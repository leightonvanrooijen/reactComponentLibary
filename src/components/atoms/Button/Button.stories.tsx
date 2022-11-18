import { ComponentMeta } from "@storybook/react"
import { Button } from "./Button"
import { FaChevronDown, FaTrash } from "react-icons/fa"

export default {
  title: "atoms/Button",
  component: Button,
  args: { children: "BUTTON", size: "Medium" },
} as ComponentMeta<typeof Button>

export const Small = { args: { size: "Small" } }

export const Medium = {}

export const withLeftIcon = { args: { leftIcon: FaTrash } }

export const withRightIcon = { args: { rightIcon: FaChevronDown } }

export const Disabled = { args: { disabled: true } }
