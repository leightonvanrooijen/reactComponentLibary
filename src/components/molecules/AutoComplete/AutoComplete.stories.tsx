import { ComponentMeta } from "@storybook/react"
import { AutoComplete } from "./AutoComplete"

export type PlayProps = { canvasElement: HTMLElement }

export default {
  title: "Molecules/Auto Complete",
  component: AutoComplete,
  args: {
    label: "Label",
    options: [
      { label: "Item 1", subLabel: "xyz", id: "xm" },
      { label: "Item 2", subLabel: "kzl", id: "xssm" },
    ],
  },
} as ComponentMeta<typeof AutoComplete>

export const Default = {}
