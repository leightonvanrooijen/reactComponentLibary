import { PopOverPositions } from "./usePopOver"

export type PositionOffSets = {
  xOffSet: number
  yOffSet: number
}

export type CalculatePositionOffSetsProps = {
  position: PopOverPositions
  refHeight: number
  refWidth: number
  floatHeight: number
}

export const calculatePositionOffSets = <RT extends Element>({
  position,
  refHeight,
  refWidth,
  floatHeight,
}: CalculatePositionOffSetsProps): PositionOffSets => {
  switch (position) {
    case "top":
      return { xOffSet: 0, yOffSet: -refHeight - floatHeight + 4 }
    case "right":
      return { xOffSet: refWidth - 2, yOffSet: -refHeight / 2 - floatHeight / 2 }
    case "left":
      return { xOffSet: -refWidth - 2, yOffSet: -refHeight / 2 - floatHeight / 2 }
    case "bottom":
    default:
      return { xOffSet: 0, yOffSet: 2 }
  }
}
