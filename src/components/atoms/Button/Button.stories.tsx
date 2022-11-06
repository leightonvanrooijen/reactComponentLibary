import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button } from "./Button"
import { FaChevronDown, FaTrash } from "react-icons/all"

export default {
  title: "atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>

export const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Small = Template.bind({})
Small.args = { children: "BUTTON", size: "Small" }

export const Medium = Template.bind({})
Medium.args = { children: "BUTTON" }

export const withLeftIcon = Template.bind({})
withLeftIcon.args = { children: "BUTTON", leftIcon: FaTrash }

export const withRightIcon = Template.bind({})
withRightIcon.args = { children: "BUTTON", rightIcon: FaChevronDown }

export const Disabled = Template.bind({})
Disabled.args = { children: "BUTTON", disabled: true }
