import { Meta, StoryObj } from "@storybook/react"
import { SnackBar } from "./SnackBar"

const meta: Meta<typeof SnackBar> = {
  title: "molecules/Snack Bar",
  component: SnackBar,
}

export default meta
type Story = StoryObj<typeof SnackBar>

export const Default = {}
