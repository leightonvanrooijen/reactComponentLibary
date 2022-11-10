import { ComponentMeta, ComponentStory } from "@storybook/react"
import { DropdownButton } from "./DropdownButton"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"

export default {
  title: "molecules/Dropdown Button",
  component: DropdownButton,
} as ComponentMeta<typeof DropdownButton>

const Template: ComponentStory<typeof DropdownButton> = (args) => <DropdownButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "BUTTON",
  menuItems: [
    <MenuItem onClick={() => undefined}>Item 1</MenuItem>,
    <MenuItem onClick={() => undefined}>Item 2</MenuItem>,
  ],
}
