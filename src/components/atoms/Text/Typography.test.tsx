import { render } from "@testing-library/react"
import { Typography } from "./Typography"
import { ReactNode } from "react"
import { TestProvider } from "../../../common/testUtils/TestProvider"

export type ProviderProps = {
  withTheme: boolean
  children: ReactNode
}

const setUp = {
  basic: (text: string) => (
    <TestProvider withTheme>
      <Typography>{text}</Typography>
    </TestProvider>
  ),
}

describe("Typography", () => {
  it("renders text", () => {
    const text = "Hello"
    const { getByText } = render(setUp.basic(text))

    const typography = getByText(text)

    expect(typography).toBeTruthy()
  })
})
