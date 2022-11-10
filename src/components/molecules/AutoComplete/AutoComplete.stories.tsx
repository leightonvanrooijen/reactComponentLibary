import { ComponentMeta } from "@storybook/react"
import { AutoComplete } from "./AutoComplete"

export type PlayProps = { canvasElement: HTMLElement }

export default {
  title: "Molecules/Auto Complete",
  component: AutoComplete,
} as ComponentMeta<typeof AutoComplete>

export const Default = {
  args: {},
}
