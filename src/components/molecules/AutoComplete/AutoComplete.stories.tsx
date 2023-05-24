import { ComponentMeta } from "@storybook/react"
import { AutoComplete } from "./AutoComplete"
import { useForm } from "react-hook-form"
import { faker } from "@faker-js/faker"
import { makeFakes } from "../../utils/makeFakes"

const fakeOption = () => {
  return {
    label: faker.commerce.productName(),
    subLabel: faker.commerce.productMaterial(),
    id: faker.datatype.uuid(),
  }
}

const fakeOptions = makeFakes(fakeOption)

const defaultArgs = {
  label: "Label",
  options: fakeOptions(2),
}

export default {
  title: "Molecules/Auto Complete",
  component: AutoComplete,
  args: defaultArgs,
} as ComponentMeta<typeof AutoComplete>

export const Default = {}

export const WithScroll = {
  args: { options: fakeOptions(20) },
}

export const WithRequired = {
  args: { required: true },
}
export const WithHelperText = {
  args: { helperText: "This field is required" },
}

export const ErrorState = {
  args: { state: "Error", helperText: "This field is required" },
}

export const WithForm = {
  render: () => {
    const { register, handleSubmit } = useForm()

    return (
      <form onSubmit={handleSubmit((data: any) => console.log(data))}>
        <AutoComplete {...defaultArgs} {...register("good")} />
        <button type="submit">Submit</button>
      </form>
    )
  },
}

export const Two = () => {
  return (
    <div>
      <AutoComplete {...defaultArgs} />
      <AutoComplete {...defaultArgs} />
    </div>
  )
}
