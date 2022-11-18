const typography = Object.freeze({
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
  labelMedium: {
    fontSize: "1rem",
    fontWeight: "500",
    lineHeight: "1.25rem",
  },
  headingMedium: {
    fontSize: "1.75rem",
    fontWeight: "700",
    lineHeight: "2.25rem",
  },
})

const lighting = {
  menuShadow: "0 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
}

//    #997ea8 #caadda #6a5179 #000000 #000000
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
  transparent200: "#FFFFFF20",

  blue: "blue",
})

const color = Object.freeze({
  // Buttons
  buttonPrimaryFill: themePrimitives.primary500,
  buttonPrimaryText: themePrimitives.black,
  buttonPrimaryHover: themePrimitives.primary300,
  buttonPrimaryActive: themePrimitives.primary400,
  buttonPrimarySelectedFill: themePrimitives.primary400,
  buttonPrimarySelectedText: themePrimitives.black,
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
  labelPrimary: themePrimitives.primary500,

  // Accessibility
  focusOutline: themePrimitives.blue,
})

export const defaultTheme = { typography: { ...typography }, color: { ...color }, lighting: { ...lighting } }
export type Theme = typeof defaultTheme

export type TypographyVariants = keyof typeof typography
export const DEFAULT_TYPOGRAPHY_VARIANT: TypographyVariants = "bodyMedium"
