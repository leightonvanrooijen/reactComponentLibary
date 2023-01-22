import { MutableRefObject, useEffect } from "react"
import { resizeRight } from "./resizeRight"

export type UseResizableProps = {
  resizableRef: MutableRefObject<HTMLElement | null>
  minStep?: number
  maxWidth: number
}

export const useResizable = ({ resizableRef, minStep = 20, maxWidth }: UseResizableProps) => {
  const resize = resizeRight({ resizableRef, minStep, maxWidth })

  useEffect(() => {
    const mouseDown = () => document.addEventListener("mousemove", resize)
    const mouseUp = () => document.removeEventListener("mousemove", resize)

    document.addEventListener("mousedown", mouseDown)
    document.addEventListener("mouseup", mouseUp)

    return () => {
      document.removeEventListener("mousedown", mouseDown)
      document.removeEventListener("mouseup", mouseUp)
    }
  }, [])
}
