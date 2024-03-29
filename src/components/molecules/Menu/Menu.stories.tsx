import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Menu } from "./Menu"
import { MenuItem } from "../../atoms/MenuItem/MenuItem"
import { createRef } from "react"

export default {
  title: "molecules/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>

const Template: ComponentStory<typeof Menu> = (args) => {
  // PositionOffSets is typically handled by usePopOver when it is anchored to another element - see DropdownButton for an example
  const ref = createRef<HTMLDivElement>()
  if (ref.current) {
    ref.current.style.left = "10px"
    ref.current.style.top = "10px"
  }

  return (
    <Menu isOpen={true} strategy={"absolute"} width={"200px"} ref={ref}>
      <MenuItem onClick={() => undefined}>Item 1 cslknc mcdnkdcn ksxmln</MenuItem>
      <MenuItem onClick={() => undefined}>Item 2</MenuItem>
    </Menu>
  )
}

export const Primary = Template.bind({})
