import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Menu } from "./Menu"
import { MenuItem } from "../MenuItem/MenuItem"

export default {
  title: "atoms/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu isOpen={true} strategy={"absolute"} left={10} top={10} width={"150px"}>
    <MenuItem onClick={() => undefined}>Item 1</MenuItem>
    <MenuItem onClick={() => undefined}>Item 2</MenuItem>
  </Menu>
)

export const Default = Template.bind({})
