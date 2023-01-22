import { ComponentMeta } from "@storybook/react"
import { AutoComplete } from "./AutoComplete"

const defaultArgs = {
  label: "Label",
  options: [
    { label: "Item 1", subLabel: "xyz", id: "xm" },
    { label: "Item 2", subLabel: "kzl", id: "xssm" },
  ],
}

export default {
  title: "Molecules/Auto Complete",
  component: AutoComplete,
  args: defaultArgs,
} as ComponentMeta<typeof AutoComplete>

export const Default = {}
export const Two = () => {
  return (
    <div>
      <AutoComplete {...defaultArgs} />
      <AutoComplete {...defaultArgs} />
    </div>
  )
}
