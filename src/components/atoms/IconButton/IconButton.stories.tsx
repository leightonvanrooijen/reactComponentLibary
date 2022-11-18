import { ComponentMeta } from "@storybook/react"
import { FaTimes } from "react-icons/fa"
import { IconButton } from "./IconButton"
import { Icon } from "../Icon/Icon"

export default {
  title: "atoms/Icon Button",
  component: IconButton,
  args: { children: <Icon icon={FaTimes} />, size: "Medium" },
} as ComponentMeta<typeof IconButton>

export const Small = { args: { size: "Small" } }

export const Medium = {}

export const Disabled = { args: { disabled: true } }
