import { TextInput } from "./TextInput"
import { ComponentMeta } from "@storybook/react"

export default {
  title: "atoms/TextInput",
  component: TextInput,
  args: {},
} as ComponentMeta<typeof TextInput>

export const Default = {}
export const WithDefaultValue = { args: { defaultValue: "Leighton van Rooijen" } }
export const WithLongValue = { args: { defaultValue: "Leighton von van Hoozle Doozle" } }
