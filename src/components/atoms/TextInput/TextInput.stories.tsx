import { TextInput } from "./TextInput"
import { ComponentMeta } from "@storybook/react"
import { useForm } from "react-hook-form"

const defaultArgs = {
  label: "Label",
}

export default {
  title: "atoms/TextInput",
  component: TextInput,
  args: defaultArgs,
} as ComponentMeta<typeof TextInput>

export const Default = {}

export const ErrorState = {
  args: { helperText: "Helper text appears here", state: "Error" },
}

export const Required = {
  args: { required: true },
}

export const WithHelperText = {
  args: { helperText: "Helper text appears here" },
}

export const WithLongHelperText = {
  args: {
    helperText: "Helper text appears here but it wraps when it gets too long",
  },
}

export const WithClear = {
  args: { clearable: true },
}
export const WithDefaultValue = {
  args: { defaultValue: "Leighton van Rooijen" },
}

export const WithLongValue = {
  args: { defaultValue: "Leighton von van Hoozle Doozle" },
}

export const WithForm = {
  render: () => {
    const { register, handleSubmit } = useForm()

    return (
      <form onSubmit={handleSubmit((data: any) => console.log(data))}>
        <TextInput {...defaultArgs} {...register("good")} clearable />
      </form>
    )
  },
}
