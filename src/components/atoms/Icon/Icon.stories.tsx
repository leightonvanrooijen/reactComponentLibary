import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Icon } from "./Icon"
import { FaTractor } from "react-icons/fa"

export default {
  title: "atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Small = Template.bind({})
Small.args = { icon: FaTractor, size: "Small" }

export const Medium = Template.bind({})
Medium.args = { icon: FaTractor }
