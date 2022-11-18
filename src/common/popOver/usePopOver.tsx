import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"
import { calculatePositionOffSets } from "./calculatePositionOffSets"
import { useShowPopOver } from "./useShowPopOver"

export type PopOverPositions = "left" | "top" | "right" | "bottom"

export type UsePopOverProps = {
  position?: PopOverPositions
  matchWidths?: boolean
}

export const usePopOver = <RT extends Element>({ position = "bottom", matchWidths = true }: UsePopOverProps = {}) => {
  let ref: MutableRefObject<RT | null> = useRef(null)
  let float: MutableRefObject<HTMLElement | null> = useRef(null)

  const [open, setOpen] = useState(false)

  useShowPopOver({ ref, float, setOpen })

  const floating = useCallback(
    (node: HTMLElement | null) => {
      if (!node) return
      float.current = node

      assertRefHasElement(float)
      assertRefHasElement(ref)

      const {
        bottom: refBottom,
        left: refLeft,
        width: refWidth,
        height: refHeight,
      } = ref.current.getBoundingClientRect()
      const { height } = node.getBoundingClientRect()
      const { xOffSet, yOffSet } = calculatePositionOffSets({
        position,
        refWidth,
        refHeight,
        floatHeight: height,
      })

      if (matchWidths) {
        node.style.width = `${refWidth}px`
      }
      node.style.left = `${refLeft + xOffSet}px`
      node.style.top = `${refBottom + yOffSet}px`
    },
    [open],
  )

  const reference = useCallback((node: RT | null) => {
    if (!node) return
    ref.current = node
  }, [])

  useEffect(() => {})

  return { reference, floating, open, setOpen, ref }
}

function assertRefHasElement<RT extends Element>(
  ref: MutableRefObject<RT | null>,
): asserts ref is MutableRefObject<RT> {
  if (!ref.current) {
    throw new Error(`Element expected`)
  }
}
