import { TypographyVariants } from "../../theme"
import { ButtonSizes } from "../atoms/Button/Button"

export const getTypographyVariant = (variant: ButtonSizes): TypographyVariants => {
  switch (variant) {
    case "Small":
      return "bodySmall"
    default:
      return "labelMedium"
  }
}
