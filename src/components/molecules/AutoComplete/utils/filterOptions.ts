import { Option } from "../AutoComplete"

export const filterOptions = (options: Option[], value: string) => {
  return options.filter(({ label, subLabel }) => {
    return label.toLowerCase().includes(value.toLowerCase()) || subLabel?.toLowerCase().includes(value.toLowerCase())
  })
}
