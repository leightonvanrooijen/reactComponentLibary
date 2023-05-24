import { Meta, StoryObj } from "@storybook/react"
import React from "react"
import { Skeleton } from "./Skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "atoms/Skeleton",
  component: Skeleton,
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Primary: Story = {
  render: () => (
    <div style={{ height: "10px", width: "100px" }}>
      <Skeleton />
    </div>
  ),
}
