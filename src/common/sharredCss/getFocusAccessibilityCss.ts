import { css, DefaultTheme } from "styled-components"

export const getFocusAccessibilityCss = (theme: DefaultTheme) => {
  return css`
    :focus {
      outline: 1px solid ${theme.color.focusOutline};
    }
  `
}
