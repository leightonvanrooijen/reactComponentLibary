import { render } from "@testing-library/react"
import { Typography } from "./Typography"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../../theme"
import { ReactNode } from "react"

export type ProviderProps = {
  withTheme: boolean
  children: ReactNode
}

export const TestProvider = ({ children, withTheme }: ProviderProps) => {
  let providers = <>{children}</>
  if (withTheme) {
    providers = <ThemeProvider theme={defaultTheme} children={providers} />
  }
  return providers
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
