const typography = Object.freeze({
  bodyXSmall: {
    fontSize: "0.75rem",
    fontWeight: "light",
    lineHeight: "1rem",
  },
  bodySmall: {
    fontSize: "0.875rem",
    fontWeight: "normal",
    lineHeight: "1.25rem",
  },
  bodyMedium: {
    fontSize: "1rem",
    fontWeight: "normal",
    lineHeight: "1.5rem",
  },
  bodyLarge: {
    fontSize: "1.125rem",
    fontWeight: "normal",
    lineHeight: "1.75rem",
  },
  labelXSmall: {
    fontSize: "0.75rem",
    fontWeight: "400",
    lineHeight: "1rem",
  },
  labelSmall: {
    fontSize: "0.875rem",
    fontWeight: "500",
    lineHeight: "1rem",
  },
  labelMedium: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.25rem",
  },
  headingXSmall: {
    fontSize: "1.25rem",
    fontWeight: "700",
    lineHeight: "1.5rem",
  },
  headingSmall: {
    fontSize: "1.5rem",
    fontWeight: "700",
    lineHeight: "2rem",
  },
  headingMedium: {
    fontSize: "1.75rem",
    fontWeight: "700",
    lineHeight: "2.25rem",
  },
  headingLarge: {
    fontSize: "2rem",
    fontWeight: "700",
    lineHeight: "2.5rem",
  },
})

const lighting = {
  menuShadow: "0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  sideBarShadow: "7px -8px 9px -6px rgba(0,0,0,0.27)",
  headingShadow: `3px 4px 5px -3px rgba(0,0,0,0.62)`,
}

const themePrimitives = Object.freeze({
  white: "#ffffff",
  gray50: "#F6F6F6",
  gray100: "#EEEEEE",
  gray200: "#E2E2E2",
  gray300: "#CBCBCB",
  gray400: "#AFAFAF",
  gray500: "#6B6B6B",
  gray600: "#545454",
  gray700: "#333333",
  gray800: "#1F1F1F",
  gray900: "#141414",
  black: "#000000",

  primary300: "#67dcd5",
  primary400: "#5ec5bf",
  primary500: "#2aaaa4",
  primary600: "#2AAAA4",
  primary700: "#007a75",

  transparent: "#FFFFFF00",

  blue: "blue",

  red50: "#FFEFED",
  red100: "#FED7D2",
  red200: "#F1998E",
  red300: "#E85C4A",
  red400: "#E11900",
  red500: "#AB1300",
  red600: "#870F00",
  red700: "#5A0A00",
})
const color = Object.freeze({
  // Buttons
  buttonPrimaryFill: themePrimitives.primary500,
  buttonPrimaryText: themePrimitives.black,
  buttonPrimaryHover: themePrimitives.primary300,
  buttonPrimaryActive: themePrimitives.primary400,
  buttonPrimarySelectedFill: themePrimitives.primary400,
  buttonPrimarySelectedText: themePrimitives.black,

  buttonTextFill: themePrimitives.transparent,
  buttonTextText: themePrimitives.black,
  buttonTextHover: themePrimitives.gray200,
  buttonTextActive: themePrimitives.gray300,
  buttonTextSelectedFill: themePrimitives.gray300,
  buttonTextSelectedText: themePrimitives.black,

  buttonDisabledFill: themePrimitives.gray200,
  buttonDisabledText: themePrimitives.gray600,
  buttonDisabledActiveFill: themePrimitives.gray700,
  buttonDisabledActiveText: themePrimitives.gray100,

  // Icon Buttons
  iconButtonFill: themePrimitives.transparent,
  iconButtonText: themePrimitives.primary500,

  // Menu
  menuFill: themePrimitives.gray100,
  menuFillHover: themePrimitives.gray200,
  menuFontDefault: themePrimitives.gray300,
  menuFontDisabled: themePrimitives.gray500,
  menuFontHighlighted: themePrimitives.gray900,
  menuFontSelected: themePrimitives.gray900,
  menuFillDisabled: themePrimitives.gray200,

  // Typography
  typographyPrimary: themePrimitives.black,
  typographyError: themePrimitives.red400,
  labelPrimary: themePrimitives.primary500,
  labelError: themePrimitives.red400,

  // Accessibility
  focusOutline: themePrimitives.blue,

  // Snack bar
  snackbarBackgroundError: themePrimitives.red400,
  snackbarTextError: themePrimitives.white,

  // Skeleton
  skeletonBackground: themePrimitives.gray100,
  skeletonBackground100: themePrimitives.gray200,
})

const border = Object.freeze({
  radius100: "0.125rem",
  radius200: "0.25rem",
  radius300: "0.5rem",
  radius400: "0.75rem",
  radius500: "1rem",
})

export const defaultTheme = {
  typography,
  color,
  lighting,
  border,
}
export type Theme = typeof defaultTheme

export type TypographyVariants = keyof typeof typography
export const DEFAULT_TYPOGRAPHY_VARIANT: TypographyVariants = "bodyMedium"
