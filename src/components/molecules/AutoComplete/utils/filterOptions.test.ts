import { filterOptions } from "./filterOptions"
import { fakeOptions } from "./options.fake"

describe("filterOptions", () => {
  it("filters options with labels containing the text", () => {
    const options = fakeOptions(5)

    const filteredOptions = filterOptions(options, options[0].label)

    expect(filteredOptions).toEqual([options[0]])
  })
  it("if there is a sub label it includes it in the filtering", () => {
    const options = fakeOptions(5)

    const filteredOptions = filterOptions(options, options[0].subLabel)

    expect(filteredOptions).toEqual([options[0]])
  })
})
