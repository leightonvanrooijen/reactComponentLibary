import { render } from "@testing-library/react"
import { Typography } from "./Typography"
import { ReactNode } from "react"
import { MockProvider } from "../../../packages/test/MockProvider"

export type ProviderProps = {
  withTheme: boolean
  children: ReactNode
}

const setUp = {
  basic: (text: string) => (
    <MockProvider withTheme>
      <Typography>{text}</Typography>
    </MockProvider>
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
