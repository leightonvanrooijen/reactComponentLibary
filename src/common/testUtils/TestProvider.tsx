import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../theme"
import { ProviderProps } from "../../components/atoms/Text/Typography.test"

export const TestProvider = ({ children, withTheme }: ProviderProps) => {
  let providers = <>{children}</>
  if (withTheme) {
    providers = <ThemeProvider theme={defaultTheme} children={providers} />
  }
  return providers
}
