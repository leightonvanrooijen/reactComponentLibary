import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DropdownButton } from "./DropdownButton"

export default {
  title: "molecules/Dropdown Button",
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

export const Template: ComponentStory<typeof DropdownButton> = (args) => <DropdownButton>BUTTON</DropdownButton>

export const Default = Template.bind({})
