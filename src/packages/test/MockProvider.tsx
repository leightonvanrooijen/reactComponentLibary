import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../theme"

export const MockProvider = ({ children, withTheme }: { children: React.ReactNode; withTheme?: boolean }) => {
  let ProvidersApplied = <>{children}</>

  if (withTheme) {
    ProvidersApplied = <ThemeProvider theme={defaultTheme}>{ProvidersApplied}</ThemeProvider>
  }

  return ProvidersApplied
}
