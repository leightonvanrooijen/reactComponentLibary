import { Typography } from "./Typography"
import { ComponentMeta, ComponentStory } from "@storybook/react"

export default {
  title: "atoms/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const BodyMedium = Template.bind({})
BodyMedium.args = { children: "Some example text! Yay", variant: "bodyMedium" }

export const BodyLarge = Template.bind({})
BodyLarge.args = { children: "Some example text! Yay", variant: "bodyLarge" }

export const LabelMedium = Template.bind({})
LabelMedium.args = { children: "Some example text! Yay", variant: "labelMedium" }

export const HeadingMedium = Template.bind({})
HeadingMedium.args = { children: "Some example text! Yay", variant: "headingMedium" }
